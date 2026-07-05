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
  // ---------------- cold open ----------------
  { bg: "void" },
  { epigraph: "If you are lost, and the thought becomes the truth." },
  { epigraph: "About what kind of future will you create?" },
  { epigraph: "Is it a happy ending?" },
  { epigraph: "or The bittersweet one?" },
  { epigraph: "The endless cycle?" },
  { epigraph: "Or..." },

  { bg: "tv_room" },
  { sprite: "left", name: "Iori (silhouette)", dim: true },
  { epigraph: "If anything... I  would like to see it myself." },
  { hide: "left" },

  // ---------------- Marley enters the office (cinematic) ----------------
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

  // ---------------- at the desk ----------------
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

  // ---------------- the wrongness ----------------
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

  // ---------------- exploration ----------------
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
    continueGoto: "hallway_stub",
  },

  // ---------------- draft ends here ----------------
  { label: "hallway_stub" },
  { narration: "(the draft ends here \u2014 to be continued: the Hallway)" },
  { end: true },
];

document.addEventListener("DOMContentLoaded", () => {
  Engine.loadScript(PROLOGUE_SCRIPT);
});
