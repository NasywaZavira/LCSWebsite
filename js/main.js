document.addEventListener("DOMContentLoaded", () => {
  const refs = {
    game: document.getElementById("game"),
    bgA: document.getElementById("bg-a"),
    bgB: document.getElementById("bg-b"),
    scanlines: document.getElementById("scanlines"),
    spriteLeft: document.getElementById("sprite-left"),
    spriteRight: document.getElementById("sprite-right"),
    textboxWrap: document.getElementById("textbox-wrap"),
    textbox: document.getElementById("textbox"),
    namebox: document.getElementById("namebox"),
    dialogueText: document.getElementById("dialogue-text"),
    portraitBox: document.getElementById("portrait-box"),
    portraitImg: document.getElementById("portrait-img"),
    portraitFallback: document.getElementById("portrait-fallback"),
    textboxDivider: document.getElementById("textbox-divider"),
    choiceLayer: document.getElementById("choice-layer"),
    epigraphLayer: document.getElementById("epigraph-layer"),
    epigraphText: document.getElementById("epigraph-text"),
    cueCaption: document.getElementById("cue-caption"),
  };

  Engine.init(refs);

  document
    .getElementById("skip-btn")
    .addEventListener("click", () => Engine.skip());
});
