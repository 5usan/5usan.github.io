/* ============================================================
   Icons (Codicon-style, simplified) + file content
   ============================================================ */
const ICONS = {
  explorer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 5h6l2 2h10v12H3z"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>',
  git: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="9" r="2.5"/><path d="M6 8.5v7M18 11.5c0 3-4 3-4 6"/></svg>',
  run: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 5v14l11-7z"/><circle cx="6" cy="19" r="0"/></svg>',
  ext: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5z"/><rect x="13.5" y="13.5" width="5" height="5" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
  account: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></svg>',
  chevronR: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M6 4l4 4-4 4z"/></svg>',
  chevronD: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M4 6l4 4 4-4z"/></svg>',
  close: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 4l8 8M12 4l-8 8"/></svg>',
  ellipsis: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>',
  newfile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 3H6v18h12V8z"/><path d="M13 3v5h5M12 12v5M9.5 14.5h5"/></svg>',
  collapse: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 9H4M9 9V4M9 9l-5-5M15 15h5M15 15v5M15 15l5 5"/></svg>',
  // file glyphs
  md: '<svg viewBox="0 0 16 16" fill="currentColor"><rect x="1" y="3" width="14" height="10" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M3.5 10.5V6l1.7 2 1.7-2v4.5M11.5 6v3.2M11.5 9.2l1.2-1.3M11.5 9.2L10.3 7.9" stroke="currentColor" stroke-width="1.1" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  ts: '<svg viewBox="0 0 16 16" fill="currentColor"><rect x="1.5" y="1.5" width="13" height="13" rx="2"/><text x="8" y="11.5" font-size="8.5" font-weight="700" text-anchor="middle" fill="#1e1e1e" font-family="monospace">TS</text></svg>',
  json: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M6 2C4 2 4.5 5 4.5 6.5S3 8 3 8s1.5 0 1.5 1.5S4 14 6 14M10 2c2 0 1.5 3 1.5 4.5S13 8 13 8s-1.5 0-1.5 1.5S12 14 10 14"/></svg>',
  folder: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M1.5 3.5h4l1.3 1.5h7.7v8H1.5z"/></svg>',
  folderOpen: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M1.5 3.5h4l1.3 1.5h7.7v2H3l-1.5 6z"/><path d="M1.5 13l1.6-6h12l-1.6 6z" opacity=".75"/></svg>',
  gitfile: '<svg viewBox="0 0 16 16" fill="currentColor"><circle cx="5" cy="5" r="1.6"/><circle cx="5" cy="13" r="1.6"/><circle cx="12" cy="8" r="1.6"/><path d="M5 6.6v4.8M12 9.6c0 2-3 1.6-3 3.4" stroke="currentColor" stroke-width="1.1" fill="none"/></svg>',
  // status bar
  branch: '<svg viewBox="0 0 16 16" fill="currentColor"><circle cx="4" cy="4" r="1.6"/><circle cx="4" cy="12" r="1.6"/><circle cx="12" cy="6" r="1.6"/><path d="M4 5.6v4.8M12 7.6c0 2.5-4 1.5-4 4.4" stroke="currentColor" stroke-width="1.1" fill="none"/></svg>',
  error: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="8" cy="8" r="6.3"/><path d="M8 4.6v4M8 10.8v.2"/></svg>',
  warn: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M8 2l6.3 11H1.7z"/><path d="M8 6.5v3.2M8 11.4v.2"/></svg>',
  bell: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M4 7a4 4 0 018 0c0 3 1.2 4 1.2 4H2.8S4 10 4 7z"/><path d="M6.5 13a1.5 1.5 0 003 0"/></svg>',
  check: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8.5l3.2 3L13 5"/></svg>',
  sync: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M13 6a5 5 0 00-9-1M3 10a5 5 0 009 1"/><path d="M13 3v3h-3M3 13v-3h3"/></svg>',
  terminal: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M3 5l3 3-3 3M8 11h5"/></svg>',
  split: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M12 4v16"/></svg>',
  trash: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M3 4.5h10M6 4.5V3h4v1.5M4.5 4.5l.6 9h5.8l.6-9"/></svg>',
  // contact glyphs
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 4h4l1.5 5-2 1.5a12 12 0 005 5l1.5-2 5 1.5v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 3.5A2 2 0 104.5 7.5 2 2 0 004.5 3.5zM3 9h3v12H3zM9 9h2.9v1.6h.04c.4-.76 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7V21h-3v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 012-2h8"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="9" r="6"/><path d="M8.5 13.5L7 21l5-3 5 3-1.5-7.5"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 5a2 2 0 012-2h13v15H6a2 2 0 00-2 2z"/><path d="M4 18.5A2 2 0 016 17h13"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 15l6-6M10.5 6.5l1-1a4 4 0 015.7 5.7l-1 1M13.5 17.5l-1 1a4 4 0 01-5.7-5.7l1-1"/></svg>',
};

