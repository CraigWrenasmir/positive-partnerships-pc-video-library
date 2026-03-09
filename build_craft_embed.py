from __future__ import annotations

import json
from pathlib import Path


BASE_DIR = Path("/Users/craigsmith/Desktop/Workshop Facilitator Guides/pc-video-library")
DATA_PATH = BASE_DIR / "data.json"
OUTPUT_PATH = BASE_DIR / "craft-cms-pc-video-library-embed.html"


SESSION_CONFIG = {
    "1-day-pc": [
        {"title": "Session 1: Welcome and Introductions", "items": [{"key": "Language and Autism"}, {"key": "Having a say"}]},
        {
            "title": "Session 2: Diversity of autism",
            "items": [
                {"key": "Strengths and interests"},
                {"key": "Strengths and interests high school", "label": "Strengths and Interests (High School)", "optional": True},
                {"key": "Connections to culture and community"},
                {"key": "Communication"},
                {"key": "Executive Functioning"},
                {"key": "Dean", "label": "Dean"},
                {"key": "Self-care and independence skills", "label": "Self-Care and Independence Skills"},
                {"key": "Strategies"},
            ],
        },
        {
            "title": "Session 3: Sensory Processing",
            "items": [
                {"key": "What can sensory processing differences feel like"},
                {"key": "Judy Endow: Sensory Processing"},
                {"key": "Over and under sensitive"},
                {"key": "Sensory processing and context"},
                {"key": "Sensory solutions and strategies"},
            ],
        },
        {"title": "Session 4: Working in Partnerships", "items": [{"key": "Disability Standards for Education"}, {"key": "Moving Forward"}]},
    ],
    "2-day-pc": [
        {"title": "Session 1: Welcome and Introductions", "items": [{"key": "Language and Autism"}, {"key": "Having a say"}]},
        {
            "title": "Session 2: Diversity of autism",
            "items": [
                {"key": "Strengths and interests"},
                {"key": "Strengths and interests high school", "label": "Strengths and Interests (High School)", "optional": True},
                {"key": "Connections to culture and community"},
                {"key": "Communication"},
                {"key": "Executive Functioning"},
                {"key": "Dean", "label": "Dean"},
                {"key": "Self-care and independence skills", "label": "Self-care and Independence"},
                {"key": "Strategies"},
            ],
        },
        {
            "title": "Session 3: Sensory Processing",
            "items": [
                {"key": "What can sensory processing differences feel like"},
                {"key": "Judy Endow: Sensory Processing"},
                {"key": "Over and under sensitive"},
                {"key": "Sensory processing and context"},
                {"key": "Sensory solutions and strategies"},
            ],
        },
        {"title": "Session 5: Understanding Behaviour", "items": [{"key": "Dan Siegels Hand Model of the Brain"}, {"key": "Making observations"}]},
        {
            "title": "Session 6: Working in Partnerships",
            "items": [
                {"key": "Disability Standards for Education"},
                {"key": "DSE roles and expectations", "label": "DSE Roles and Expectations"},
                {"key": "Moving Forward"},
            ],
        },
    ],
}


