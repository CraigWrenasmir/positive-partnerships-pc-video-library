const state = {
  dataset: null,
  activeWorkshopId: "1-day-pc",
  activeVideoId: null,
};

const sessionConfig = {
  "1-day-pc": [
    {
      title: "Session 1: Welcome and Introductions",
      items: [
        { key: "Language and Autism" },
        { key: "Having a say" },
      ],
    },
    {
      title: "Session 2: Diversity of autism",
      items: [
        { key: "Strengths and interests" },
        { key: "Strengths and interests high school", label: "Strengths and Interests (High School)", optional: true },
        { key: "Connections to culture and community" },
        { key: "Communication" },
        { key: "Executive Functioning" },
        { key: "Dean", label: "Dean" },
        { key: "Self-care and independence skills", label: "Self-Care and Independence Skills" },
        { key: "Strategies" },
      ],
    },
    {
      title: "Session 3: Sensory Processing",
      items: [
        { key: "What can sensory processing differences feel like" },
        { key: "Judy Endow: Sensory Processing" },
        { key: "Over and under sensitive" },
        { key: "Sensory processing and context" },
        { key: "Sensory solutions and strategies" },
      ],
    },
    {
      title: "Session 4: Working in Partnerships",
      items: [
        { key: "Disability Standards for Education" },
        { key: "Moving Forward" },
      ],
    },
  ],
  "2-day-pc": [
    {
      title: "Session 1: Welcome and Introductions",
      items: [
        { key: "Language and Autism" },
        { key: "Having a say" },
      ],
    },
    {
      title: "Session 2: Diversity of autism",
      items: [
        { key: "Strengths and interests" },
        { key: "Strengths and interests high school", label: "Strengths and Interests (High School)", optional: true },
        { key: "Connections to culture and community" },
        { key: "Communication" },
        { key: "Executive Functioning" },
        { key: "Dean", label: "Dean" },
        { key: "Self-care and independence skills", label: "Self-care and Independence" },
        { key: "Strategies" },
      ],
    },
    {
      title: "Session 3: Sensory Processing",
      items: [
        { key: "What can sensory processing differences feel like" },
        { key: "Judy Endow: Sensory Processing" },
        { key: "Over and under sensitive" },
        { key: "Sensory processing and context" },
        { key: "Sensory solutions and strategies" },
      ],
    },
    {
      title: "Session 5: Understanding Behaviour",
      items: [
        { key: "Dan Siegels Hand Model of the Brain" },
        { key: "Making observations" },
      ],
    },
    {
      title: "Session 6: Working in Partnerships",
      items: [
        { key: "Disability Standards for Education" },
        { key: "DSE roles and expectations", label: "DSE Roles and Expectations" },
        { key: "Moving Forward" },
      ],
    },
  ],
};

const elements = {
  heroStats: document.getElementById("hero-stats"),
  workshopSwitch: document.getElementById("workshop-switch"),
  toolbarMeta: document.getElementById("toolbar-meta"),
  videoList: document.getElementById("video-list"),
  rowTemplate: document.getElementById("video-row-template"),
};

function byId(videoId) {
  return state.dataset.videos.find((video) => video.id === videoId);
}

function activeWorkshop() {
  return state.dataset.workshops.find((workshop) => workshop.id === state.activeWorkshopId);
}

function sessionKeyForEntry(entry, video) {
  if (video.title === "Strengths and interests" && /slide 13/i.test(entry.slideTitle)) {
    return "Strengths and interests high school";
  }
  if (video.title === "Executive Functioning" && /dean/i.test(video.speakerOrSource)) {
    return "Dean";
  }
  if (
    video.title === "What can sensory processing differences feel like" &&
    /judy endow/i.test(video.speakerOrSource)
  ) {
    return "Judy Endow: Sensory Processing";
  }
  return video.title;
}

function makeBadge(label, className) {
  const badge = document.createElement("span");
  badge.className = `badge ${className}`;
  badge.textContent = label;
  return badge;
}

function makeNote(text) {
  const note = document.createElement("p");
  note.className = "session-note";
  note.textContent = text;
  return note;
}

function makeTranscriptNote(text) {
  const note = document.createElement("p");
  note.className = "transcript-note";
  note.textContent = text;
  return note;
}

function renderHeroStats() {
  const workshop = activeWorkshop();
  const transcriptCount = workshop.videos.filter((entry) => entry.transcriptStatus === "present").length;
  const sessionCount = (sessionConfig[workshop.id] || []).length;

  elements.heroStats.innerHTML = "";

  [
    { value: workshop.videos.length, label: "videos currently mapped" },
    { value: transcriptCount, label: "transcripts available in-page" },
    { value: sessionCount, label: "session groups in this workshop" },
  ].forEach((item) => {
    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = `<strong>${item.value}</strong><span>${item.label}</span>`;
    elements.heroStats.appendChild(card);
  });
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
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    elements.workshopSwitch.appendChild(button);
  });
}

function renderToolbarMeta() {
  const workshop = activeWorkshop();
  const transcriptCount = workshop.videos.filter((entry) => entry.transcriptStatus === "present").length;
  elements.toolbarMeta.textContent = `${workshop.videos.length} videos in scope • ${transcriptCount} transcripts ready`;
}