/* ---------- helpers for code highlighting ---------- */
function gutter(n) {
  let s = '';
  for (let i = 1; i <= n; i++) s += `<span>${i}</span>`;
  return s;
}

/* ============================================================
   FILE CONTENTS
   ============================================================ */
const FILES = {};

/* ---------- README.md ---------- */
FILES['README.md'] = {
  name: 'README.md', path: 'portfolio/README.md', icon: 'md', iconClass: 'ic-md',
  lang: 'Markdown', render: 'md', git: 'M',
  body: `
  <div class="hero">
    <div class="htext">
      <h1>Hi, I'm Susan Shrestha <span style="font-size:26px">👋</span></h1>
      <div class="subtitle">// AI / ML Researcher · M.S. Computer Science</div>
      <p class="lede">I build <strong>knowledge-grounded AI</strong> — systems where large language models retrieve from
      structured ontologies and knowledge graphs, so their answers are auditable, traceable, and actually trustworthy.</p>
      <div class="chips">
        <span class="chip ok"><span class="dotpulse"></span>Open to 2026 new-grad &amp; research roles</span>
        <span class="chip accent">GraphRAG</span>
        <span class="chip accent">Knowledge Graphs</span>
        <span class="chip accent">LLM Fine-Tuning</span>
      </div>
    </div>
    <div class="avatar"><img src="assets/profile_sq.png" alt="Susan Shrestha" loading="eager"></div>
  </div>

  <div class="meta-row">
    <span class="mi">${ICONS.pin} Fairborn, Ohio</span>
    <span class="mi">${ICONS.account} Wright State University · KASTLE Lab</span>
    <span class="mi">${ICONS.git} github.com/5usan</span>
  </div>

  <h2>About</h2>
  <p>I'm a graduate researcher focused on the intersection of <strong>symbolic knowledge representation</strong> and
  <strong>neural retrieval</strong>. My thesis builds <em>GraphRAG</em> — a retrieval-augmented generation framework that
  grounds LLM outputs directly in RDF ontologies, so every answer can be traced back to a formal competency question.</p>
  <p>Before grad school I spent two years shipping production software — security automation platforms, report engines,
  and full-stack web apps — which taught me how research ideas survive contact with real systems, real latency, and
  real users.</p>

  <h2>What I'm working on right now</h2>
  <ul>
    <li><strong>Graduate Research Assistant @ KASTLE Lab</strong> — ontology chunking for RAG, plus the Heliophysics Knowledge Network.</li>
    <li><strong>AI Developer @ Wright State</strong> — fine-tuning LLaMA 3 for historical personas, voice cloning, and AI video podcasts.</li>
    <li><strong>M.S. thesis: GraphRAG</strong> — deployed on Wright State's FRY HPC cluster.</li>
  </ul>

  <h2>Repository map</h2>
  <p>This portfolio is a workspace. Open files from the explorer on the left, hit
  <code>⌘P</code> to jump anywhere, or pop open the <strong>terminal</strong> below and type <code>help</code>.</p>
  <ul>
    <li><code>projects/</code> — research & engineering projects, one file each</li>
    <li><code>experience/</code> — research &amp; work history</li>
    <li><code>publications/</code> — peer-reviewed research</li>
    <li><code>skills/</code> — the stack, as a typed object</li>
    <li><code>education/</code> — degrees · <code>certifications/</code> — verified credentials</li>
    <li><code>contact/</code> — let's talk</li>
  </ul>

  <blockquote>"Grounding generative AI in structured knowledge — making the black box auditable, one ontology at a time."</blockquote>
  `
};

/* ---------- projects/graphrag.md ---------- */
FILES['graphrag.md'] = {
  name: 'graphrag.md', path: 'portfolio/projects/graphrag.md', icon: 'md', iconClass: 'ic-md',
  lang: 'Markdown', render: 'md', git: 'U',
  body: `
  <div class="proj-head"><h1 style="margin-bottom:0">GraphRAG</h1><span class="year">2024 – Present · M.S. Thesis</span></div>
  <div class="subtitle">// Ontology-grounded retrieval-augmented generation</div>
  <div class="chips">
    <span class="chip">FastAPI</span><span class="chip">Neo4j</span><span class="chip">RDFLib</span>
    <span class="chip">BERT</span><span class="chip">CUDA</span><span class="chip">Singularity</span>
  </div>
  <a class="repo-link" href="https://github.com/5usan/GraphRAG" target="_blank" rel="noopener">${ICONS.github} github.com/5usan/GraphRAG <span class="arrow">↗</span></a>

  <div class="callout"><b>The idea:</b> Most RAG systems retrieve from unstructured text and hope the LLM stays faithful.
  GraphRAG instead grounds retrieval directly in <strong>RDF ontologies</strong>, so every generated answer is traceable
  back to a formal competency question — auditable AI by construction.</div>

  <h2>What I built</h2>
  <ul>
    <li>A graph-based RAG framework that grounds LLM retrieval in RDF ontologies, using <strong>BERT embeddings</strong>
    and <strong>Neo4j</strong> for semantic graph traversal.</li>
    <li>Exposed ontology querying as a <strong>REST API (FastAPI)</strong> with <strong>CUDA-accelerated</strong> embeddings.</li>
    <li>Containerized with <strong>Singularity</strong> for HPC deployment on Wright State's <strong>FRY cluster</strong>.</li>
    <li>An ontology <em>chunking</em> framework that optimizes context windows and raises accuracy on
    natural-language → <strong>SPARQL</strong> translation.</li>
  </ul>

  <h2>Why it matters</h2>
  <p>It bridges <strong>symbolic knowledge representation</strong> and <strong>neural retrieval</strong>: outputs are
  structured, auditable, and traceable to ontology competency questions — instead of plausible-sounding hallucination.</p>
  `
};