CONTENT_CONFIG = {
    "Language and Autism": {
        "brief": "Thomas Kuzma reflects on the language autistic people use to describe themselves and why identity-first versus person-first language matters.",
        "summary": [
            "Explores how language shapes identity, dignity, and self-understanding.",
            "Contrasts identity-first and person-first language from an autistic perspective.",
            "Encourages listening to individual preference rather than assuming one correct term for everyone.",
        ],
    },
    "Having a say": {
        "brief": "This clip focuses on student voice and the importance of understanding how autistic young people communicate what helps them learn best.",
        "summary": [
            "Centres the young person as an active contributor to learning decisions.",
            "Highlights the value of asking how a student learns rather than making assumptions.",
            "Supports stronger collaboration between families, students, and educators.",
        ],
    },
    "Strengths and interests": {
        "brief": "Young people and families talk about strengths and interests as meaningful parts of identity, wellbeing, and engagement in daily life.",
        "summary": [
            "Moves the conversation away from deficits and toward strengths.",
            "Shows how interests can support confidence, belonging, and learning.",
            "Reinforces that strengths may look different across individuals and contexts.",
        ],
    },
    "Strengths and interests high school": {
        "brief": "Sam reflects on strengths and interests in a high school context, showing how they can shape motivation, identity, and school experiences.",
        "summary": [
            "Connects strengths and interests to secondary school engagement.",
            "Shows how interests can be misunderstood if adults focus only on compliance or curriculum.",
            "Encourages a more respectful, strengths-based response to adolescent identity and motivation.",
        ],
    },
    "Connections to culture and community": {
        "brief": "Hao shares how sport, music, dance, and community connections contribute to identity, belonging, and wellbeing.",
        "summary": [
            "Emphasises that identity is shaped by more than disability or diagnosis.",
            "Highlights the importance of cultural, family, and community connections.",
            "Encourages educators and families to notice the whole person, not just support needs.",
        ],
    },
    "Communication": {
        "brief": "A montage of lived experience perspectives shows different ways autistic young people communicate, including speech, AAC, and non-traditional communication styles.",
        "summary": [
            "Shows that communication is diverse and cannot be reduced to spoken language alone.",
            "Introduces AAC, processing differences, and misunderstandings in social interaction.",
            "Encourages communication support that is flexible, respectful, and collaborative.",
        ],
    },
    "Executive Functioning": {
        "brief": "This explainer introduces executive functioning as the set of mental processes that help people organise, plan, remember, and manage actions.",
        "summary": [
            "Defines executive functioning in practical, everyday terms.",
            "Links executive functioning to organisation, planning, memory, and self-management.",
            "Helps participants recognise that these processes can affect participation across school and home life.",
        ],
    },
    "Dean": {
        "brief": "Dean shares a lived experience perspective on executive functioning and how these challenges can affect daily expectations and routines.",
        "summary": [
            "Adds a personal perspective to the concept of executive functioning.",
            "Shows how invisible cognitive demands can shape everyday experiences.",
            "Encourages empathy for behaviours that may otherwise be misread as unwillingness or defiance.",
        ],
    },
    "Self-care and independence skills": {
        "brief": "Adon talks about self-care and independence skills, drawing attention to the hidden demands involved in everyday tasks.",
        "summary": [
            "Shows that everyday independence often requires planning, sequencing, and support.",
            "Highlights how self-care expectations can be stressful or uneven across contexts.",
            "Encourages realistic and individualised support rather than assumptions about capability.",
        ],
    },
    "Strategies": {
        "brief": "Autistic young people describe strategies and supports that help them participate, regulate, communicate, and manage day-to-day life.",
        "summary": [
            "Provides concrete examples of supports that make a positive difference.",
            "Shows that useful strategies are individual and context-dependent.",
            "Encourages participants to match strategies to the person rather than rely on one-size-fits-all ideas.",
        ],
    },
    "What can sensory processing differences feel like": {
        "brief": "This clip offers a first-person sensory perspective, helping participants imagine how everyday environments can feel intense, beautiful, or overwhelming.",
        "summary": [
            "Introduces sensory processing through lived experience rather than theory alone.",
            "Shows that sensory experiences can be heightened, layered, and deeply personal.",
            "Builds empathy for how ordinary settings may feel very different to autistic people.",
        ],
    },
    "Judy Endow: Sensory Processing": {
        "brief": "Judy Endow provides a concise sensory processing perspective that helps explain why autistic responses to the environment can look so different from person to person.",
        "summary": [
            "Frames sensory processing as a central part of lived experience, not a side issue.",
            "Helps participants understand why responses to sound, light, movement, or touch can vary widely.",
            "Supports a more respectful interpretation of behaviour linked to sensory need.",
        ],
    },
    "Over and under sensitive": {
        "brief": "This short analogy-based clip explains how people may respond differently when sensory systems are over-responsive, under-responsive, or inconsistent.",
        "summary": [
            "Introduces the idea that sensory profiles are not all the same.",
            "Explains that sensitivity can shift across senses and situations.",
            "Helps participants move beyond simplistic ideas about sensory behaviour.",
        ],
    },
    "Sensory processing and context": {
        "brief": "This video connects sensory experiences to context, showing how the same person may respond very differently depending on the environment, demands, and level of safety.",
        "summary": [
            "Emphasises that sensory processing is shaped by context, not just by the individual.",
            "Shows how environment, stress, and demands can change sensory tolerance.",
            "Encourages more thoughtful adjustment of spaces, routines, and expectations.",
        ],
    },
    "Sensory solutions and strategies": {
        "brief": "Autistic lived experience perspectives are used to explore practical sensory supports and how thoughtful adjustments can make environments more workable.",
        "summary": [
            "Focuses on practical supports rather than expecting the person to simply cope.",
            "Highlights that sensory strategies should be collaborative and individualised.",
            "Connects adjustments to access, comfort, regulation, and participation.",
        ],
    },
    "Disability Standards for Education": {
        "brief": "This short explainer introduces the legal obligations schools have under the Disability Standards for Education and why they matter in practice.",
        "summary": [
            "Explains that the Standards are legal responsibilities, not optional supports.",
            "Highlights consultation, reasonable adjustments, and protection from discrimination.",
            "Provides a practical starting point for understanding rights and responsibilities in education.",
        ],
    },
    "DSE roles and expectations": {
        "brief": "An example-based clip shows how schools and families can work together in ways that align with the Disability Standards and the NCCD approach.",
        "summary": [
            "Demonstrates partnership in action rather than only describing the law.",
            "Shows the role of communication, consultation, and shared understanding.",
            "Helps participants connect legal obligations to everyday school practice.",
        ],
    },
    "Moving Forward": {
        "brief": "A family-school clip closes the session by focusing on practical partnership, shared goals, and what effective collaboration can look like going forward.",
        "summary": [
            "Reinforces the importance of ongoing collaboration between home and school.",
            "Highlights communication, trust, and shared focus on the young person.",
            "Leaves participants with a practical picture of positive partnership in action.",
        ],
    },
    "Dan Siegels Hand Model of the Brain": {
        "brief": "This explainer uses Dan Siegel's hand model of the brain to show how heightened emotion can affect thinking, regulation, and behaviour.",
        "summary": [
            "Introduces a simple visual model for understanding regulation and stress.",
            "Shows how emotional intensity can reduce access to thinking and self-management.",
            "Supports more compassionate responses to behaviour during dysregulation.",
        ],
    },
    "Making observations": {
        "brief": "This clip demonstrates how careful observation can help adults understand behaviour patterns and the conditions in which behaviours are more or less likely to happen.",
        "summary": [
            "Promotes observation before interpretation or judgment.",
            "Encourages looking at triggers, context, and patterns around behaviour.",
            "Supports more informed, less reactive planning for behaviour support.",
        ],
    },
}


