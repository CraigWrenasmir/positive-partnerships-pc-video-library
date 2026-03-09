const state = {
  dataset: null,
  activeWorkshopId: "1-day-pc",
  activeVideoId: null,
};

const elements = {
  workshopSwitch: document.getElementById("workshop-switch"),
  toolbarMeta: document.getElementById("toolbar-meta"),
  videoList: document.getElementById("video-list"),
  transcriptEmpty: document.getElementById("transcript-empty"),
  transcriptView: document.getElementById("transcript-view"),
  transcriptWorkshop: document.getElementById("transcript-workshop"),
  transcriptTitle: document.getElementById("transcript-title"),
  transcriptMeta: document.getElementById("transcript-meta"),
  transcriptNotes: document.getElementById("transcript-notes"),
  transcriptBody: document.getElementById("transcript-body"),
  closeTranscript: document.getElementById("close-transcript"),
  cardTemplate: document.getElementById("video-card-template"),
};

function byId(videoId) {
  return state.dataset.videos.find((video) => video.id === videoId);
}

function activeWorkshop() {
  return state.dataset.workshops.find((workshop) => workshop.id === state.activeWorkshopId);
}

function videoForWorkshop(entry) {
  return byId(entry.videoId);
}

function renderWorkshopSwitch() {
  elements.workshopSwitch.innerHTML = "";
  state.dataset.workshops.forEach((workshop) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `switch-button${workshop.id === state.activeWorkshopId ? " active" : ""}`;
    button.textContent = workshop.name;
    button.addEventListener("click", () => {
      state.activeWorkshopId = workshop.id;
      state.activeVideoId = null;
      render();
    });
    elements.workshopSwitch.appendChild(button);
  });
}

function renderToolbarMeta() {
  const workshop = activeWorkshop();
  const available = workshop.videos.filter((entry) => entry.transcriptStatus === "present").length;
  elements.toolbarMeta.textContent = `${workshop.videos.length} videos, ${available} transcripts available`;
}

function noteParagraph(text) {
  const p = document.createElement("p");
  p.className = "card-note";
  p.textContent = text;
  return p;
}

function renderVideoList() {
  const workshop = activeWorkshop();
  elements.videoList.innerHTML = "";

  if (!workshop.videos.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No videos found for this workshop.";
    elements.videoList.appendChild(empty);
    return;
  }

  workshop.videos.forEach((entry) => {
    const video = videoForWorkshop(entry);
    const card = elements.cardTemplate.content.firstElementChild.cloneNode(true);
    card.querySelector(".video-card-kicker").textContent = entry.slideTitle || "Workshop video";
    card.querySelector("h3").textContent = video.title;
    card.querySelector(".duration-pill").textContent = video.duration || "Duration n/a";
    card.querySelector(".speaker-line").textContent = video.speakerOrSource || "Speaker/source not set";
    card.querySelector(".slide-line").textContent = `${entry.pdfFile}, page ${entry.pdfPage}`;

    const notes = card.querySelector(".card-notes");
    if (entry.notes) notes.appendChild(noteParagraph(entry.notes));
    if (entry.matchNote) notes.appendChild(noteParagraph(entry.matchNote));
    if (video.transcriptStatus !== "present") {
      notes.appendChild(noteParagraph("Transcript not yet available in the current dataset."));
    }

    const transcriptButton = card.querySelector(".transcript-button");
    transcriptButton.disabled = video.transcriptStatus !== "present";
    transcriptButton.textContent = video.transcriptStatus === "present" ? "Open Transcript" : "Transcript Missing";
    transcriptButton.addEventListener("click", () => {
      state.activeVideoId = video.id;
      renderTranscript();
    });

    elements.videoList.appendChild(card);
  });
}

function transcriptNote(text) {
  const p = document.createElement("p");
  p.className = "transcript-note";
  p.textContent = text;
  return p;
}

function renderTranscript() {
  const workshop = activeWorkshop();
  const entry = workshop.videos.find((item) => item.videoId === state.activeVideoId);
  const video = entry ? videoForWorkshop(entry) : null;

  if (!entry || !video || !video.transcript) {
    elements.transcriptEmpty.classList.remove("hidden");
    elements.transcriptView.classList.add("hidden");
    return;
  }

  elements.transcriptEmpty.classList.add("hidden");
  elements.transcriptView.classList.remove("hidden");

  elements.transcriptWorkshop.textContent = workshop.name;
  elements.transcriptTitle.textContent = video.title;
  elements.transcriptMeta.textContent = [
    video.speakerOrSource,
    video.duration,
    entry.slideTitle,
    video.transcriptFile,
  ]
    .filter(Boolean)
    .join(" | ");

  elements.transcriptNotes.innerHTML = "";
  if (entry.notes) elements.transcriptNotes.appendChild(transcriptNote(entry.notes));
  if (entry.matchNote) elements.transcriptNotes.appendChild(transcriptNote(entry.matchNote));

  elements.transcriptBody.innerHTML = "";
  video.transcript.blocks.forEach((block) => {
    const wrapper = document.createElement("section");
    wrapper.className = "transcript-block";

    const label = document.createElement("div");
    label.className = "speaker-label";
    label.textContent = block.speaker;

    const paragraph = document.createElement("p");
    paragraph.className = "transcript-paragraph";
    paragraph.textContent = block.text;

    wrapper.appendChild(label);
    wrapper.appendChild(paragraph);
    elements.transcriptBody.appendChild(wrapper);
  });
}

function render() {
  renderWorkshopSwitch();
  renderToolbarMeta();
  renderVideoList();
  renderTranscript();
}

async function init() {
  const response = await fetch("./data.json");
  state.dataset = await response.json();
  render();
}

elements.closeTranscript.addEventListener("click", () => {
  state.activeVideoId = null;
  renderTranscript();
});

init().catch((error) => {
  elements.videoList.innerHTML = "";
  const empty = document.createElement("div");
  empty.className = "empty-state";
  empty.textContent = `Could not load dataset: ${error.message}`;
  elements.videoList.appendChild(empty);
});