/* ---------- projects/multimodal-rag.md ---------- */
FILES['multimodal-rag.md'] = {
  name: 'multimodal-rag.md', path: 'portfolio/projects/multimodal-rag.md', icon: 'md', iconClass: 'ic-md',
  lang: 'Markdown', render: 'md', git: 'U',
  body: `
  <div class="proj-head"><h1 style="margin-bottom:0">Multimodal RAG Framework</h1><span class="year">2025 – 2026</span></div>
  <div class="subtitle">// Visual-semantic retrieval for complex documents</div>
  <div class="chips">
    <span class="chip">ColPali</span><span class="chip">Byaldi</span><span class="chip">LLaVA-v1.5</span>
    <span class="chip">LlamaIndex</span><span class="chip">RAGAS</span><span class="chip">LoRA</span>
  </div>
  <a class="repo-link" href="https://github.com/5usan/Multimodal-RAG" target="_blank" rel="noopener">${ICONS.github} github.com/5usan/Multimodal-RAG <span class="arrow">↗</span></a>

  <div class="callout"><b>The problem:</b> Text-only RAG has a visual blind spot — charts, tables, and figures in
  multi-page documents get lost. This system retrieves on <strong>visual semantics</strong>, not just extracted text.</div>

  <h2>Highlights</h2>
  <ul>
    <li>End-to-end multimodal RAG for visual-semantic retrieval across complex, multi-page documents.</li>
    <li>Applied <strong>4-bit quantization</strong> + <strong>LoRA</strong> to fit a 16 GB VRAM budget.</li>
    <li>Ran experiments on the WSU HPC cluster — <strong>SLURM</strong>, <strong>Singularity</strong>, NVIDIA <strong>P100</strong> GPUs.</li>
    <li>Evaluated with <strong>RAGAS</strong> using <em>MultiModalFaithfulness</em> &amp; <em>MultiModalRelevance</em>
    on the <strong>ViDoRe</strong> and <strong>DocVQA</strong> benchmarks.</li>
  </ul>
  `
};

/* ---------- projects/arom-ontology.md ---------- */
FILES['arom-ontology.md'] = {
  name: 'arom-ontology.md', path: 'portfolio/projects/arom-ontology.md', icon: 'md', iconClass: 'ic-md',
  lang: 'Markdown', render: 'md', git: 'U',
  body: `
  <div class="proj-head"><h1 style="margin-bottom:0">AROM Ontology</h1><span class="year">Fall 2025</span></div>
  <div class="subtitle">// Autonomous Robotic Orchestration Modular Ontology</div>
  <div class="chips">
    <span class="chip">OWL</span><span class="chip">Protégé</span><span class="chip">SPARQL</span>
    <span class="chip">RDFLib</span><span class="chip">yEd</span>
  </div>
  <a class="repo-link" href="https://github.com/kastle-lab/Autonomous-Robotic-Orchestration-Modular-Ontology" target="_blank" rel="noopener">${ICONS.github} kastle-lab/Autonomous-Robotic-Orchestration-Modular-Ontology <span class="arrow">↗</span></a>

  <div class="callout"><b>Goal:</b> A modular ontology that lets autonomous multi-agent robotic systems reason about
  tasks, capabilities, and goals in a shared, machine-interpretable vocabulary.</div>

  <h2>What's inside</h2>
  <ul>
    <li>Built on <strong>8 ontological design patterns</strong> — Archetype, Capability, Goal-Task, Spatial-Thing, and more.</li>
    <li>Integrated <strong>6 robotic datasets</strong>: RH20T-P, Droid, BridgeData V2, MOAD, ALFRED, LaViA.</li>
    <li>Generated <strong>OWL axioms</strong> covering task decomposition and agent–capability matching.</li>
  </ul>
  `
};