CSS = r"""
#pp-pc-library-embed{--bg:#f7f3fb;--surface:#fff;--ink:#1f1530;--muted:#625a74;--line:rgba(51,0,68,.1);--brand-plum:#330044;--brand-purple:#712d90;--brand-red:#dc2d27;--brand-purple-soft:rgba(113,45,144,.1);--shadow:0 18px 40px rgba(51,0,68,.08);font-family:"Manrope","Segoe UI",sans-serif;color:var(--ink);background:linear-gradient(180deg,#f8f4fb 0%,#fff 100%);border:1px solid var(--line);border-radius:28px;padding:24px}
#pp-pc-library-embed *{box-sizing:border-box}
#pp-pc-library-embed .pp-header{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(220px,.8fr);gap:20px;align-items:center;margin-bottom:20px}
#pp-pc-library-embed .pp-copy,#pp-pc-library-embed .pp-logo-wrap{background:linear-gradient(180deg,rgba(255,255,255,.98),rgba(241,232,248,.9));border:1px solid var(--line);border-radius:24px;padding:24px;box-shadow:var(--shadow)}
#pp-pc-library-embed .pp-kicker{margin:0 0 8px;text-transform:uppercase;letter-spacing:.16em;font-size:.74rem;font-weight:800;color:var(--brand-purple)}
#pp-pc-library-embed h2,#pp-pc-library-embed h3,#pp-pc-library-embed h4{margin:0;line-height:1.06;font-family:"Fraunces",Georgia,serif;color:var(--brand-plum)}
#pp-pc-library-embed .pp-title{font-size:clamp(2rem,4vw,3.4rem);max-width:10ch}
#pp-pc-library-embed .pp-intro{margin:14px 0 0;max-width:62ch;line-height:1.7;color:var(--muted)}
#pp-pc-library-embed .pp-logo{display:block;width:min(100%,320px);height:auto;margin:0 auto}
#pp-pc-library-embed .pp-downloads{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;background:linear-gradient(90deg,rgba(113,45,144,.08),transparent 46%),linear-gradient(180deg,rgba(255,255,255,.98),rgba(246,240,250,.96));border:1px solid var(--line);border-radius:22px;padding:18px 20px;margin-bottom:20px}
#pp-pc-library-embed .pp-downloads p{margin:6px 0 0;color:var(--muted);line-height:1.6}
#pp-pc-library-embed .pp-download-actions{display:flex;gap:12px;flex-wrap:wrap}
#pp-pc-library-embed .pp-download,#pp-pc-library-embed .pp-tab,#pp-pc-library-embed .pp-action,#pp-pc-library-embed .pp-close{display:inline-flex;align-items:center;justify-content:center;text-decoration:none;border:0;border-radius:14px;cursor:pointer;font:inherit;font-weight:700;transition:transform .14s ease,box-shadow .14s ease}
#pp-pc-library-embed .pp-download,#pp-pc-library-embed .pp-action.summary{min-height:46px;padding:0 18px;color:#fff;background:linear-gradient(135deg,var(--brand-plum),var(--brand-purple));box-shadow:0 12px 20px rgba(51,0,68,.16)}
#pp-pc-library-embed .pp-download.secondary,#pp-pc-library-embed .pp-action.transcript{background:linear-gradient(135deg,var(--brand-red),#eb605b);box-shadow:0 12px 20px rgba(220,45,39,.16)}
#pp-pc-library-embed .pp-download:hover,#pp-pc-library-embed .pp-tab:hover,#pp-pc-library-embed .pp-action:hover,#pp-pc-library-embed .pp-close:hover{transform:translateY(-1px)}
#pp-pc-library-embed .pp-toolbar{display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap;margin-bottom:20px}
#pp-pc-library-embed .pp-tabs{display:inline-flex;gap:10px;flex-wrap:wrap}
#pp-pc-library-embed .pp-tab{padding:12px 18px;background:#fff;box-shadow:inset 0 0 0 1px rgba(51,0,68,.18);color:var(--brand-plum)}
#pp-pc-library-embed .pp-tab.active{color:#fff;background:linear-gradient(135deg,var(--brand-plum),var(--brand-purple));box-shadow:0 12px 20px rgba(51,0,68,.16)}
#pp-pc-library-embed .pp-meta{color:var(--muted);font-size:.95rem}
#pp-pc-library-embed .pp-sessions{display:flex;flex-direction:column;gap:20px}
#pp-pc-library-embed .pp-session{border:1px solid var(--line);border-radius:24px;overflow:hidden;background:linear-gradient(180deg,rgba(255,255,255,.98),rgba(244,237,249,.86));box-shadow:var(--shadow)}
#pp-pc-library-embed .pp-session-head{display:flex;justify-content:space-between;align-items:end;gap:12px;padding:22px 22px 16px;border-bottom:1px solid var(--line);background:linear-gradient(90deg,rgba(113,45,144,.07),transparent 40%),linear-gradient(180deg,rgba(255,255,255,.96),rgba(255,255,255,.7))}
#pp-pc-library-embed .pp-session-count{margin:0;color:var(--muted);font-size:.94rem}
#pp-pc-library-embed .pp-items{display:flex;flex-direction:column;gap:14px;padding:18px}
#pp-pc-library-embed .pp-item{border:1px solid rgba(51,0,68,.08);border-radius:22px;background:#fff;overflow:hidden}
#pp-pc-library-embed .pp-item.open{border-color:rgba(113,45,144,.22)}
#pp-pc-library-embed .pp-item-main{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:18px;align-items:start;padding:20px}
#pp-pc-library-embed .pp-item-title-row{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:8px}
#pp-pc-library-embed .pp-item-title{font-size:1.3rem}
#pp-pc-library-embed .pp-badge{display:inline-flex;align-items:center;padding:6px 10px;border-radius:999px;font-size:.8rem;font-weight:700;color:var(--brand-purple);background:var(--brand-purple-soft)}
#pp-pc-library-embed .pp-slide{margin:0 0 10px;text-transform:uppercase;letter-spacing:.13em;font-size:.78rem;font-weight:800;color:var(--brand-purple)}
#pp-pc-library-embed .pp-brief{margin:0;max-width:68ch;color:var(--muted);line-height:1.65}
#pp-pc-library-embed .pp-actions{display:flex;flex-direction:column;gap:10px;min-width:210px}
#pp-pc-library-embed .pp-duration{display:inline-flex;align-items:center;justify-content:center;min-height:42px;padding:10px 14px;border-radius:999px;background:var(--brand-purple-soft);color:var(--brand-plum);font-weight:700}
#pp-pc-library-embed .pp-action,#pp-pc-library-embed .pp-close{min-height:46px;padding:0 16px}
#pp-pc-library-embed .pp-close{background:#fff;box-shadow:inset 0 0 0 1px var(--line);color:var(--brand-plum)}
#pp-pc-library-embed .pp-drawer{padding:0 20px 20px;border-top:1px solid rgba(51,0,68,.08);background:linear-gradient(180deg,rgba(113,45,144,.06),rgba(255,255,255,.98)),linear-gradient(90deg,rgba(220,45,39,.05),transparent 34%)}
#pp-pc-library-embed .pp-drawer-head{display:flex;justify-content:space-between;align-items:start;gap:14px;padding:18px 0 14px}
#pp-pc-library-embed .pp-drawer-meta{margin:8px 0 0;color:var(--muted);line-height:1.6}
#pp-pc-library-embed .pp-drawer-body{display:flex;flex-direction:column;gap:14px}
#pp-pc-library-embed .pp-note{margin:0;padding-left:14px;border-left:3px solid var(--brand-red);color:var(--muted);line-height:1.6}
#pp-pc-library-embed .pp-summary{margin:0;padding-left:20px;line-height:1.7}
#pp-pc-library-embed .pp-summary li+li{margin-top:8px}
#pp-pc-library-embed .pp-transcript{display:flex;flex-direction:column;gap:14px;max-height:460px;overflow:auto;padding-right:8px}
#pp-pc-library-embed .pp-block{padding-top:14px;border-top:1px solid var(--line)}
#pp-pc-library-embed .pp-block:first-child{padding-top:0;border-top:0}
#pp-pc-library-embed .pp-speaker{display:inline-block;margin-bottom:8px;color:var(--brand-red);font-size:.8rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
#pp-pc-library-embed .pp-text{margin:0;line-height:1.8}
@media (max-width:960px){#pp-pc-library-embed .pp-header{grid-template-columns:1fr}#pp-pc-library-embed .pp-downloads,#pp-pc-library-embed .pp-session-head,#pp-pc-library-embed .pp-drawer-head{flex-direction:column;align-items:start}#pp-pc-library-embed .pp-item-main{grid-template-columns:1fr}#pp-pc-library-embed .pp-actions{min-width:0}}
"""


