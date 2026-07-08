/* Screen navigation layer, sits on top of the Engine.
   title-card -> menu-screen -> { new game, continue, load, settings }
   slots-screen is reused for both Load (from menu) and Save (from in-game controls). */

document.addEventListener("DOMContentLoaded", () => {
  const titleCard = document.getElementById("title-card");
  const menuScreen = document.getElementById("menu-screen");
  const slotsScreen = document.getElementById("slots-screen");
  const settingsScreen = document.getElementById("settings-screen");
  const slotsGrid = document.getElementById("slots-grid");
  const slotsHeading = document.getElementById("slots-heading");

  const allScreens = [titleCard, menuScreen, slotsScreen, settingsScreen];

  let slotsMode = "load"; // 'load' | 'save'
  let returnTarget = null; // where "Back" goes: a screen element, or null (= just reveal the running game)

  function showScreen(el) {
    allScreens.forEach((s) => s.classList.add("hidden"));
    el.classList.remove("hidden");
  }

  function hideAllScreens() {
    allScreens.forEach((s) => s.classList.add("hidden"));
  }

  function goBack() {
    hideAllScreens();
    if (returnTarget) showScreen(returnTarget);
  }

  function refreshContinueButton() {
    const hasSave = Engine.listSlots().some(Boolean);
    document.getElementById("menu-continue").disabled = !hasSave;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function renderSlots() {
    slotsGrid.innerHTML = "";
    const slots = Engine.listSlots();
    slots.forEach((data, i) => {
      const n = i + 1;
      const card = document.createElement("button");
      card.className = "slot-card" + (data ? "" : " empty");
      if (!data) {
        card.innerHTML = `<div class="slot-number">Slot ${n}</div><div class="slot-label">Empty</div>`;
        if (slotsMode === "load") card.disabled = true;
      } else {
        const timeStr = new Date(data.savedAt).toLocaleString();
        card.innerHTML = `<div class="slot-number">Slot ${n}</div><div class="slot-label">${escapeHtml(data.label || "...")}</div><div class="slot-time">${timeStr}</div>`;
      }
      card.addEventListener("click", () => {
        if (slotsMode === "load") {
          if (!data) return;
          hideAllScreens();
          Engine.loadFromSlot(n);
        } else {
          Engine.saveToSlot(n);
          renderSlots();
        }
      });
      slotsGrid.appendChild(card);
    });
  }

  // ---------------- title -> menu ----------------
  document.getElementById("start-btn").addEventListener("click", () => {
    refreshContinueButton();
    showScreen(menuScreen);
  });

  // ---------------- menu actions ----------------
  document.getElementById("menu-newgame").addEventListener("click", () => {
    hideAllScreens();
    Engine.newGame();
  });

  document.getElementById("menu-continue").addEventListener("click", () => {
    const slots = Engine.listSlots();
    let latestSlot = -1,
      latestTime = -1;
    slots.forEach((s, i) => {
      if (s && s.savedAt > latestTime) {
        latestTime = s.savedAt;
        latestSlot = i + 1;
      }
    });
    if (latestSlot === -1) return;
    hideAllScreens();
    Engine.loadFromSlot(latestSlot);
  });

  document.getElementById("menu-load").addEventListener("click", () => {
    slotsMode = "load";
    slotsHeading.textContent = "Load";
    returnTarget = menuScreen;
    renderSlots();
    showScreen(slotsScreen);
  });

  document.getElementById("menu-settings").addEventListener("click", () => {
    returnTarget = menuScreen;
    showScreen(settingsScreen);
  });

  // ---------------- in-game controls (save/load mid-scene) ----------------
  document.getElementById("save-btn").addEventListener("click", () => {
    slotsMode = "save";
    slotsHeading.textContent = "Save";
    returnTarget = null; // Back just reveals the running game
    renderSlots();
    showScreen(slotsScreen);
  });

  document.getElementById("load-btn").addEventListener("click", () => {
    slotsMode = "load";
    slotsHeading.textContent = "Load";
    returnTarget = null;
    renderSlots();
    showScreen(slotsScreen);
  });

  // ---------------- back buttons ----------------
  document.getElementById("slots-back").addEventListener("click", goBack);
  document.getElementById("settings-back").addEventListener("click", goBack);

  // ---------------- settings (persisted, not yet wired to real audio) ----------------
  const musicSlider = document.getElementById("music-volume");
  const sfxSlider = document.getElementById("sfx-volume");
  const savedSettings = JSON.parse(
    localStorage.getItem("lcs-settings") || "{}",
  );
  if (savedSettings.music !== undefined)
    musicSlider.value = savedSettings.music;
  if (savedSettings.sfx !== undefined) sfxSlider.value = savedSettings.sfx;

  function persistSettings() {
    localStorage.setItem(
      "lcs-settings",
      JSON.stringify({ music: musicSlider.value, sfx: sfxSlider.value }),
    );
  }
  musicSlider.addEventListener("input", persistSettings);
  sfxSlider.addEventListener("input", persistSettings);
});