/* ---------- projects/federated-llm.md ---------- */
FILES['federated-llm.md'] = {
  name: 'federated-llm.md', path: 'portfolio/projects/federated-llm.md', icon: 'md', iconClass: 'ic-md',
  lang: 'Markdown', render: 'md', git: 'U',
  body: `
  <div class="proj-head"><h1 style="margin-bottom:0">Federated Pipeline Learning for LLMs</h1><span class="year">2025</span></div>
  <div class="subtitle">// Privacy-preserving, multi-GPU NLP training</div>
  <div class="chips">
    <span class="chip">DistilBERT</span><span class="chip">Flower</span><span class="chip">FairScale</span><span class="chip">PyTorch</span>
  </div>
  <a class="repo-link" href="https://github.com/5usan/Federated-LLM-Learning" target="_blank" rel="noopener">${ICONS.github} github.com/5usan/Federated-LLM-Learning <span class="arrow">↗</span></a>
  <h2>Summary</h2>
  <ul>
    <li>A privacy-preserving <strong>federated learning</strong> system with <strong>pipeline-parallel</strong>,
    multi-GPU NLP training across client-specific tasks.</li>
    <li>Used <strong>FairScale</strong> for pipeline parallelism and the <strong>Flower</strong> framework for federation.</li>
  </ul>
  `
};

/* ---------- projects/face-detection.md ---------- */
FILES['face-detection.md'] = {
  name: 'face-detection.md', path: 'portfolio/projects/face-detection.md', icon: 'md', iconClass: 'ic-md',
  lang: 'Markdown', render: 'md', git: 'U',
  body: `
  <div class="proj-head"><h1 style="margin-bottom:0">Face &amp; Person Detection</h1><span class="year">Fall 2024</span></div>
  <div class="subtitle">// Real-time detection with YOLOv8</div>
  <div class="chips">
    <span class="chip">YOLOv8</span><span class="chip">OpenCV</span><span class="chip">PyTorch</span><span class="chip">Roboflow</span>
  </div>
  <a class="repo-link" href="https://github.com/5usan/Face-Detection" target="_blank" rel="noopener">${ICONS.github} github.com/5usan/Face-Detection <span class="arrow">↗</span></a>
  <h2>Results</h2>
  <ul>
    <li>Trained <strong>YOLOv8</strong> on <strong>1,880</strong> Roboflow images over <strong>120 epochs</strong>.</li>
    <li>Achieved <strong>76.3%</strong> test accuracy and a <strong>74.7%</strong> F1 score.</li>
    <li>Deployed for <strong>live webcam</strong> real-time detection.</li>
  </ul>
  `
};

/* ---------- experience/research.md ---------- */
FILES['research.md'] = {
  name: 'research.md', path: 'portfolio/experience/research.md', icon: 'md', iconClass: 'ic-md',
  lang: 'Markdown', render: 'md', git: 'M',
  body: `
  <h1>Research Experience</h1>
  <div class="subtitle">// KASTLE Lab — Knowledge and Skill Transfer Laboratory</div>

  <h2>Graduate Research Assistant — KASTLE Lab</h2>
  <p><strong>Wright State University</strong> · advised by Cogan Shimizu · Dayton, OH<br>
  <span style="font-family:var(--mono);color:#8a8a8a">Jun 2025 – Present</span></p>
  <ul>
    <li>Architected an <strong>ontology chunking framework</strong> for RAG pipelines — optimizing context windows and
    increasing LLM accuracy for natural-language → SPARQL translation.</li>
    <li>Engineered end-to-end <strong>NLP pipelines</strong> with Python, Neo4j, and Apache Jena to automate semantic
    enrichment and prepare large scientific metadata repositories for AI consumption.</li>
    <li>Co-developed the <strong>Heliophysics Knowledge Network</strong> — modular, domain-specific knowledge graphs that
    serve as a deterministic ground-truth layer for downstream generative AI.</li>
  </ul>

  <h2>Graduate Teaching Assistant</h2>
  <p><strong>Wright State University</strong> · Dayton, OH<br>
  <span style="font-family:var(--mono);color:#8a8a8a">Aug 2024 – Present</span></p>
  <ul>
    <li>Supported course instruction, grading, and office hours for graduate Computer Science courses.</li>
  </ul>
  `
};