JS_TEMPLATE = r"""
(function(){
  const root = document.getElementById('pp-pc-library-embed');
  if(!root) return;
  const dataset = __DATA__;
  const sessionConfig = __SESSIONS__;
  const contentConfig = __CONTENT__;
  const downloads = {
    one: 'https://craigwrenasmir.github.io/positive-partnerships-pc-video-library/1%20Day%20PC%20Video%20Quick%20Reference.docx',
    two: 'https://craigwrenasmir.github.io/positive-partnerships-pc-video-library/2%20Day%20PC%20Video%20Quick%20Reference.docx'
  };
  const state = { activeWorkshopId: '1-day-pc', activeVideoId: null, activePanel: null };
  const logoUrl = 'https://www.positivepartnerships.com.au/assets/img/svg/logo/main-logo.svg';

  function byId(id){ return dataset.videos.find(v => v.id === id); }
  function workshop(){ return dataset.workshops.find(w => w.id === state.activeWorkshopId); }
  function sessionKey(entry, video){
    if(video.title === 'Strengths and interests' && /slide 13/i.test(entry.slideTitle)) return 'Strengths and interests high school';
    if(video.title === 'Executive Functioning' && /dean/i.test(video.speakerOrSource)) return 'Dean';
    if(video.title === 'What can sensory processing differences feel like' && /judy endow/i.test(video.speakerOrSource)) return 'Judy Endow: Sensory Processing';
    return video.title;
  }
  function contentFor(key){
    return contentConfig[key] || { brief: 'This video supports the workshop topic through a short lived experience or explainer clip.', summary: ['Introduces a key concept from the session.', 'Provides context before reading the full transcript.'] };
  }
  function el(tag, className, text){
    const node = document.createElement(tag);
    if(className) node.className = className;
    if(text !== undefined) node.textContent = text;
    return node;
  }
  function renderDrawer(entry, video, itemConfig){
    const wrap = el('div','pp-drawer');
    const head = el('div','pp-drawer-head');
    const left = el('div');
    left.appendChild(el('p','pp-kicker', workshop().name));
    left.appendChild(el('h4','', itemConfig.label || video.title));
    left.appendChild(el('p','pp-drawer-meta', [entry.slideTitle.toUpperCase(), video.duration ? `Duration ${video.duration}` : 'Duration TBC', state.activePanel === 'summary' ? 'Summary' : 'Transcript'].join(' • ')));
    const close = el('button','pp-close','Close');
    close.type = 'button';
    close.addEventListener('click', () => { state.activeVideoId = null; state.activePanel = null; render(); });
    head.appendChild(left); head.appendChild(close); wrap.appendChild(head);
    const body = el('div','pp-drawer-body');
    if(state.activePanel === 'summary'){
      body.appendChild(el('p','pp-note', contentFor(itemConfig.key).brief));
      const ul = el('ul','pp-summary');
      contentFor(itemConfig.key).summary.forEach(point => ul.appendChild(el('li','',point)));
      body.appendChild(ul);
    } else {
      if(entry.notes) body.appendChild(el('p','pp-note',entry.notes));
      if(entry.matchNote) body.appendChild(el('p','pp-note',entry.matchNote));
      const transcript = el('div','pp-transcript');
      if(video.transcript && Array.isArray(video.transcript.blocks)){
        video.transcript.blocks.forEach(block => {
          const sec = el('section','pp-block');
          sec.appendChild(el('div','pp-speaker',block.speaker));
          sec.appendChild(el('p','pp-text',block.text));
          transcript.appendChild(sec);
        });
      } else {
        transcript.appendChild(el('p','pp-note','Transcript not yet loaded for this clip.'));
      }
      body.appendChild(transcript);
    }
    wrap.appendChild(body);
    return wrap;
  }
  function renderItem(entry, video, itemConfig){
    const article = el('article','pp-item');
    const open = state.activeVideoId === video.id;
    if(open) article.classList.add('open');
    const main = el('div','pp-item-main');
    const copy = el('div');
    const titleRow = el('div','pp-item-title-row');
    titleRow.appendChild(el('h3','pp-item-title', itemConfig.label || video.title));
    if(itemConfig.optional) titleRow.appendChild(el('span','pp-badge','Optional'));
    copy.appendChild(titleRow);
    copy.appendChild(el('p','pp-slide', entry.slideTitle.toUpperCase()));
    copy.appendChild(el('p','pp-brief', contentFor(itemConfig.key).brief));
    const actions = el('div','pp-actions');
    actions.appendChild(el('span','pp-duration', video.duration ? `Duration ${video.duration}` : 'Duration TBC'));
    const summaryBtn = el('button','pp-action summary', open && state.activePanel==='summary' ? 'Hide Summary' : 'Summary');
    summaryBtn.type = 'button';
    summaryBtn.addEventListener('click', () => {
      const closing = open && state.activePanel === 'summary';
      state.activeVideoId = closing ? null : video.id;
      state.activePanel = closing ? null : 'summary';
      render();
    });
    const transcriptBtn = el('button','pp-action transcript', open && state.activePanel==='transcript' ? 'Hide Transcript' : 'Transcript');
    transcriptBtn.type = 'button';
    transcriptBtn.disabled = !(video.transcriptStatus === 'present' && video.transcript);
    transcriptBtn.addEventListener('click', () => {
      const closing = open && state.activePanel === 'transcript';
      state.activeVideoId = closing ? null : video.id;
      state.activePanel = closing ? null : 'transcript';
      render();
    });
    actions.appendChild(summaryBtn);
    actions.appendChild(transcriptBtn);
    main.appendChild(copy); main.appendChild(actions); article.appendChild(main);
    if(open && state.activePanel) article.appendChild(renderDrawer(entry, video, itemConfig));
    return article;
  }
  function render(){
    root.innerHTML = '';
    const currentWorkshop = workshop();
    const grouped = new Map();
    currentWorkshop.videos.forEach(entry => grouped.set(sessionKey(entry, byId(entry.videoId)), { entry, video: byId(entry.videoId) }));
    const header = el('div','pp-header');
    const copy = el('div','pp-copy');
    copy.appendChild(el('p','pp-kicker','Positive Partnerships'));
    copy.appendChild(el('h2','pp-title','PC Workshop Video Library'));
    copy.appendChild(el('p','pp-intro','A transcript-first library for the 1 Day PC and 2 Day PC workshops. Browse by session, open summaries or transcripts inline, and download quick-reference Word documents if needed.'));
    const logoWrap = el('div','pp-logo-wrap');
    const logo = el('img','pp-logo');
    logo.src = logoUrl;
    logo.alt = 'Positive Partnerships logo';
    logoWrap.appendChild(logo);
    header.appendChild(copy); header.appendChild(logoWrap); root.appendChild(header);

    const downloadsWrap = el('section','pp-downloads');
    const dcopy = el('div');
    dcopy.appendChild(el('p','pp-kicker','Quick Reference Documents'));
    dcopy.appendChild(el('h3','', 'Download session-based translator guides'));
    dcopy.appendChild(el('p','', 'Use these Word documents if you want a printable quick-reference version of the video summaries and key concepts.'));
    const dactions = el('div','pp-download-actions');
    const d1 = el('a','pp-download','Download 1 Day PC'); d1.href = downloads.one; d1.setAttribute('download','');
    const d2 = el('a','pp-download secondary','Download 2 Day PC'); d2.href = downloads.two; d2.setAttribute('download','');
    dactions.appendChild(d1); dactions.appendChild(d2); downloadsWrap.appendChild(dcopy); downloadsWrap.appendChild(dactions); root.appendChild(downloadsWrap);

    const toolbar = el('div','pp-toolbar');
    const tabs = el('div','pp-tabs');
    dataset.workshops.forEach(w => {
      const btn = el('button','pp-tab' + (w.id === state.activeWorkshopId ? ' active' : ''), w.name);
      btn.type = 'button';
      btn.addEventListener('click', () => { state.activeWorkshopId = w.id; state.activeVideoId = null; state.activePanel = null; render(); });
      tabs.appendChild(btn);
    });
    toolbar.appendChild(tabs);
    toolbar.appendChild(el('div','pp-meta', `${currentWorkshop.videos.length} videos in scope • browse by session, then open a summary or transcript`));
    root.appendChild(toolbar);

    const sessions = el('div','pp-sessions');
    (sessionConfig[currentWorkshop.id] || []).forEach(session => {
      const sec = el('section','pp-session');
      const head = el('div','pp-session-head');
      head.appendChild(el('h3','',session.title));
      const body = el('div','pp-items');
      let count = 0;
      session.items.forEach(itemConfig => {
        const match = grouped.get(itemConfig.key);
        if(!match) return;
        count += 1;
        body.appendChild(renderItem(match.entry, match.video, itemConfig));
      });
      head.appendChild(el('p','pp-session-count', `${count} videos`));
      sec.appendChild(head); sec.appendChild(body); sessions.appendChild(sec);
    });
    root.appendChild(sessions);
  }
  render();
})();
"""


def main() -> None:
    data = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    js = JS_TEMPLATE.replace("__DATA__", json.dumps(data, ensure_ascii=True))
    js = js.replace("__SESSIONS__", json.dumps(SESSION_CONFIG, ensure_ascii=True))
    js = js.replace("__CONTENT__", json.dumps(CONTENT_CONFIG, ensure_ascii=True))

    snippet = f"""<div id="pp-pc-library-embed"></div>
<style>
{CSS}
</style>
<script>
{js}
</script>
"""
    OUTPUT_PATH.write_text(snippet, encoding="utf-8")


if __name__ == "__main__":
    main()
