const state = {
  dataset: null,
  activeWorkshopId: "1-day-pc",
  activeVideoId: null,
};

const sessionConfig = {
  "1-day-pc": [
    {
      title: "Session 1: Welcome and Introductions",
      items: ["Language and Autism", "Having a say"],
    },
    {
      title: "Session 2: Diversity of autism",
      items: [
        "Strengths and interests",
        "Strengths and interests high school",
        "Connections to culture and community",
        "Communication",
        "Executive Functioning",
        "Dean",
        "Self-care and independence skills",
        "Strategies",
      ],
    },
    {
      title: "Session 3: Sensory Processing",
      items: [
        "What can sensory processing differences feel like",
        "Judy Endow: Sensory processing",
        "Over and under sensitive",
        "Sensory processing and context",
        "Sensory solutions and strategies",
      ],
    },
    {
      title: "Session 4: Working in Partnerships",
      items: ["Disability Standards for Education", "Moving Forward"],
    },
  ],
  "2-day-pc": [
    {
      title: "Session 1: Welcome and Introductions",
      items: ["Language and Autism", "Having a say"],
    },
    {
      title: "Session 2: Diversity of autism",
      items: [
        "Strengths and interests",
        "Strengths and interests high school",
        "Connections to culture and community",
        "Communication",
        "Executive Functioning",
        "Dean",
        "Self-care and independence skills",
        "Strategies",
      ],
    },
    {
      title: "Session 3: Sensory Processing",
      items: [
        "What can sensory processing differences feel like",
        "Judy Endow: Sensory Processing",
        "Over and under sensitive",
        "Sensory processing and context",
        "Sensory solutions and strategies",
      ],
    },
    {
      title: "Session 5: Understanding Behaviour",
      items: ["Dan Siegels Hand Model of the Brain", "Making observations"],
    },
    {
      title: "Session 6: Working in Partnerships",
      items: ["Disability Standards for Education", "DSE roles and expectations", "Moving Forward"],
    },
  ],
};

const elements = {
  workshopSwitch: document.getElementById("workshop-switch"),
  toolbarMeta: document.getElementById("toolbar-meta"),
  videoList: document.getElementById("video-list"),
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

  const sessions = sessionConfig[workshop.id] || [];
  const grouped = new Map();

  workshop.videos.forEach((entry) => {
    const video = videoForWorkshop(entry);
    grouped.set(sessionKeyForEntry(entry, video), { entry, video });
  });

  sessions.forEach((session) => {
    const section = document.createElement("section");
    section.className = "session-group";

    const header = document.createElement("div");
    header.className = "session-header";

    const title = document.createElement("h2");
    title.className = "session-title";
    title.textContent = session.title;

    const count = document.createElement("p");
    count.className = "session-count";

    const cards = document.createElement("div");
    cards.className = "session-cards";

    let renderedCount = 0;

    session.items.forEach((itemKey) => {
      const match = grouped.get(itemKey);
      if (!match) return;
      const { entry, video } = match;
      renderedCount += 1;

    const card = elements.cardTemplate.content.firstElementChild.cloneNode(true);
    const isOpen = state.activeVideoId === video.id;
    card.querySelector(".video-card-kicker").textContent = entry.slideTitle || "Workshop video";
    card.querySelector("h3").textContent = video.title;
    card.querySelector(".duration-pill").textContent = video.duration || "Duration n/a";
    card.querySelector(".speaker-line").textContent = video.speakerOrSource || "Speaker/source not set";
    card.querySelector(".slide-line").remove();
    card.classList.toggle("is-open", isOpen);

    const notes = card.querySelector(".card-notes");
    if (entry.notes) notes.appendChild(noteParagraph(entry.notes));
    if (entry.matchNote) notes.appendChild(noteParagraph(entry.matchNote));
    if (video.transcriptStatus !== "present") {
      notes.appendChild(noteParagraph("Transcript not yet available in the current dataset."));
    }

    const transcriptButton = card.querySelector(".transcript-button");
    transcriptButton.disabled = video.transcriptStatus !== "present";
    transcriptButton.textContent =
      video.transcriptStatus === "present"
        ? isOpen
          ? "Hide Transcript"
          : "Open Transcript"
        : "Transcript Missing";
    transcriptButton.addEventListener("click", () => {
      state.activeVideoId = state.activeVideoId === video.id ? null : video.id;
      render();
    });

    const accordion = card.querySelector(".accordion-panel");
    const closeButton = card.querySelector(".close-accordion-button");
    const kicker = card.querySelector(".transcript-kicker");
    const accordionTitle = card.querySelector(".accordion-title");
    const transcriptMeta = card.querySelector(".transcript-meta");
    const transcriptNotes = card.querySelector(".transcript-notes");
    const transcriptBody = card.querySelector(".transcript-body");

    if (isOpen && video.transcript) {
      accordion.classList.remove("hidden");
      kicker.textContent = workshop.name;
      accordionTitle.textContent = video.title;
      transcriptMeta.textContent = [
        video.speakerOrSource,
        video.duration,
        entry.slideTitle,
        video.transcriptFile,
      ]
        .filter(Boolean)
        .join(" | ");

      transcriptNotes.innerHTML = "";
      if (entry.notes) transcriptNotes.appendChild(transcriptNote(entry.notes));
      if (entry.matchNote) transcriptNotes.appendChild(transcriptNote(entry.matchNote));

      transcriptBody.innerHTML = "";
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
        transcriptBody.appendChild(wrapper);
      });
    } else {
      accordion.classList.add("hidden");
    }

    closeButton.addEventListener("click", () => {
      state.activeVideoId = null;
      render();
    });

      cards.appendChild(card);
    });

    count.textContent = `${renderedCount} videos`;
    header.appendChild(title);
    header.appendChild(count);
    section.appendChild(header);
    section.appendChild(cards);
    elements.videoList.appendChild(section);
  });
}

function transcriptNote(text) {
  const p = document.createElement("p");
  p.className = "transcript-note";
  p.textContent = text;
  return p;
}

function render() {
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