/* ---------- experience/work.json ---------- */
FILES['work.json'] = {
  name: 'work.json', path: 'portfolio/experience/work.json', icon: 'json', iconClass: 'ic-json',
  lang: 'JSON', render: 'code', git: 'M', lines: 47,
  body: `<span class="pu">[</span>
  <span class="pu">{</span>
    <span class="p">"role"</span><span class="pu">:</span> <span class="s">"AI Developer"</span><span class="pu">,</span>
    <span class="p">"company"</span><span class="pu">:</span> <span class="s">"Wright State University"</span><span class="pu">,</span>
    <span class="p">"location"</span><span class="pu">:</span> <span class="s">"Dayton, OH"</span><span class="pu">,</span>
    <span class="p">"period"</span><span class="pu">:</span> <span class="s">"Jun 2025 – Present"</span><span class="pu">,</span>
    <span class="p">"highlights"</span><span class="pu">:</span> <span class="pu">[</span>
      <span class="s">"Fine-tuned LLaMA 3 on custom historical datasets for persona consistency; deployed in a mobile app for real-time conversations with AI historical figures"</span><span class="pu">,</span>
      <span class="s">"Built voice-cloning solutions with F5 TTS and ElevenLabs to replicate historical voices"</span><span class="pu">,</span>
      <span class="s">"Produced multi-speaker AI video podcasts integrating Sora frames, WAN 2.0, and ComfyUI pipelines"</span>
    <span class="pu">]</span>
  <span class="pu">}</span><span class="pu">,</span>
  <span class="pu">{</span>
    <span class="p">"role"</span><span class="pu">:</span> <span class="s">"Software Engineer"</span><span class="pu">,</span>
    <span class="p">"company"</span><span class="pu">:</span> <span class="s">"Vairav Technology (P) Ltd."</span><span class="pu">,</span>
    <span class="p">"location"</span><span class="pu">:</span> <span class="s">"Kathmandu, Nepal"</span><span class="pu">,</span>
    <span class="p">"period"</span><span class="pu">:</span> <span class="s">"Mar 2023 – Aug 2024"</span><span class="pu">,</span>
    <span class="p">"highlights"</span><span class="pu">:</span> <span class="pu">[</span>
      <span class="s">"Built a Report Engine to automate log analysis and visualization — cut report generation time by 75%"</span><span class="pu">,</span>
      <span class="s">"Engineered a SOAR platform automating threat detection and response — reduced SOC analyst workload by 40%"</span><span class="pu">,</span>
      <span class="s">"Integrated GraphQL into the CMS — cut content load time by 35%"</span><span class="pu">,</span>
      <span class="s">"Partnered with SOC/SIEM teams for deployment and continuous security monitoring"</span>
    <span class="pu">]</span>
  <span class="pu">}</span><span class="pu">,</span>
  <span class="pu">{</span>
    <span class="p">"role"</span><span class="pu">:</span> <span class="s">"Full-Stack Developer"</span><span class="pu">,</span>
    <span class="p">"company"</span><span class="pu">:</span> <span class="s">"Port Pro (P) Ltd."</span><span class="pu">,</span>
    <span class="p">"location"</span><span class="pu">:</span> <span class="s">"Kathmandu, Nepal"</span><span class="pu">,</span>
    <span class="p">"period"</span><span class="pu">:</span> <span class="s">"Aug 2022 – Mar 2023"</span><span class="pu">,</span>
    <span class="p">"highlights"</span><span class="pu">:</span> <span class="pu">[</span>
      <span class="s">"Automated real-time shipping data updates with Puppeteer — boosted engagement by 30%"</span><span class="pu">,</span>
      <span class="s">"Built RESTful APIs serving dynamic data to 1,000+ concurrent users"</span><span class="pu">,</span>
      <span class="s">"Resolved critical web issues across 100+ global teams — cut development time by 40%"</span>
    <span class="pu">]</span>
  <span class="pu">}</span>
<span class="pu">]</span>`
};

/* ---------- education.json ---------- */
FILES['education.json'] = {
  name: 'education.json', path: 'portfolio/education/education.json', icon: 'json', iconClass: 'ic-json',
  lang: 'JSON', render: 'code', git: '', lines: 22,
  body: `<span class="pu">{</span>
  <span class="p">"degrees"</span><span class="pu">:</span> <span class="pu">[</span>
    <span class="pu">{</span>
      <span class="p">"school"</span><span class="pu">:</span> <span class="s">"Wright State University"</span><span class="pu">,</span>
      <span class="p">"location"</span><span class="pu">:</span> <span class="s">"Dayton, OH"</span><span class="pu">,</span>
      <span class="p">"degree"</span><span class="pu">:</span> <span class="s">"M.S. in Computer Science"</span><span class="pu">,</span>
      <span class="p">"graduation"</span><span class="pu">:</span> <span class="s">"Dec 2026 (expected)"</span><span class="pu">,</span>
      <span class="p">"thesis"</span><span class="pu">:</span> <span class="s">"GraphRAG — Ontology-Grounded Retrieval-Augmented Generation for Knowledge-Intensive AI Systems"</span><span class="pu">,</span>
      <span class="p">"advisor"</span><span class="pu">:</span> <span class="s">"Cogan Shimizu"</span><span class="pu">,</span>
      <span class="p">"lab"</span><span class="pu">:</span> <span class="s">"KASTLE (Knowledge and Skill Transfer Laboratory)"</span>
    <span class="pu">}</span><span class="pu">,</span>
    <span class="pu">{</span>
      <span class="p">"school"</span><span class="pu">:</span> <span class="s">"Tribhuvan University"</span><span class="pu">,</span>
      <span class="p">"location"</span><span class="pu">:</span> <span class="s">"Kirtipur, Kathmandu, Nepal"</span><span class="pu">,</span>
      <span class="p">"degree"</span><span class="pu">:</span> <span class="s">"B.Sc. in Computer Science &amp; Information Technology"</span><span class="pu">,</span>
      <span class="p">"graduation"</span><span class="pu">:</span> <span class="s">"Jul 2022"</span>
    <span class="pu">}</span>
  <span class="pu">]</span>
<span class="pu">}</span>`
};

