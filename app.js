const state = {
  dataset: null,
  activeWorkshopId: "1-day-pc",
  activeVideoId: null,
  activePanel: null,
};

const sessionConfig = {
  "1-day-pc": [
    {
      title: "Session 1: Welcome and Introductions",
      items: [{ key: "Language and Autism" }, { key: "Having a say" }],
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
      items: [{ key: "Disability Standards for Education" }, { key: "Moving Forward" }],
    },
  ],
  "2-day-pc": [
    {
      title: "Session 1: Welcome and Introductions",
      items: [{ key: "Language and Autism" }, { key: "Having a say" }],
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
      items: [{ key: "Dan Siegels Hand Model of the Brain" }, { key: "Making observations" }],
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

const contentConfig = {
  "Language and Autism": {
    brief:
      "Thomas Kuzma reflects on the language autistic people use to describe themselves and why identity-first versus person-first language matters.",
    summary: [
      "Explores how language shapes identity, dignity, and self-understanding.",
      "Contrasts identity-first and person-first language from an autistic perspective.",
      "Encourages listening to individual preference rather than assuming one correct term for everyone.",
    ],
  },
  "Having a say": {
    brief:
      "This clip focuses on student voice and the importance of understanding how autistic young people communicate what helps them learn best.",
    summary: [
      "Centres the young person as an active contributor to learning decisions.",
      "Highlights the value of asking how a student learns rather than making assumptions.",
      "Supports stronger collaboration between families, students, and educators.",
    ],
  },
  "Strengths and interests": {
    brief:
      "Young people and families talk about strengths and interests as meaningful parts of identity, wellbeing, and engagement in daily life.",
    summary: [
      "Moves the conversation away from deficits and toward strengths.",
      "Shows how interests can support confidence, belonging, and learning.",
      "Reinforces that strengths may look different across individuals and contexts.",
    ],
  },
  "Strengths and interests high school": {
    brief:
      "Sam reflects on strengths and interests in a high school context, showing how they can shape motivation, identity, and school experiences.",
    summary: [
      "Connects strengths and interests to secondary school engagement.",
      "Shows how interests can be misunderstood if adults focus only on compliance or curriculum.",
      "Encourages a more respectful, strengths-based response to adolescent identity and motivation.",
    ],
  },
  "Connections to culture and community": {
    brief:
      "Hao shares how sport, music, dance, and community connections contribute to identity, belonging, and wellbeing.",
    summary: [
      "Emphasises that identity is shaped by more than disability or diagnosis.",
      "Highlights the importance of cultural, family, and community connections.",
      "Encourages educators and families to notice the whole person, not just support needs.",
    ],
  },
  Communication: {
    brief:
      "A montage of lived experience perspectives shows different ways autistic young people communicate, including speech, AAC, and non-traditional communication styles.",
    summary: [
      "Shows that communication is diverse and cannot be reduced to spoken language alone.",
      "Introduces AAC, processing differences, and misunderstandings in social interaction.",
      "Encourages communication support that is flexible, respectful, and collaborative.",
    ],
  },
  "Executive Functioning": {
    brief:
      "This explainer introduces executive functioning as the set of mental processes that help people organise, plan, remember, and manage actions.",
    summary: [
      "Defines executive functioning in practical, everyday terms.",
      "Links executive functioning to organisation, planning, memory, and self-management.",
      "Helps participants recognise that these processes can affect participation across school and home life.",
    ],
  },
  Dean: {
    brief:
      "Dean shares a lived experience perspective on executive functioning and how these challenges can affect daily expectations and routines.",
    summary: [
      "Adds a personal perspective to the concept of executive functioning.",
      "Shows how invisible cognitive demands can shape everyday experiences.",
      "Encourages empathy for behaviours that may otherwise be misread as unwillingness or defiance.",
    ],
  },
  "Self-care and independence skills": {
    brief:
      "Adon talks about self-care and independence skills, drawing attention to the hidden demands involved in everyday tasks.",
    summary: [
      "Shows that everyday independence often requires planning, sequencing, and support.",
      "Highlights how self-care expectations can be stressful or uneven across contexts.",
      "Encourages realistic and individualised support rather than assumptions about capability.",
    ],
  },
  Strategies: {
    brief:
      "Autistic young people describe strategies and supports that help them participate, regulate, communicate, and manage day-to-day life.",
    summary: [
      "Provides concrete examples of supports that make a positive difference.",
      "Shows that useful strategies are individual and context-dependent.",
      "Encourages participants to match strategies to the person rather than rely on one-size-fits-all ideas.",
    ],
  },
  "What can sensory processing differences feel like": {
    brief:
      "This clip offers a first-person sensory perspective, helping participants imagine how everyday environments can feel intense, beautiful, or overwhelming.",
    summary: [
      "Introduces sensory processing through lived experience rather than theory alone.",
      "Shows that sensory experiences can be heightened, layered, and deeply personal.",
      "Builds empathy for how ordinary settings may feel very different to autistic people.",
    ],
  },
  "Judy Endow: Sensory Processing": {
    brief:
      "Judy Endow provides a concise sensory processing perspective that helps explain why autistic responses to the environment can look so different from person to person.",
    summary: [
      "Frames sensory processing as a central part of lived experience, not a side issue.",
      "Helps participants understand why responses to sound, light, movement, or touch can vary widely.",
      "Supports a more respectful interpretation of behaviour linked to sensory need.",
    ],
  },
  "Over and under sensitive": {
    brief:
      "This short analogy-based clip explains how people may respond differently when sensory systems are over-responsive, under-responsive, or inconsistent.",
    summary: [
      "Introduces the idea that sensory profiles are not all the same.",
      "Explains that sensitivity can shift across senses and situations.",
      "Helps participants move beyond simplistic ideas about sensory behaviour.",
    ],
  },
  "Sensory processing and context": {
    brief:
      "This video connects sensory experiences to context, showing how the same person may respond very differently depending on the environment, demands, and level of safety.",
    summary: [
      "Emphasises that sensory processing is shaped by context, not just by the individual.",
      "Shows how environment, stress, and demands can change sensory tolerance.",
      "Encourages more thoughtful adjustment of spaces, routines, and expectations.",
    ],
  },
  "Sensory solutions and strategies": {
    brief:
      "Autistic lived experience perspectives are used to explore practical sensory supports and how thoughtful adjustments can make environments more workable.",
    summary: [
      "Focuses on practical supports rather than expecting the person to simply cope.",
      "Highlights that sensory strategies should be collaborative and individualised.",
      "Connects adjustments to access, comfort, regulation, and participation.",
    ],
  },
  "Disability Standards for Education": {
    brief:
      "This short explainer introduces the legal obligations schools have under the Disability Standards for Education and why they matter in practice.",
    summary: [
      "Explains that the Standards are legal responsibilities, not optional supports.",
      "Highlights consultation, reasonable adjustments, and protection from discrimination.",
      "Provides a practical starting point for understanding rights and responsibilities in education.",
    ],
  },
  "DSE roles and expectations": {
    brief:
      "An example-based clip shows how schools and families can work together in ways that align with the Disability Standards and the NCCD approach.",
    summary: [
      "Demonstrates partnership in action rather than only describing the law.",
      "Shows the role of communication, consultation, and shared understanding.",
      "Helps participants connect legal obligations to everyday school practice.",
    ],
  },
  "Moving Forward": {
    brief:
      "A family-school clip closes the session by focusing on practical partnership, shared goals, and what effective collaboration can look like going forward.",
    summary: [
      "Reinforces the importance of ongoing collaboration between home and school.",
      "Highlights communication, trust, and shared focus on the young person.",
      "Leaves participants with a practical picture of positive partnership in action.",
    ],
  },
  "Dan Siegels Hand Model of the Brain": {
    brief:
      "This explainer uses Dan Siegel's hand model of the brain to show how heightened emotion can affect thinking, regulation, and behaviour.",
    summary: [
      "Introduces a simple visual model for understanding regulation and stress.",
      "Shows how emotional intensity can reduce access to thinking and self-management.",
      "Supports more compassionate responses to behaviour during dysregulation.",
    ],
  },
  "Making observations": {
    brief:
      "This clip demonstrates how careful observation can help adults understand behaviour patterns and the conditions in which behaviours are more or less likely to happen.",
    summary: [
      "Promotes observation before interpretation or judgment.",
      "Encourages looking at triggers, context, and patterns around behaviour.",
      "Supports more informed, less reactive planning for behaviour support.",
    ],
  },
};

const elements = {
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

function contentFor(key) {
  return (
    contentConfig[key] || {
      brief: "This video supports the workshop topic through a short lived experience or explainer clip.",
      summary: [
        "Introduces a key concept from the session.",
        "Provides context before reading the full transcript.",
      ],
    }
  );
}

function makeBadge(label, className) {
  const badge = document.createElement("span");
  badge.className = `badge ${className}`;
  badge.textContent = label;
  return badge;
}

function makeTranscriptNote(text) {
  const note = document.createElement("p");
  note.className = "transcript-note";
  note.textContent = text;
  return note;
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
      state.activePanel = null;
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    elements.workshopSwitch.appendChild(button);
  });
}

function renderToolbarMeta() {
  const workshop = activeWorkshop();
  elements.toolbarMeta.textContent = `${workshop.videos.length} videos in scope • browse by session, then open a summary or transcript`;
}

function renderDrawer(item, entry, video, workshopName, itemConfig) {
  const drawer = item.querySelector(".transcript-drawer");
  const isOpen = state.activeVideoId === video.id && Boolean(state.activePanel);

  item.classList.toggle("is-open", isOpen);
  drawer.hidden = !isOpen;
  if (!isOpen) return;

  const content = contentFor(itemConfig.key);
  item.querySelector(".transcript-kicker").textContent = workshopName;
  item.querySelector(".transcript-title").textContent = itemConfig.label || video.title;
  item.querySelector(".transcript-meta").textContent = [
    entry.slideTitle.toUpperCase(),
    video.duration ? `Duration ${video.duration}` : "Duration TBC",
    state.activePanel === "summary" ? "Summary" : "Transcript",
  ].join(" • ");

  const body = item.querySelector(".drawer-body");
  body.innerHTML = "";

  if (state.activePanel === "summary") {
    const intro = document.createElement("p");
    intro.className = "transcript-note";
    intro.textContent = content.brief;
    body.appendChild(intro);

    const list = document.createElement("ul");
    list.className = "summary-list";
    content.summary.forEach((point) => {
      const bullet = document.createElement("li");
      bullet.textContent = point;
      list.appendChild(bullet);
    });
    body.appendChild(list);
    return;
  }

  if (entry.notes) body.appendChild(makeTranscriptNote(entry.notes));
  if (entry.matchNote) body.appendChild(makeTranscriptNote(entry.matchNote));

  if (!video.transcript) {
    body.appendChild(makeTranscriptNote("Transcript not yet loaded for this clip."));
    return;
  }

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
    body.appendChild(wrapper);
  });
}

