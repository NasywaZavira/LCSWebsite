/* Lost-Child; Syndrome — Prologue (revised)
   Source: PROLOG.docx, adapted beat-by-beat into the engine's script format.
   POV: Marley, journalist, editorial office, evening.

   Legend mapping (per the author's docx):
     normal text        -> { narration: '...' }   (plain, unattributed)
     italic / monologue -> { thought: '...', speaker:'Marley' }
     "quoted text"       -> { speaker:'Marley', text: '...' }   (spoken aloud)

   The draft cuts off right as the Hallway section begins — that stub
   is marked clearly below so it's obvious where to keep writing. */

const PROLOGUE_SCRIPT = [
  // Cold open
  { bg: "void" },
  { epigraph: "If you are lost, and the thought becomes the truth." },
  { epigraph: "About what kind of future will you create?" },
  { epigraph: "Is it a happy ending?" },
  { epigraph: "or The bittersweet one?" },
  { epigraph: "The endless cycle?" },
  { epigraph: "Or..." },

  { bg: "iori-prologue", bgFade: 3000 },
  { epigraph: "If anything... I  would like to see it myself." },
  { hide: "left" },

  // Marley enters the office
  { bgm: "work ambience, keyboards clicking, humming buzz" },
  { bg: "office_evening" },
  {
    narration:
      "Marley enters the news agency, they entered, nearly tripping over their own bag.",
  },
  {
    narration:
      "A laptop bag hanging on one shoulder, a camera bag on the other, hand holding a handicam with a tangled cable in their right hand.",
  },
  {
    narration:
      "Marley stopped in the middle of the room. They took a deep breath.",
  },

  // At the desk
  { bg: "office_desk" },
  { thought: "Okay. Made it.", speaker: "Marley", portrait: "smile" },
  { thought: "Barely.", speaker: "Marley", portrait: "wary" },
  {
    speaker: "Marley",
    text: "...wait\u2014no, no\u2014",
    portrait: "confused",
  },
  { sfx: "thud, shuffle" },
  {
    narration:
      "I fumble, catching the bag just before it hits the floor. The zipper\u2019s half-open. Of course it is.",
  },
  {
    narration:
      "I stand there for a second. Just... holding everything together.",
  },
  { narration: "Literally." },
  {
    thought: "This is fine. This is totally fine.",
    speaker: "Marley",
    portrait: "wary",
  },
  { narration: "The office is quieter than usual." },
  {
    narration:
      "A few lights are still on, casting that pale, washed-out glow over empty desks. Someone\u2019s monitor flickers in the distance, forgotten. The hum of the air conditioning fills the gaps where people should be.",
  },
  {
    narration:
      "I make my way to my desk, weaving past chairs that were left slightly out of place.",
  },

  { sfx: "bags dropping, fabric rustling" },
  {
    narration:
      "I let everything fall onto the desk in a small, disastrous mess.",
  },
  { speaker: "Marley", text: "...okay.", portrait: "neutral" },
  { thought: "Step one: breathe.", speaker: "Marley", portrait: "neutral" },
  { thought: "Step two\u2014", speaker: "Marley", portrait: "confused" },
  { narration: "I stare at the pile." },
  { thought: "Right. Work.", speaker: "Marley", portrait: "neutral" },
  {
    narration:
      "I unzip the bag fully this time and pull out the handicam, careful\u2014well, trying to be careful\u2014not to tug the cable that\u2019s already half-wrapped around it.",
  },
  { sfx: "plastic clicking, cable dragging" },
  {
    speaker: "Marley",
    text: "Why is it always like this...",
    portrait: "wary",
  },
  { narration: "The cable slips from my hand. Drops. Stupid me." },
  { sfx: "tap" },
  {
    narration:
      "I crouch down to grab it, nearly bumping my head on the desk on the way back up.",
  },
  { speaker: "Marley", text: "...ow.", portrait: "confused" },
  { thought: "Graceful.", speaker: "Marley", portrait: "wary" },
  { narration: "I plug the handicam into my laptop. It takes two tries." },
  { sfx: "click... click" },
  { narration: "The screen lights up, reflecting faintly in my eyes." },

  { narration: "A list of files appears. Timestamps. Raw footage." },
  { thought: "Today\u2019s footage.", speaker: "Marley", portrait: "neutral" },
  { thought: "Right... the scene.", speaker: "Marley", portrait: "wary" },
  {
    thought:
      "I hover over the first file. My finger hesitates on the trackpad.",
    speaker: "Marley",
    portrait: "confused",
  },
  { thought: "It\u2019s just work.", speaker: "Marley", portrait: "neutral" },
  { thought: "Just footage.", speaker: "Marley", portrait: "neutral" },
  { thought: "Why am I hesitant?", speaker: "Marley", portrait: "confused" },
  { speaker: "Marley", text: "...play.", portrait: "neutral" },

  { sfx: "static, faint background noise" },
  {
    narration:
      "The video opens shakily. Streetlights. Police tape. Someone talking off-camera.",
  },
  {
    thought:
      "It\u2019s a mess of motion and sound\u2014like I didn\u2019t know where to look when I recorded it.",
    speaker: "Marley",
    portrait: "wary",
  },
  {
    thought: "I should\u2019ve held the camera steadier.",
    speaker: "Marley",
    portrait: "confused",
  },
  { narration: "I lean back slightly, exhaling." },
  { narration: "My eyes feel heavier than they should." },
  {
    thought: "I\u2019ll just review this... then write the draft...",
    speaker: "Marley",
    portrait: "neutral",
  },
  { thought: "Just a quick pass.", speaker: "Marley", portrait: "neutral" },

  { narration: "The cursor blinks on an empty document beside the video." },
  { narration: "Waiting." },
  { speaker: "Marley", text: "...right.", portrait: "neutral" },
  { thought: "I type a title.", speaker: "Marley", portrait: "neutral" },
  { narration: '"Recent Murder Case \u2014 Investigation Ongoing"' },
  {
    thought: "Why does it feel like I\u2019ve written this already...?",
    speaker: "Marley",
    portrait: "confused",
  },
  { narration: "I shake my head, rubbing my eyes." },
  { sfx: "fabric shift" },
  { speaker: "Marley", text: "...just tired.", portrait: "wary" },
  { narration: "I rest my head against my hand." },
  { narration: "Just for a second." },

  // The wrongness
  { bgm: "low hum of AC, then all BGM slowly fades out" },
  { bg: "office_empty" },
  { bgm: "low hum" },
  { narration: "My eyes open." },
  { narration: "For a second, everything looks exactly where I left it." },
  { narration: "My desk. My laptop." },
  { narration: "My handicam also still plugged to my laptop." },
  { thought: "...huh?", speaker: "Marley", portrait: "confused" },
  { narration: "I straighten slightly, blinking the blur out of my vision." },
  { narration: "The office is... quiet." },
  { narration: "Too quiet." },
  { speaker: "Marley", text: "...hello?", portrait: "wary" },
  { narration: "No response." },
  {
    narration:
      "Not even the faint clacking of keyboards from the other side of the room.",
  },
  { narration: "Not even footsteps." },
  { narration: "Nothing." },
  { narration: "I glance around." },
  { narration: "The lights are still on\u2014but dimmer." },
  { narration: "Or maybe... farther away?" },
  {
    thought: "Did everyone already leave...?",
    speaker: "Marley",
    portrait: "confused",
  },
  { narration: "I stand up from my chair." },
  { sfx: "chair legs scraping eerily" },
  {
    thought: "The sound echoes. Too much.",
    speaker: "Marley",
    portrait: "wary",
  },
  { speaker: "Marley", text: "...that\u2019s weird.", portrait: "wary" },
  { narration: "I step away from my desk." },

  { setFilter: "red" },

  // Exploration
  {
    explore: "Exploration Begins",
    hotspots: [
      {
        label: "Check: Nearby Desks",
        text: "Most of them are empty. Chairs pushed in too neatly. Monitors turned off.",
        portrait: "wary",
      },
      {
        label: "Check: Window",
        text: "I move toward the window. The city outside should be there\u2014usually lit with lights, cars, something. But... it\u2019s dark. I can\u2019t even see anything past this window.",
        portrait: "confused",
      },
    ],
    continueText: "Go to the Hallway \u2192",
    continueGoto: "hallway",
  },

  // ==================== the hallway ====================
  { label: "hallway" },
  { bg: "hallway", bgFade: 1800 },

  { speaker: "Marley", text: ". . .", portrait: "wary" },
  {
    thought: "Where's everybody else....?",
    speaker: "Marley",
    portrait: "confused",
  },
  { speaker: "Marley", text: "Hello...?", portrait: "wary" },

  { sfx: "thud" },
  {
    narration:
      "My whole body locks up. That sounded so loud in this moment where everything is silent.",
  },
  { thought: "...that wasn't me.", speaker: "Marley", portrait: "wary" },
  {
    narration:
      "I turn toward the sound, slow, like turning any faster might make it real. The hallway stretches out ahead of me, longer than I remember it being. Longer than it should be.",
  },
  { speaker: "Marley", text: "H-hello? Is someone there?", portrait: "wary" },
  {
    narration:
      "Nothing answers. Just the hum. The same low hum that's been following me since I opened my eyes.",
  },
  { narration: "I take a step. Then another." },
  {
    narration:
      "The handicam is still in my hand. I don't remember picking it back up.",
  },
  {
    thought: "Right... Evidence, just in case something happened.",
    speaker: "Marley",
    portrait: "confused",
  },
  {
    narration:
      "I lift it, framing the hallway through the little flip-out screen instead of my own eyes. It feels safer that way, somehow. Like I'm watching a video of this happening to someone else, instead of living it.",
  },
  { narration: "The image flickers. Static, then clear again." },
  { sfx: "static crackle" },
  {
    speaker: "Marley",
    text: "...Okay. Okay, that's normal. Old equipment. That's all.",
    portrait: "neutral",
  },
  {
    speaker: "Marley",
    text: "Note to myself, I should probably buy a new handicam after earning my salary this month...",
    portrait: "smile",
  },
  { narration: "I don't believe myself but I keep walking anyway." },

  // ---------------- second exploration phase ----------------
  {
    explore: "Continue Exploration",
    hotspots: [
      {
        label: "Check: Break Room",
        portrait: "wary",
        beats: [
          {
            narration:
              "The break room door is open. The vending machine inside is still running, its light humming that same sickly fluorescent white, snacks lined up neat behind the glass like nothing's wrong at all.",
          },
          {
            thought: "Right, the vending machine still works. How convenient",
            portrait: "wary",
          },
          {
            narration:
              "There's a whiteboard on the wall by the sink, the one people scribble reminders on. Meeting at 3. Don't forget to restock coffee. Someone drew a badly-proportioned cat next to a name I can't read.",
          },
          { narration: "I take a step closer." },
          {
            narration:
              "The same three lines are written over and over, stacked on top of each other in different handwriting, like six different people wrote the exact same thing without erasing what came before.",
          },
          {
            speaker: "Marley",
            text: "...'don't forget.' Don't forget what?",
            portrait: "confused",
          },
          {
            narration:
              "I reach out. My fingertip touches the board. The marker ink smears under my touch, wet, even though it should've dried hours ago.",
          },
          { narration: "I pull my hand back fast." },
          {
            thought: "That's not right. That's not right, that's not\u2014",
            portrait: "wary",
          },
          { sfx: "static crackle" },
        ],
      },
      {
        label: "Check: Desks with Photos",
        portrait: "confused",
        beats: [
          {
            narration:
              "There's a row of desks near the window I didn't check before. Family photos, usually. A coworker's kid's drawing taped to a monitor. Little things people bring in to make a desk feel like theirs.",
          },
          {
            narration:
              "The frames are still there but the photos inside them aren't. Every single one is blank.",
          },
          { speaker: "Marley", text: "...Weird.", portrait: "confused" },
          {
            thought: "Wait. Whose desk is this supposed to be?",
            portrait: "confused",
          },
          {
            narration:
              "I stare at the nameplate. It's blank too. I know I've walked past this desk every day for months. I know there's supposed to be a name here.",
          },
          { narration: "I can't remember it." },
          { narration: "I can't remember it." },
          {
            narration:
              "My chest tightens. I press a hand to my notebook pocket out of habit\u2014the little one I always carry, the one I write everything down in so I don't lose it later. I pull it out and flip it open with shaking fingers.",
          },
          { narration: "Pages and pages of my own handwriting. Except..." },
          {
            narration:
              "Except some of it isn't. A few entries near the back are written smaller, tighter, slanted the wrong way. Notes I don't remember taking. A sentence circled twice: \u201cask B about that person.\u201d I don't know a B. I don't know who is the person mentioned.",
          },
          { speaker: "Marley", text: "I didn't write this.", portrait: "wary" },
          { speaker: "Marley", text: "Right...?", portrait: "confused" },
          { sfx: "faint, distant laughter" },
          { narration: "My head snaps up." },
          { speaker: "Marley", text: "...Hello?", portrait: "wary" },
          { narration: "Silence answers me." },
          {
            narration:
              "I shove the notebook into my pocket and keep moving, faster now, camera still raised like it's a shield instead of a recording device.",
          },
        ],
      },
      {
        label: "Check: Stairwell Door",
        portrait: "wary",
        beats: [
          {
            narration:
              "At the end of the hall there's a door I know leads to the stairwell. It's propped open a few inches, just enough for cold air to bleed through the gap. Actual cold, the kind that raises the hair on my arms, its giving me the creeps.",
          },
          {
            thought:
              "That door's never open. Facilities keeps it locked for fire code or something.",
            portrait: "wary",
          },
          { narration: "I push it open the rest of the way." },
          { sfx: "door hinge groan" },
          {
            narration:
              "The stairwell goes down further than it should. I can see maybe three flights before the light gives out completely, swallowed by a dark that doesn't look like ordinary dark. It looks thicker. Like it's got weight to it.",
          },
          {
            narration:
              "Something echoes up from below. Not footsteps exactly. More like\u2014dragging. Slow, deliberate, uneven, like something with too many limbs figuring out how to use the ones it has.",
          },
          { speaker: "Marley", text: "...Nope.", portrait: "wary" },
          {
            narration:
              "I let the door swing shut, hands trembling around the handicam.",
          },
          { sfx: "door slam" },
          {
            narration:
              "The bang of it echoes down the empty hallway, way too loud, way too long. It shouldn't still be echoing. It's been at least five seconds.",
          },
          { narration: "It's still echoing." },
          {
            speaker: "Marley",
            text: "Okay. Okay, think. Think, think\u2014",
            portrait: "wary",
          },
          {
            thought:
              "Fire exit's on the other end of the floor. Past the elevators. I can make it there without going near that door again.",
            portrait: "confused",
          },
        ],
      },
    ],
    continueText: "Turn to Go \u2192",
    continueGoto: "chase_start",
  },

  // ==================== the chase ====================
  { label: "chase_start" },
  { narration: "I turn to go." },
  // NOTE (author's TBA): exact sound for "something moves at the edge of the frame" not decided yet
  { sfx: "something moves at the edge of the frame" },
  { narration: "The handicam screen catches it before I do, I thought so." },
  {
    narration:
      "A shape at the far end of the hall, just past the edge of the light. Tall. Too still to be a person standing there, too shaped to be a coat rack or a shadow.",
  },
  { narration: "I lower the camera and look with my own eyes." },
  { narration: "There's nothing there." },
  { narration: "I raise the camera again." },
  { effect: "realboot" },
  { narration: "It's still there. On the screen. Only on the screen." },
  {
    speaker: "Marley",
    text: "...No. No, no, that's not\u2014",
    portrait: "wary",
  },
  {
    narration:
      "The shape tilts. Like it's looking at the lens. Like it knows exactly what's holding it.",
  },
  // NOTE (author): "distortion swell" BGM, tension similar to Re:Zero's horror beats
  { bgm: "distortion swell" },
  { effect: "shake" },
  {
    narration:
      "Every light in the hallway flickers at once, and for half a second the whole office looks wrong, walls bent slightly inward, ceiling too low, floor too long, like the building took a breath and forgot how to hold its shape.",
  },
  {
    speaker: "Marley",
    text: "...okay, running now, running is good, running is the plan\u2014",
    portrait: "wary",
  },
  {
    narration:
      "I don't remember deciding to move. My legs are just moving, camera still clutched in one hand, my bag strap slipping off my shoulder and dragging behind me. Every door I pass rattles like something's testing the handle from the inside. The hum isn't a hum anymore, it's closer to breathing, uneven, wet, keeping pace with my footsteps like it's learning my rhythm.",
  },
  { sfx: "rapid footsteps, breathing" },
  {
    speaker: "Marley",
    text: "This isn't\u2014this isn't my office, this isn't my office, this isn't\u2014",
    portrait: "wary",
  },
  {
    thought: "Elevators. Elevators, elevators, where are the\u2014",
    speaker: "Marley",
    portrait: "wary",
  },
  {
    narration:
      "The hallway forks. I don't remember it forking. I take the left without thinking, and the left keeps going, and going, doors sliding past too fast to count, and somewhere behind me something that sounds almost like my name gets called in a voice that almost sounds like mine.",
  },
  { speaker: "Marley", text: "\u2014!!!", portrait: "wary" },
  { sfx: "impact, camera drops" },
  {
    narration:
      "My foot catches on something\u2014a cable, a chair leg, the edge of the world itself for all I know\u2014and the handicam flies from my hand. I hit the floor hard, palms first, the sting of it barely registering over the sound of my own heartbeat slamming in my ears.",
  },
  { narration: "I look up." },
  {
    narration:
      "The hallway lights go out, one by one, in a line, moving toward me like something is walking down the row and switching them off with its hand.",
  },
  { speaker: "Marley", text: "No\u2014no, no, please\u2014", portrait: "wary" },
  {
    thought: "Get up. Get up, get up, get\u2014",
    speaker: "Marley",
    portrait: "wary",
  },
  { sfx: "sharp ringing, then silence" },
  { effect: "shake" },
  { bg: "void", bgFade: 900 },

  // ==================== Blanc's POV: street corner ====================
  { label: "blanc_pov_stub" },
  { bg: "street_night", bgFade: 1500 },
  { bgm: "low city ambience, distant traffic" },
  { sprite: "right", name: "Mary", art: "mary_default.webp" },

  {
    narration:
      "Blanc leans against the hood of Mary's car, arms crossed, looking entirely too pleased with himself for someone who wasn't invited.",
  },
  { narration: "She said not to follow her this time." },
  { narration: "I followed her anyway." },
  {
    speaker: "Blanc",
    text: "So this is where you disappear to at 11 PM. Very mysterious. Very 'lone wolf detective.' I'm almost jealous.",
    portrait: "estatic",
  },
  { speaker: "Mary", text: "I said don't follow me, Blanc." },
  {
    speaker: "Blanc",
    text: "And yet, here I am. Character growth, you see.",
    portrait: "estatic",
  },

  { sfx: "folder slapping against car hood" },
  {
    narration:
      "Mary drops a case folder onto the hood between them. Hard enough that it's less \u2018here you go\u2019 and more \u2018don't make me regret this.\u2019",
  },

  { speaker: "Mary", text: "You're a civilian." },
  { speaker: "Blanc", text: "I'm a civilian.", portrait: "flat" },
  { speaker: "Mary", text: "You're not on this case." },
  { speaker: "Blanc", text: "I'm not on this case.", portrait: "flat" },
  { speaker: "Mary", text: "You're not touching this folder." },
  { narration: "I'm already touching the folder." },
  { speaker: "Blanc", text: "Wouldn't dream of it.", portrait: "estatic" },

  {
    narration:
      "Noir, silent until now, is already standing close enough to read over Blanc's shoulder. He doesn't ask permission either.",
  },
  { sprite: "left", name: "Noir", art: "noir_default.webp" },

  {
    thought:
      "[Victim Name]. Twenty-something. Not that different from me, on paper.",
    speaker: "Blanc",
    portrait: "confused",
  },
  { speaker: "Blanc", text: "Huh. Ruled as suicide?", portrait: "confused" },
  {
    speaker: "Mary",
    text: "Officially, yes. Unofficially, I don't buy it, and neither does half the department. But 'officially' is what goes in my report.",
  },
  {
    speaker: "Blanc",
    text: "So what's the unofficial version?",
    portrait: "neutral",
  },
  {
    speaker: "Mary",
    text: "The unofficial version is four cases with the same 'suicide' write-up in six months, and every single one of them staged just clean enough that it'd only bother someone paid to be suspicious.",
  },
  { speaker: "Noir", text: "Four?" },
  { speaker: "Mary", text: "Four that I know of." },
  {
    speaker: "Noir",
    text: "That's a lot for the department to call 'nothing.'",
  },
  {
    speaker: "Mary",
    text: "Tell me about it. I've been saying that for weeks.",
  },
  {
    speaker: "Blanc",
    text: "So why haven't you got backup on this?",
    portrait: "neutral",
  },
  {
    speaker: "Mary",
    text: "Because 'a pattern' isn't evidence, and I'm not exactly senior enough to make people listen yet.",
  },

  { narration: "Blanc leans closer to the photo, tilting his head." },
  // author's placeholder note in the draft: "SAMTING SAMTING DISINI" (something goes here, not yet decided)
  {
    narration:
      "(unwritten beat \u2014 placeholder from the draft, not yet decided)",
  },

  {
    speaker: "Blanc",
    text: "I'm just saying, someone should ask\u2014",
    portrait: "confused",
  },
  { speaker: "Mary", text: "Blanc." },
  { speaker: "Noir", text: "He's not wrong to ask." },
  {
    speaker: "Mary",
    text: "I didn't say he was wrong. I said it's not his case.",
  },
  { speaker: "Noir", text: "Still not wrong." },
  { speaker: "Blanc", text: "...Thank you, Noir.", portrait: "flat" },
  { narration: "Mary sighs." },
  { speaker: "Mary", text: "You two are impossible." },

  { sfx: "radio static, garbled voice" },
  {
    narration:
      "A radio crackles from inside Mary's car\u2014dispatch, half-swallowed by static, something about a location and a unit being requested.",
  },
  { speaker: "Mary", text: "...That's mine." },
  {
    narration:
      "She's already moving, folder snatched back off the hood before Blanc can even protest.",
  },
  {
    speaker: "Blanc",
    text: "Wait, that's not fair, I didn't even get to\u2014",
    portrait: "confused",
  },
  { speaker: "Mary", text: "Go home, Blanc." },
  { speaker: "Noir", text: "We're not going home." },
  { speaker: "Mary", text: "...I didn't think so." },

  { hide: "left" },
  { hide: "right" },
  { bg: "void", bgFade: 900 },

  // ==================== back to Marley ====================
  { bg: "void", bgFade: 600 },
  { sfx: "sirens, distant, growing closer" },
  {
    narration:
      "The world comes back in pieces. Red and blue light strobing somewhere above me. The wet, cold press of asphalt under my palms. A ringing in my ears that won't quit.",
  },
  { speaker: "Marley", text: "...ngh.", portrait: "wary" },
  {
    thought: "My head. My head, hurts...",
    speaker: "Marley",
    portrait: "wary",
  },
  {
    narration:
      "I push myself up, and my hands slip against something warm. Something that shouldn't be warm out here, in the cold, this late.",
  },
  { narration: "I look down." },
  { bg: "crime_scene", bgFade: 1200 },
  {
    narration:
      "Red. Dark and thick, smeared across both palms, dripping in thin lines down my wrists.",
  },
  { speaker: "Marley", text: "N-no. No, no, no\u2014", portrait: "wary" },
  {
    narration:
      "My breath won't come right. Around me, shapes resolve out of the strobing light, officers, tape, and a crowd held back at a distance, all of them staring at me like I'm the only thing in the world worth looking at.",
  },
  { thought: "Stop staring at me\u2014", speaker: "Marley", portrait: "wary" },
  {
    thought: "They think I did this. They think\u2014",
    speaker: "Marley",
    portrait: "wary",
  },
  {
    narration:
      "I don't let myself finish that thought. My legs move before my brain catches up, some instinct screaming louder than the panic.",
  },
  { sfx: "scramble" },
  {
    narration:
      "I shove myself backward, away from the\u2014from it, from the shape on the ground I can't make myself look at directly. My palm slips in more red. I don't stop to wipe it off.",
  },
  { speaker: "Voice", text: "Hey\u2014hey, wait, don't move\u2014" },
  {
    narration:
      "A hand reaches for my arm. I flinch out of range before it lands, stumbling upright on legs that don't feel like mine.",
  },
  {
    speaker: "Marley",
    text: "I didn't\u2014I didn't do this, I didn't\u2014",
    portrait: "wary",
  },
  { speaker: "Voice", text: "Stop! Stay where you are!" },
  {
    narration:
      "Nobody's listening. Not to reason, not to me. And maybe they're right not to\u2014maybe there's nothing left in me worth listening to.",
  },
  { narration: "I run." },
  { sfx: "footsteps, sirens rising behind" },
  {
    narration:
      "The tape snaps against my shoulder as I duck under it. Somewhere behind me, more shouting, radios crackling, the scrape of boots against asphalt. I don't look back. Looking back means seeing it again\u2014the shape on the ground, the color on my hands, the version of tonight I can't undo by running from it.",
  },
  {
    thought: "Just move. Just move, just move, just\u2014",
    speaker: "Marley",
    portrait: "wary",
  },
  {
    narration:
      "The crowd parts around me, phones raised, voices rising into a blur of noise I can't separate into words. Someone grabs at my sleeve and I twist free without thinking, without apologizing, without anything but the single animal need to be anywhere but there.",
  },
  { speaker: "Voice", text: "He's running! Get him\u2014!" },
  {
    thought: "He's wrong. I'm not\u2014I don't even know what I\u2014",
    speaker: "Marley",
    portrait: "wary",
  },
  {
    narration:
      "The street blurs. Streetlights smear into long red-gold streaks at the edge of my vision. My lungs burn. My hands are still wet. I don't stop to check with what.",
  },
  {
    narration:
      "I don't know how long I run. I don't know where I'm running to. I just know that stopping means turning around, and turning around means finding out for certain what I already know.",
  },
  { sfx: "sirens fading into distance" },
  {
    narration:
      "Eventually my legs give out before my fear does. I collapse into the mouth of an alley, back hitting brick, chest heaving, hands pressed flat against the cold ground like I could push the last few minutes back into the earth.",
  },
  { bg: "alley", bgFade: 1500 },
  {
    speaker: "Marley",
    text: "...I didn't. I didn't, I didn't, I didn't\u2014",
    portrait: "wary",
  },
  {
    thought:
      "Say it enough times and it'll be true. Say it enough times and it'll be true. Say it\u2014",
    speaker: "Marley",
    portrait: "wary",
  },
  {
    narration:
      "Above me, distorted through the gap between buildings, a light sweeps once across the alley mouth and moves on.",
  },
  { narration: "I stay very still until it's gone." },
  { bg: "void", bgFade: 2000 },

  // Draft ends here
  { narration: "(the draft ends here \u2014 to be continued)" },
  { end: true },
];

document.addEventListener("DOMContentLoaded", () => {
  Engine.loadScript(PROLOGUE_SCRIPT);
});