/* ---------- skills.ts ---------- */
FILES['skills.ts'] = {
  name: 'skills.ts', path: 'portfolio/skills/skills.ts', icon: 'ts', iconClass: 'ic-ts',
  lang: 'TypeScript', render: 'code', git: '', lines: 42,
  body: `<span class="c">// The stack, as a typed object. Hover-worthy.</span>
<span class="k">export const</span> <span class="cn">skills</span><span class="pu">:</span> <span class="t">SkillSet</span> <span class="pu">=</span> <span class="pu">{</span>
  <span class="p">languages</span><span class="pu">:</span> <span class="pu">[</span><span class="s">"Python"</span><span class="pu">,</span> <span class="s">"JavaScript"</span><span class="pu">,</span> <span class="s">"TypeScript"</span><span class="pu">,</span> <span class="s">"SQL"</span><span class="pu">,</span> <span class="s">"C#"</span><span class="pu">,</span> <span class="s">"HTML/CSS"</span><span class="pu">]</span><span class="pu">,</span>

  <span class="p">aiMl</span><span class="pu">:</span> <span class="pu">[</span><span class="s">"PyTorch"</span><span class="pu">,</span> <span class="s">"scikit-learn"</span><span class="pu">,</span> <span class="s">"Transformers"</span><span class="pu">,</span> <span class="s">"Hugging Face"</span><span class="pu">,</span>
           <span class="s">"YOLO"</span><span class="pu">,</span> <span class="s">"OpenCV"</span><span class="pu">,</span> <span class="s">"Pandas"</span><span class="pu">,</span> <span class="s">"LlamaIndex"</span><span class="pu">,</span> <span class="s">"RAGAS"</span><span class="pu">]</span><span class="pu">,</span>

  <span class="p">llmsAndRag</span><span class="pu">:</span> <span class="pu">[</span><span class="s">"RAG"</span><span class="pu">,</span> <span class="s">"GraphRAG"</span><span class="pu">,</span> <span class="s">"Multimodal RAG"</span><span class="pu">,</span> <span class="s">"LoRA / QLoRA"</span><span class="pu">,</span>
               <span class="s">"LLaMA 3"</span><span class="pu">,</span> <span class="s">"LLaVA"</span><span class="pu">,</span> <span class="s">"ColPali"</span><span class="pu">,</span> <span class="s">"Prompt Engineering"</span><span class="pu">]</span><span class="pu">,</span>

  <span class="p">knowledgeRep</span><span class="pu">:</span> <span class="pu">[</span><span class="s">"RDF/OWL"</span><span class="pu">,</span> <span class="s">"SPARQL"</span><span class="pu">,</span> <span class="s">"RDFLib"</span><span class="pu">,</span> <span class="s">"Protégé"</span><span class="pu">,</span>
                 <span class="s">"Apache Jena"</span><span class="pu">,</span> <span class="s">"Ontology Design Patterns"</span><span class="pu">,</span> <span class="s">"Knowledge Graphs"</span><span class="pu">]</span><span class="pu">,</span>

  <span class="p">databases</span><span class="pu">:</span> <span class="pu">[</span><span class="s">"Neo4j"</span><span class="pu">,</span> <span class="s">"PostgreSQL"</span><span class="pu">,</span> <span class="s">"MySQL"</span><span class="pu">,</span> <span class="s">"MongoDB"</span><span class="pu">,</span> <span class="s">"Redis"</span><span class="pu">,</span> <span class="s">"Jena Fuseki"</span><span class="pu">]</span><span class="pu">,</span>

  <span class="p">systemsHpc</span><span class="pu">:</span> <span class="pu">[</span><span class="s">"CUDA"</span><span class="pu">,</span> <span class="s">"PyCUDA"</span><span class="pu">,</span> <span class="s">"SLURM"</span><span class="pu">,</span> <span class="s">"Singularity"</span><span class="pu">,</span> <span class="s">"Docker"</span><span class="pu">,</span>
               <span class="s">"Linux"</span><span class="pu">,</span> <span class="s">"AWS"</span><span class="pu">,</span> <span class="s">"WSU HPC (FRY node)"</span><span class="pu">]</span><span class="pu">,</span>

  <span class="p">webAndApis</span><span class="pu">:</span> <span class="pu">[</span><span class="s">"FastAPI"</span><span class="pu">,</span> <span class="s">"React"</span><span class="pu">,</span> <span class="s">"Node.js"</span><span class="pu">,</span> <span class="s">"Django"</span><span class="pu">,</span> <span class="s">"GraphQL"</span><span class="pu">,</span> <span class="s">"REST"</span><span class="pu">,</span> <span class="s">"Prisma"</span><span class="pu">]</span><span class="pu">,</span>

  <span class="p">security</span><span class="pu">:</span> <span class="pu">[</span><span class="s">"SOAR"</span><span class="pu">,</span> <span class="s">"SIEM"</span><span class="pu">,</span> <span class="s">"CSPM"</span><span class="pu">,</span> <span class="s">"AWS Security"</span><span class="pu">,</span> <span class="s">"MeTRA Risk Assessment"</span><span class="pu">]</span><span class="pu">,</span>

  <span class="p">tools</span><span class="pu">:</span> <span class="pu">[</span><span class="s">"Git"</span><span class="pu">,</span> <span class="s">"VS Code"</span><span class="pu">,</span> <span class="s">"Jupyter"</span><span class="pu">,</span> <span class="s">"yEd"</span><span class="pu">,</span> <span class="s">"ComfyUI"</span><span class="pu">,</span> <span class="s">"Premiere Pro"</span><span class="pu">]</span><span class="pu">,</span>

  <span class="c">// always learning →</span>
  <span class="p">currentlyExploring</span><span class="pu">:</span> <span class="pu">[</span><span class="s">"Agentic RAG"</span><span class="pu">,</span> <span class="s">"Neuro-symbolic reasoning"</span><span class="pu">]</span><span class="pu">,</span>
<span class="pu">}</span><span class="pu">;</span>`
};