function renderVideoRow(itemConfig, entry, video, workshopName) {
  const item = elements.rowTemplate.content.firstElementChild.cloneNode(true);
  const content = contentFor(itemConfig.key);
  const isTranscriptReady = video.transcriptStatus === "present" && Boolean(video.transcript);
  const isSummaryOpen = state.activeVideoId === video.id && state.activePanel === "summary";
  const isTranscriptOpen = state.activeVideoId === video.id && state.activePanel === "transcript";

  item.querySelector(".video-title").textContent = itemConfig.label || video.title;
  item.querySelector(".video-slide").textContent = entry.slideTitle.toUpperCase();
  item.querySelector(".video-brief").textContent = content.brief;
  item.querySelector(".duration-pill").textContent = video.duration ? `Duration ${video.duration}` : "Duration TBC";

  const heading = item.querySelector(".video-heading");
  if (itemConfig.optional) {
    heading.appendChild(makeBadge("Optional", "optional"));
  }

  const summaryButton = item.querySelector(".summary-button");
  const transcriptButton = item.querySelector(".transcript-button");

  summaryButton.disabled = false;
  summaryButton.textContent = isSummaryOpen ? "Hide Summary" : "Summary";
  summaryButton.setAttribute("aria-expanded", String(isSummaryOpen));
  summaryButton.addEventListener("click", () => {
    const shouldClose = isSummaryOpen;
    state.activeVideoId = shouldClose ? null : video.id;
    state.activePanel = shouldClose ? null : "summary";
    render();
  });

  transcriptButton.disabled = !isTranscriptReady;
  transcriptButton.textContent = isTranscriptOpen ? "Hide Transcript" : "Transcript";
  transcriptButton.setAttribute("aria-expanded", String(isTranscriptOpen));
  transcriptButton.addEventListener("click", () => {
    const shouldClose = isTranscriptOpen;
    state.activeVideoId = shouldClose ? null : video.id;
    state.activePanel = shouldClose ? null : "transcript";
    render();
  });

  item.querySelector(".close-drawer").addEventListener("click", () => {
    state.activeVideoId = null;
    state.activePanel = null;
    render();
  });

  renderDrawer(item, entry, video, workshopName, itemConfig);
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
