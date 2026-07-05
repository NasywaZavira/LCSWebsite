/* ============================================================
   Lost-Child; Syndrome — VN engine core
   A script is an array of "beats". Each beat is one of:

   { bg: 'facility_hall' }                     switch background
   { sprite:'left'|'right', name:'Noir',
     art:'noir_neutral.png', dim:true }        show/update a sprite (art optional -> placeholder)
   { hide:'left'|'right' }                     hide a sprite
   { speaker:'Noir', text:'...' }               spoken dialogue (quoted)
   { narration:'...' }                          plain narration/prose, no name shown
   { thought:'...', speaker:'Marley' }          italic inner monologue (speaker optional)
   { speaker:'Marley', text:'...', portrait:'neutral' }
                                                 dialogue/thought beats can add `portrait:
                                                 'neutral'|'confused'|'smile'|'wary'` to show/update
                                                 that character's expression box. Portrait box hides
                                                 automatically when the beat has no portrait set.
   { sfx:'thud, shuffle' } / { bgm:'work ambience' }
                                                 ambient audio cue caption (placeholder until
                                                 real audio exists — non-blocking, auto-continues)
   { epigraph:'...' }                           full-screen cold-open line (title-sequence style);
                                                 ends automatically once a non-epigraph beat plays
   { setFilter:'red' } / { setFilter:null }     toggle the persistent "altered vision" filter
   { effect:'shake' | 'realboot' }              plays a screen effect, then continues
   { choice:'Prompt text', options:[
        { text:'Option A', goto:'labelA' },
        { text:'Option B', goto:'labelB' } ] }  branching choice (one-shot, dismisses after pick)
   { explore:'Prompt', hotspots:[
        { label:'Check: Window', text:'...', portrait:'wary' } ],
     continueText:'Hallway', continueGoto:'hallway' }
                                                 point-and-click hotspots that can be revisited.
                                                 Clicking a hotspot plays its text through the normal
                                                 textbox (Marley's POV, icon stays visible) — advancing
                                                 that line returns to the hotspot menu automatically.
                                                 continue button advances the scene for good.
   { label:'labelA' }                           jump target (no-op beat)
   { goto:'labelC' }                            unconditional jump
   { end:true }                                  ends the scene

   Beats play in order; the engine advances on click/space/enter
   except for beats that pause (choice) or take a timed effect.
   ============================================================ */