/* ---------- contact.md ---------- */
FILES['contact.md'] = {
  name: 'contact.md', path: 'portfolio/contact/contact.md', icon: 'md', iconClass: 'ic-md',
  lang: 'Markdown', render: 'md', git: '',
  body: `
  <h1>Let's build something grounded 🤝</h1>
  <p class="lede">I'm actively looking for <strong>2026 new-grad and research roles</strong> in applied AI/ML,
  LLM/RAG engineering, and knowledge-graph systems. The fastest way to reach me is email.</p>

  <div class="contact-grid">
    <a class="contact-card" href="mailto:susanshrestha2056@gmail.com">
      <span class="ci">${ICONS.mail}</span>
      <span class="cmeta"><b>Email</b><span>susanshrestha2056@gmail.com</span></span>
    </a>
    <a class="contact-card" href="tel:+19374225518">
      <span class="ci">${ICONS.phone}</span>
      <span class="cmeta"><b>Phone</b><span>(937) 422-5518</span></span>
    </a>
    <a class="contact-card" href="https://linkedin.com/in/5usan" target="_blank" rel="noopener">
      <span class="ci">${ICONS.linkedin}</span>
      <span class="cmeta"><b>LinkedIn</b><span>linkedin.com/in/5usan</span></span>
    </a>
    <a class="contact-card" href="https://github.com/5usan" target="_blank" rel="noopener">
      <span class="ci">${ICONS.github}</span>
      <span class="cmeta"><b>GitHub</b><span>github.com/5usan</span></span>
    </a>
  </div>

  <div class="meta-row"><span class="mi">${ICONS.pin} Fairborn, Ohio · open to relocation</span></div>

  <blockquote>Prefer the terminal? Open the panel below and type <code>contact</code> or <code>email</code>.</blockquote>
  `
};

/* ---------- publications.md ---------- */
FILES['publications.md'] = {
  name: 'publications.md', path: 'portfolio/publications/publications.md', icon: 'md', iconClass: 'ic-md',
  lang: 'Markdown', render: 'md', git: 'U',
  body: `
  <h1>Publications <span style="font-size:24px">📚</span></h1>
  <div class="subtitle">// Peer-reviewed research</div>
  <p class="lede">Peer-reviewed work at the intersection of <strong>ontologies</strong>, <strong>knowledge graphs</strong>,
  and applied AI. The complete, always-current list lives on
  <a href="https://scholar.google.com/citations?user=Px7ia3IAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar ↗</a>.</p>

  <div class="pub">
    <div class="pub-venue">RobOntics 2025 · Workshop on Ontologies for Autonomous Robotics · @ROBOTICC</div>
    <div class="pub-title">Towards a Modular Ontology for Autonomous Robotic Orchestration</div>
    <div class="pub-authors">Michael McCain · Chris Davis Jaldi · <strong>Susan Shrestha</strong> · Shreyas Casturi · Cogan Shimizu</div>
    <div class="pub-meta">CEUR-WS, Vol-4169 · 2025 · Peer-reviewed workshop paper</div>
    <p>Introduces <strong>AROM</strong> — a modular ontology that gives autonomous, multi-agent robotic systems a shared,
    machine-interpretable vocabulary for reasoning over tasks, capabilities, and goals. Built on a library of ontological
    design patterns and grounded in real robotic datasets. See the
    <span class="term-link" data-open="arom-ontology.md" style="cursor:pointer;color:var(--link)">arom-ontology.md</span> project for the build.</p>
    <div class="pub-links">
      <a class="repo-link" href="https://ceur-ws.org/Vol-4169/" target="_blank" rel="noopener">${ICONS.link} CEUR-WS Vol-4169 <span class="arrow">↗</span></a>
      <a class="repo-link" href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Px7ia3IAAAAJ&citation_for_view=Px7ia3IAAAAJ:u5HHmVD_uO8C" target="_blank" rel="noopener">${ICONS.book} Google Scholar <span class="arrow">↗</span></a>
    </div>
  </div>

  <blockquote>Want the BibTeX or a PDF? Reach out via <span class="term-link" data-open="contact.md" style="cursor:pointer;color:var(--link)">contact.md</span> — happy to share.</blockquote>
  `
};