function renderTranscript(drawer, item, entry, video, workshopName) {
  const transcriptButton = item.querySelector(".transcript-button");
  const isOpen = state.activeVideoId === video.id && video.transcript;

  transcriptButton.textContent = isOpen ? "Hide Transcript" : "Open Transcript";
  transcriptButton.setAttribute("aria-expanded", String(Boolean(isOpen)));

  if (!isOpen) {
    drawer.hidden = true;
    return;
  }

  drawer.hidden = false;
  item.classList.add("is-open");

  item.querySelector(".transcript-kicker").textContent = workshopName;
  item.querySelector(".transcript-title").textContent = video.title;
  item.querySelector(".transcript-meta").textContent = [
    video.speakerOrSource,
    video.duration,
    video.transcriptFile,
  ]
    .filter(Boolean)
    .join(" • ");

  const transcriptNotes = item.querySelector(".transcript-notes");
  transcriptNotes.innerHTML = "";
  if (entry.notes) transcriptNotes.appendChild(makeTranscriptNote(entry.notes));
  if (entry.matchNote) transcriptNotes.appendChild(makeTranscriptNote(entry.matchNote));

  const transcriptBody = item.querySelector(".transcript-body");
  transcriptBody.innerHTML = "";
  video.transcript.blocks.forEach((block) => {
    const wrapper = document.createElement("section");
    wrapper.className = "transcript-block";

    const speaker = document.createElement("div");
    speaker.className = "speaker-label";
    speaker.textContent = block.speaker;

    const paragraph = document.createElement("p");
    paragraph.className = "transcript-paragraph";
    paragraph.textContent = block.text;

    wrapper.appendChild(speaker);
    wrapper.appendChild(paragraph);
    transcriptBody.appendChild(wrapper);
  });
}

function renderVideoRow(itemConfig, entry, video, workshopName) {
  const item = elements.rowTemplate.content.firstElementChild.cloneNode(true);
  const drawer = item.querySelector(".transcript-drawer");
  const isTranscriptReady = video.transcriptStatus === "present" && Boolean(video.transcript);

  item.querySelector(".video-kicker").textContent = entry.slideTitle;
  item.querySelector(".video-title").textContent = itemConfig.label || video.title;
  item.querySelector(".video-source").textContent = video.speakerOrSource || "Speaker/source not set";
  item.querySelector(".duration-pill").textContent = video.duration || "Duration n/a";

  const badges = item.querySelector(".video-badges");
  if (itemConfig.optional) {
    badges.appendChild(makeBadge("Optional", "optional"));
  }
  badges.appendChild(makeBadge(isTranscriptReady ? "Transcript ready" : "Transcript missing", isTranscriptReady ? "available" : "missing"));

  const notes = item.querySelector(".video-notes");
  if (entry.notes) notes.appendChild(makeNote(entry.notes));
  if (entry.matchNote) notes.appendChild(makeNote(entry.matchNote));

  const transcriptButton = item.querySelector(".transcript-button");
  transcriptButton.disabled = !isTranscriptReady;
  transcriptButton.addEventListener("click", () => {
    state.activeVideoId = state.activeVideoId === video.id ? null : video.id;
    render();
  });

  item.querySelector(".close-drawer").addEventListener("click", () => {
    state.activeVideoId = null;
    render();
  });

  renderTranscript(drawer, item, entry, video, workshopName);
  return item;
}

function renderVideoList() {
  const workshop = activeWorkshop();
  const sessions = sessionConfig[workshop.id] || [];
  elements.videoList.innerHTML = "";

  const grouped = new Map();
  workshop.videos.forEach((entry) => {
    const video = byId(entry.videoId);
    grouped.set(sessionKeyForEntry(entry, video), { entry, video });
  });

  sessions.forEach((session) => {
    const section = document.createElement("section");
    section.className = "session-group";

    const header = document.createElement("div");
    header.className = "session-header";
    header.innerHTML = `
      <h2 class="session-title">${session.title}</h2>
      <p class="session-count"></p>
    `;

    const cards = document.createElement("div");
    cards.className = "session-cards";

    let count = 0;
    session.items.forEach((itemConfig) => {
      const match = grouped.get(itemConfig.key);
      if (!match) return;
      count += 1;
      cards.appendChild(renderVideoRow(itemConfig, match.entry, match.video, workshop.name));
    });

    header.querySelector(".session-count").textContent = `${count} videos`;
    section.appendChild(header);
    section.appendChild(cards);
    elements.videoList.appendChild(section);
  });
}

function render() {
  renderHeroStats();
  renderWorkshopSwitch();
  renderToolbarMeta();
  renderVideoList();
}

async function init() {
  const response = await fetch("./data.json");
  state.dataset = await response.json();
  render();
}

init().catch((error) => {
  elements.videoList.innerHTML = "";
  const empty = document.createElement("div");
  empty.className = "empty-state";
  empty.textContent = `Could not load dataset: ${error.message}`;
  elements.videoList.appendChild(empty);
});