const Engine = (() => {
  let script = [];
  let index = 0;
  let waitingForAdvance = false;
  let flags = {};
  let pendingExploreReturn = null; // set while showing a hotspot's text; resumes the explore menu on advance
  let epigraphFadeTimer = null;

  const els = {};

  function init(domRefs) {
    Object.assign(els, domRefs);
    els.textbox.addEventListener("click", onAdvanceClick);
    document.addEventListener("keydown", (e) => {
      if (e.code === "Space" || e.code === "Enter") onAdvanceClick();
    });
  }

  function loadScript(newScript, startLabel) {
    script = newScript;
    index = startLabel ? findLabel(startLabel) : 0;
    flags = {};
  }

  function findLabel(label) {
    const i = script.findIndex((b) => b.label === label);
    return i === -1 ? 0 : i;
  }

  function onAdvanceClick() {
    if (!waitingForAdvance) return;
    waitingForAdvance = false;
    if (pendingExploreReturn) {
      const beat = pendingExploreReturn;
      pendingExploreReturn = null;
      return showExplore(beat);
    }
    step();
  }

  function start() {
    step();
  }

  function step() {
    if (index >= script.length) return finish();
    const beat = script[index];
    index++;

    if (beat.label) return step(); // no-op, continue immediately

    if (beat.goto) {
      index = findLabel(beat.goto);
      return step();
    }

    if (beat.bg) {
      setBackground(beat.bg);
      return step();
    }

    if (beat.sprite) {
      setSprite(beat);
      return step();
    }

    if (beat.hide) {
      hideSprite(beat.hide);
      return step();
    }

    if (beat.effect) {
      return playEffect(beat.effect, () => step());
    }

    if (beat.setFlag) {
      flags[beat.setFlag] = beat.value ?? true;
      return step();
    }

    if (beat.setFilter !== undefined) {
      setFilter(beat.setFilter);
      return step();
    }

    if (beat.sfx || beat.bgm) {
      showCue(beat);
      return step();
    }

    if (beat.epigraph) {
      return showEpigraph(beat.epigraph);
    }

    if (beat.explore) {
      return showExplore(beat);
    }

    if (beat.choice) {
      return showChoice(beat);
    }

    if (beat.thought) {
      return showLine({ ...beat, _mode: "thought" });
    }

    if (beat.speaker || beat.narration) {
      return showLine(beat);
    }

    if (beat.end) {
      return finish();
    }

    return step();
  }

  function setBackground(name) {
    const showing = els.bgA.classList.contains("active") ? els.bgA : els.bgB;
    const hidden = showing === els.bgA ? els.bgB : els.bgA;
    hidden.className = "bg bg-" + name + " active";
    showing.classList.remove("active");
  }

  function setSprite(beat) {
    const el = beat.sprite === "left" ? els.spriteLeft : els.spriteRight;
    el.dataset.name = beat.name || "";
    el.classList.add("active", "sprite-placeholder");
    el.classList.toggle("dim", !!beat.dim);
    if (beat.art) {
      el.style.backgroundImage = `url('assets/sprites/${beat.art}')`;
      el.classList.remove("sprite-placeholder");
    } else {
      el.style.backgroundImage = "none";
    }
  }

  function hideSprite(side) {
    const el = side === "left" ? els.spriteLeft : els.spriteRight;
    el.classList.remove("active");
  }

  function playEffect(name, cb) {
    const game = els.game;
    if (name === "shake") {
      game.classList.add("shake");
      els.scanlines.classList.add("on");
      setTimeout(() => {
        game.classList.remove("shake");
        cb();
      }, 1400);
    } else if (name === "realboot") {
      game.classList.add("realboot");
      setTimeout(() => {
        game.classList.remove("realboot");
        cb();
      }, 620);
    } else {
      cb();
    }
  }

  function showLine(beat) {
    hideEpigraph();
    const mode =
      beat._mode === "thought"
        ? "thought"
        : beat.narration
          ? "narration"
          : "dialogue";
    els.namebox.textContent =
      mode === "dialogue"
        ? beat.speaker || ""
        : beat.speaker && mode === "thought"
          ? beat.speaker
          : "";
    els.namebox.classList.toggle("dim", mode === "thought");
    els.dialogueText.textContent = beat.narration || beat.thought || beat.text;
    els.dialogueText.classList.remove("narration", "thought");
    els.dialogueText.classList.add(mode === "dialogue" ? "narration" : mode); // dialogue reuses plain styling
    updatePortrait(beat, mode);
    waitingForAdvance = true;
  }

  function updatePortrait(beat, mode) {
    const force = !!beat._forcePortrait;
    if (!force && (mode === "narration" || !beat.speaker)) {
      els.portraitBox.classList.add("hidden");
      els.textboxDivider.classList.add("hidden");
      return;
    }
    els.portraitBox.classList.remove("hidden");
    els.textboxDivider.classList.remove("hidden");

    const speakerName = beat.speaker || "Marley";
    const portraitState = beat.portrait || "neutral";
    const file = `assets/sprites/${speakerName.toLowerCase()}_${portraitState}.png`;
    if (els.portraitImg.dataset.current !== file) {
      els.portraitImg.dataset.current = file;
      els.portraitImg.classList.remove("loaded");
      els.portraitFallback.classList.remove("hidden");
      els.portraitImg.onload = () => {
        els.portraitImg.classList.add("loaded");
        els.portraitFallback.classList.add("hidden");
      };
      els.portraitImg.onerror = () => {
        els.portraitImg.classList.remove("loaded");
        els.portraitFallback.classList.remove("hidden");
      };
      els.portraitImg.src = file;
    }
  }

  function setFilter(name) {
    els.game.classList.toggle("filter-red", name === "red");
  }

  function showCue(beat) {
    const text = beat.sfx ? `» sfx: ${beat.sfx}` : `♪ ${beat.bgm}`;
    els.cueCaption.textContent = text;
    els.cueCaption.classList.add("show");
    clearTimeout(showCue._t);
    showCue._t = setTimeout(
      () => els.cueCaption.classList.remove("show"),
      2200,
    );
  }

  function showEpigraph(text) {
    clearTimeout(epigraphFadeTimer);

    els.textboxWrap.classList.remove("visible");
    els.epigraphLayer.classList.add("visible");
    els.epigraphText.classList.remove("show");
    els.epigraphText.classList.add("is-hiding");

    epigraphFadeTimer = setTimeout(() => {
      els.epigraphText.textContent = text;
      els.epigraphText.classList.remove("is-hiding");
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          els.epigraphText.classList.add("show");
        }),
      );
    }, 360);

    waitingForAdvance = true;
    els.epigraphLayer.onclick = onAdvanceClick;
  }

  function hideEpigraph() {
    if (els.epigraphLayer.classList.contains("visible")) {
      clearTimeout(epigraphFadeTimer);
      els.epigraphText.classList.remove("show");
      els.epigraphText.classList.add("is-hiding");
      els.epigraphLayer.classList.remove("visible");
    }
    els.textboxWrap.classList.add("visible");
  }

  function showExplore(beat) {
    if (!beat._checked) beat._checked = new Set();

    els.choiceLayer.innerHTML = "";
    const prompt = document.createElement("p");
    prompt.className = "choice-prompt";
    prompt.style.cssText =
      "font-family:var(--mono);font-size:12px;letter-spacing:.12em;color:var(--ash);text-transform:uppercase;";
    prompt.textContent = beat.explore;
    els.choiceLayer.appendChild(prompt);

    const hotspotWrap = document.createElement("div");
    hotspotWrap.className = "explore-hotspots";
    beat.hotspots.forEach((h) => {
      const btn = document.createElement("button");
      btn.className =
        "hotspot-btn" + (beat._checked.has(h.label) ? " checked" : "");
      btn.textContent = h.label;
      btn.addEventListener("click", () => {
        beat._checked.add(h.label);
        els.choiceLayer.classList.remove("visible");
        pendingExploreReturn = beat;
        showLine({
          narration: h.text,
          speaker: "Marley",
          portrait: h.portrait || "neutral",
          _forcePortrait: true,
        });
      });
      hotspotWrap.appendChild(btn);
    });
    els.choiceLayer.appendChild(hotspotWrap);

    if (beat.continueGoto) {
      const cont = document.createElement("button");
      cont.className = "continue-btn";
      cont.textContent = beat.continueText || "continue";
      cont.addEventListener("click", () => {
        els.choiceLayer.classList.remove("visible");
        index = findLabel(beat.continueGoto);
        step();
      });
      els.choiceLayer.appendChild(cont);
    }

    els.choiceLayer.classList.add("visible");
  }

  function showChoice(beat) {
    els.choiceLayer.innerHTML = "";
    if (beat.choice) {
      const prompt = document.createElement("p");
      prompt.className = "choice-prompt";
      prompt.style.cssText =
        "font-family:var(--mono);font-size:12px;letter-spacing:.12em;color:var(--ash);text-transform:uppercase;margin-bottom:6px;";
      prompt.textContent = beat.choice;
      els.choiceLayer.appendChild(prompt);
    }
    beat.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.textContent = opt.text;
      btn.addEventListener("click", () => {
        if (opt.setFlag) flags[opt.setFlag] = opt.value ?? true;
        els.choiceLayer.classList.remove("visible");
        index = findLabel(opt.goto);
        step();
      });
      els.choiceLayer.appendChild(btn);
    });
    els.choiceLayer.classList.add("visible");
  }

  function finish() {
    els.dialogueText.textContent = "— end of prologue —";
    els.namebox.textContent = "";
    waitingForAdvance = false;
  }

  function save(slot = "default") {
    localStorage.setItem("lcs-save-" + slot, JSON.stringify({ index, flags }));
  }

  function load(slot = "default") {
    const raw = localStorage.getItem("lcs-save-" + slot);
    if (!raw) return false;
    const data = JSON.parse(raw);
    index = data.index;
    flags = data.flags || {};
    step();
    return true;
  }

  function skip() {
    // fast-forward through dialogue until the next choice or end
    while (waitingForAdvance || index < script.length) {
      if (waitingForAdvance) {
        waitingForAdvance = false;
      }
      const beat = script[index];
      if (!beat) break;
      if (beat.choice) {
        step();
        return;
      }
      step();
      if (waitingForAdvance) continue;
      else break;
    }
  }

  return { init, loadScript, start, save, load, skip, flags: () => flags };
})();