/* ---------- certifications.md ---------- */
FILES['certifications.md'] = {
  name: 'certifications.md', path: 'portfolio/certifications/certifications.md', icon: 'md', iconClass: 'ic-md',
  lang: 'Markdown', render: 'md', git: 'U',
  body: `
  <h1>Certifications <span style="font-size:24px">🏅</span></h1>
  <div class="subtitle">// Verified credentials · Coursera</div>
  <p class="lede">Professional certificates earned through <strong>Coursera</strong>. Each card links to its public
  verification page — click <em>Verify</em> to confirm authenticity.</p>

  <div class="cert-grid">
    <a class="cert-card" href="https://www.coursera.org/account/accomplishments/verify/NSDPTTVPMQ2F" target="_blank" rel="noopener">
      <span class="cert-ic">${ICONS.award}</span>
      <span class="cert-meta">
        <b>Coursera Professional Certificate</b>
        <span class="cert-issuer">Coursera · Verified credential</span>
        <span class="cert-id">ID&nbsp;NSDPTTVPMQ2F</span>
      </span>
      <span class="cert-verify">Verify ↗</span>
    </a>
    <a class="cert-card" href="https://www.coursera.org/account/accomplishments/verify/UES271K1B01Q" target="_blank" rel="noopener">
      <span class="cert-ic">${ICONS.award}</span>
      <span class="cert-meta">
        <b>Coursera Professional Certificate</b>
        <span class="cert-issuer">Coursera · Verified credential</span>
        <span class="cert-id">ID&nbsp;UES271K1B01Q</span>
      </span>
      <span class="cert-verify">Verify ↗</span>
    </a>
    <a class="cert-card" href="https://www.coursera.org/account/accomplishments/verify/J4PJD43F0PPN" target="_blank" rel="noopener">
      <span class="cert-ic">${ICONS.award}</span>
      <span class="cert-meta">
        <b>Coursera Professional Certificate</b>
        <span class="cert-issuer">Coursera · Verified credential</span>
        <span class="cert-id">ID&nbsp;J4PJD43F0PPN</span>
      </span>
      <span class="cert-verify">Verify ↗</span>
    </a>
  </div>

  <blockquote>📝 Titles shown are placeholders — send the exact course names &amp; issuing partners and I'll swap them in.</blockquote>
  `
};

/* ---------- .gitignore (easter egg) ---------- */
FILES['.gitignore'] = {
  name: '.gitignore', path: 'portfolio/.gitignore', icon: 'gitfile', iconClass: 'ic-git',
  lang: 'Ignore', render: 'code', git: '', lines: 12,
  body: `<span class="c"># things that never make it to prod</span>
<span class="tk">node_modules/</span>
<span class="tk">__pycache__/</span>
<span class="tk">*.ckpt</span>
<span class="tk">model_weights_final_FINAL_v2.pt</span>
<span class="tk">imposter_syndrome.log</span>
<span class="tk">.env</span>           <span class="c"># no, you can't have my API keys</span>
<span class="tk">untitled-1.py</span>   <span class="c"># we don't talk about untitled-1</span>
<span class="tk">sleep/</span>
<span class="tk">free_time/</span>     <span class="c"># deprecated since grad school</span>
<span class="tk">slop/</span>          <span class="c"># hallucinations not welcome here</span>`
};

/* ============================================================
   Explorer tree structure
   ============================================================ */
const TREE = [
  { type: 'file', id: 'README.md' },
  { type: 'folder', name: 'projects', open: false, children: [
    { type: 'file', id: 'graphrag.md' },
    { type: 'file', id: 'multimodal-rag.md' },
    { type: 'file', id: 'arom-ontology.md' },
    { type: 'file', id: 'federated-llm.md' },
    { type: 'file', id: 'face-detection.md' },
  ]},
  { type: 'folder', name: 'experience', open: false, children: [
    { type: 'file', id: 'research.md' },
    { type: 'file', id: 'work.json' },
  ]},
  { type: 'folder', name: 'publications', open: false, children: [
    { type: 'file', id: 'publications.md' },
  ]},
  { type: 'folder', name: 'education', open: false, children: [
    { type: 'file', id: 'education.json' },
  ]},
  { type: 'folder', name: 'certifications', open: false, children: [
    { type: 'file', id: 'certifications.md' },
  ]},
  { type: 'folder', name: 'skills', open: false, children: [
    { type: 'file', id: 'skills.ts' },
  ]},
  { type: 'folder', name: 'contact', open: false, children: [
    { type: 'file', id: 'contact.md' },
  ]},
  { type: 'file', id: '.gitignore' },
];
