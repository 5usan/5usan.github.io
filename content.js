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
  graduation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 10l10-5 10 5-10 5z"/><path d="M6 13v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4"/><path d="M20 10v5"/></svg>',
  group: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="7" r="3"/><path d="M3 19c0-3 2.7-5 6-5s6 2 6 5"/><circle cx="17" cy="8.5" r="2.5"/><path d="M21 19c0-2-1.8-3.5-4-4"/></svg>',
  leetcode: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M7 8L3 12l4 4M17 8l4 4-4 4M14 5l-4 14"/></svg>',
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
  <div id="readme-top" class="readme-hero">
    <div class="readme-hero-text">
      <p class="readme-eyebrow">// <b>AI / ML Researcher</b> · M.S. Computer Science</p>
      <h1 class="readme-h1">Hi, I'm Susan<br>Shrestha 👋</h1>
      <p class="lede">I build <strong>knowledge-grounded AI</strong> — systems where large language models retrieve from
      structured ontologies and knowledge graphs, so their answers are auditable, traceable, and <strong>actually trustworthy</strong>.</p>
      <div class="readme-badges">
        <span class="readme-badge live"><span class="pulse"></span>Open to 2026 new-grad &amp; research roles</span>
        <span class="readme-badge">GraphRAG</span>
        <span class="readme-badge">Knowledge Graphs</span>
        <span class="readme-badge">LLM Fine-Tuning</span>
      </div>
      <div class="readme-cta">
        <span class="readme-btn primary" data-scroll="explore">Explore the work →</span>
        <span class="readme-btn" data-open="contact.md">Get in touch</span>
      </div>
      <div class="readme-meta">
        <span>${ICONS.pin} Fairborn, Ohio</span>
        <span>${ICONS.graduation} Wright State University</span>
        <span>${ICONS.group} KASTLE Lab</span>
        <span><a href="https://github.com/5usan" target="_blank" rel="noopener">${ICONS.github} github.com/5usan</a></span>
        <span><a href="https://www.linkedin.com/in/5usan/" target="_blank" rel="noopener">${ICONS.linkedin} linkedin.com/in/5usan</a></span>
        <span><a href="https://leetcode.com/u/5usan/" target="_blank" rel="noopener">${ICONS.leetcode} leetcode.com/u/5usan</a></span>
      </div>
    </div>
    <div class="readme-photo-card">
      <div class="readme-photo-frame">
        <img src="assets/profile.png" alt="Susan Shrestha" loading="eager">
        <span class="readme-photo-cap">susan.jpg</span>
      </div>
      <div class="readme-pstats">
        <div class="readme-pstat"><span>Projects shipped</span><b>5</b></div>
        <div class="readme-pstat"><span>Focus</span><b>GraphRAG</b></div>
        <div class="readme-pstat"><span>Status</span><b>2026 grad</b></div>
      </div>
    </div>
  </div>

  <section class="readme-section" id="about">
    <div class="readme-sec-head">
      <span class="readme-sec-num">01</span>
      <span class="readme-sec-title">About</span>
      <span class="readme-sec-rule"></span>
    </div>
    <div class="readme-prose">
      <p>I'm a graduate researcher focused on the intersection of <strong>symbolic knowledge representation</strong> and
      <strong>neural retrieval</strong>. My thesis builds <em>GraphRAG</em> — a retrieval-augmented generation framework that
      grounds LLM outputs directly in RDF ontologies, so every answer can be traced back to a formal competency question.</p>
      <p>Before grad school I spent two years shipping production software — security automation platforms, report engines,
      and full-stack web apps — which taught me how research ideas survive contact with real systems, real latency, and
      real users.</p>
    </div>
  </section>

  <section class="readme-section" id="now">
    <div class="readme-sec-head">
      <span class="readme-sec-num">02</span>
      <span class="readme-sec-title">What I'm working on now</span>
      <span class="readme-sec-rule"></span>
    </div>
    <div class="readme-now">
      <div class="readme-now-row">
        <span class="readme-now-mark">01</span>
        <span class="readme-now-body"><b>Graduate Research Assistant @ KASTLE Lab</b> — ontology chunking for RAG, plus the Heliophysics Knowledge Network.</span>
      </div>
      <div class="readme-now-row">
        <span class="readme-now-mark">02</span>
        <span class="readme-now-body"><b>AI Developer @ Wright State</b> — fine-tuning LLaMA 3 for historical personas, voice cloning, and AI video podcasts.</span>
      </div>
      <div class="readme-now-row">
        <span class="readme-now-mark">03</span>
        <span class="readme-now-body"><b>M.S. thesis: GraphRAG</b> — deployed on Wright State's FRY HPC cluster.</span>
      </div>
    </div>
  </section>

  <section class="readme-section" id="explore">
    <div class="readme-sec-head">
      <span class="readme-sec-num">03</span>
      <span class="readme-sec-title">Selected Work</span>
      <span class="readme-sec-rule"></span>
    </div>
    <p class="readme-repo-intro">Three threads of the same question: how do you make a generative model show its
    work? Each grounds the black box in something you can audit.</p>
    <div class="sw-grid">
      <div class="sw-card featured" data-open="graphrag.md">
        <div class="sw-card-head">
          <span class="sw-card-num">01</span>
          <span class="sw-card-type">Thesis</span>
        </div>
        <h3 class="sw-card-title">GraphRAG</h3>
        <p class="sw-card-desc">Retrieval-augmented generation grounded directly in RDF ontologies — every answer traces back to a formal competency question.</p>
        <div class="sw-card-chips">
          <span class="chip">RDF</span><span class="chip">SPARQL</span><span class="chip">LLaMA 3</span><span class="chip">FRY HPC</span>
        </div>
        <div class="sw-card-footer">
          <span class="sw-card-path">~/graphrag</span>
          <span class="sw-card-arrow">→</span>
        </div>
      </div>
      <div class="sw-card" data-open="multimodal-rag.md">
        <div class="sw-card-head">
          <span class="sw-card-num">02</span>
          <span class="sw-card-type">Research</span>
        </div>
        <h3 class="sw-card-title">Multimodal RAG</h3>
        <p class="sw-card-desc">Retrieval across a joint text + image embedding space, so the model can ground answers in figures — not just prose.</p>
        <div class="sw-card-chips">
          <span class="chip">CLIP</span><span class="chip">FAISS</span><span class="chip">PyTorch</span>
        </div>
        <div class="sw-card-footer">
          <span class="sw-card-path">~/multimodal-rag</span>
          <span class="sw-card-arrow">→</span>
        </div>
      </div>
      <div class="sw-card" data-open="arom-ontology.md">
        <div class="sw-card-head">
          <span class="sw-card-num">03</span>
          <span class="sw-card-type">Research</span>
        </div>
        <h3 class="sw-card-title">AROM Ontology</h3>
        <p class="sw-card-desc">A reasoning-oriented abstraction layer for knowledge graphs — semantic chunking that keeps structure intact for RAG.</p>
        <div class="sw-card-chips">
          <span class="chip">OWL</span><span class="chip">Protégé</span><span class="chip">Python</span>
        </div>
        <div class="sw-card-footer">
          <span class="sw-card-path">~/arom-ontology</span>
          <span class="sw-card-arrow">→</span>
        </div>
      </div>
    </div>
  </section>

  <section class="readme-section" id="repo-map">
    <div class="readme-sec-head">
      <span class="readme-sec-num">04</span>
      <span class="readme-sec-title">Repository map</span>
      <span class="readme-sec-rule"></span>
    </div>
    <p class="readme-repo-intro">This portfolio is a workspace. Each file is a way in — pick a directory to browse
    the research, or hit <code>contact.md</code> if you'd rather just talk.</p>
    <div class="readme-repo">
      <span class="readme-repo-row" data-open="graphrag.md"><span class="readme-repo-code">projects/</span><span class="readme-repo-desc">Research &amp; engineering, one file each</span><span class="readme-repo-arrow">→</span></span>
      <span class="readme-repo-row" data-open="research.md"><span class="readme-repo-code">experience/</span><span class="readme-repo-desc">research.md + work.md</span><span class="readme-repo-arrow">→</span></span>
      <span class="readme-repo-row" data-open="skills.ts"><span class="readme-repo-code">skills.ts</span><span class="readme-repo-desc">The stack, as a typed object</span><span class="readme-repo-arrow">→</span></span>
      <span class="readme-repo-row" data-open="education.json"><span class="readme-repo-code">education.json</span><span class="readme-repo-desc">Degrees</span><span class="readme-repo-arrow">→</span></span>
      <span class="readme-repo-row" data-open="publications.md"><span class="readme-repo-code">publications.md</span><span class="readme-repo-desc">Peer-reviewed research</span><span class="readme-repo-arrow">→</span></span>
      <span class="readme-repo-row" data-open="contact.md"><span class="readme-repo-code">contact.md</span><span class="readme-repo-desc">Let's talk</span><span class="readme-repo-arrow">→</span></span>
    </div>
  </section>

  <div class="readme-quote-sec">
    <div class="readme-quote">
      <span class="readme-quote-mark">"</span>
      <p>Grounding generative AI in structured knowledge — making the black box auditable, one ontology at a time.</p>
    </div>
  </div>

  <footer class="readme-footer" id="contact">
    <div class="readme-footer-grid">
      <div>
        <h3>Let's build something auditable.</h3>
        <div class="readme-footer-links">
          <a class="readme-btn primary" href="https://github.com/5usan" target="_blank" rel="noopener">github.com/5usan →</a>
          <span class="readme-btn" data-scroll="readme-top">Back to top</span>
        </div>
      </div>
      <div class="readme-colophon">
        SUSAN SHRESTHA — PORTFOLIO '26<br>
        Fairborn, Ohio · Wright State University<br>
        Open to 2026 new-grad &amp; research roles
      </div>
    </div>
  </footer>
  `
};

/* ---------- projects/graphrag.md ---------- */
FILES['graphrag.md'] = {
  name: 'graphrag.md', path: 'portfolio/projects/graphrag.md', icon: 'md', iconClass: 'ic-md',
  lang: 'Markdown', render: 'md', git: 'U',
  body: `
  <div class="proj-head">
    <h1>GraphRAG</h1>
    <span class="year">2024 — Present · M.S. Thesis</span>
  </div>
  <div class="subtitle">// Ontology-grounded retrieval-augmented generation</div>
  <div class="proj-meta-row">
    <div class="proj-meta-card">
      <div class="proj-meta-label">Timeline</div>
      <div class="proj-meta-value">2024 — Present</div>
    </div>
    <div class="proj-meta-card">
      <div class="proj-meta-label">Type</div>
      <div class="proj-meta-value">M.S. Thesis</div>
    </div>
    <div class="proj-meta-card">
      <div class="proj-meta-label">Role</div>
      <div class="proj-meta-value">Sole researcher · KASTLE Lab</div>
    </div>
    <div class="proj-meta-source">
      <a class="proj-source-link" href="https://github.com/5usan/GraphRAG" target="_blank" rel="noopener">
        ${ICONS.github} /5usan/GraphRAG
      </a>
    </div>
  </div>
  <div class="proj-body">
    <div class="proj-left">
      <div class="proj-intro"><b>The idea —</b> Most RAG systems retrieve from unstructured text and hope the LLM stays faithful.
      GraphRAG instead grounds retrieval directly in <strong>RDF ontologies</strong>, so every generated answer is traceable
      back to a formal competency question — auditable AI by construction.</div>
      <div class="proj-section"><span class="proj-section-label">Why it matters</span></div>
      <p>It bridges <strong>symbolic knowledge representation</strong> and <strong>neural retrieval</strong>: outputs are
      structured, auditable, and traceable to ontology competency questions — instead of plausible-sounding hallucination.</p>
      <div class="proj-section"><span class="proj-section-label">Stack</span></div>
      <div class="chips">
        <span class="chip">FastAPI</span><span class="chip">Neo4j</span><span class="chip">RDFLib</span>
        <span class="chip">BERT</span><span class="chip">CUDA</span><span class="chip">Singularity</span>
      </div>
    </div>
    <div class="proj-right">
      <div class="proj-section"><span class="proj-section-label">What I built</span></div>
      <div class="proj-numbered-list">
        <div class="proj-num-item">
          <span class="proj-num">01</span>
          <p>A graph-based RAG framework that grounds LLM retrieval in RDF ontologies, using <strong>BERT embeddings</strong>
          and <strong>Neo4j</strong> for semantic graph traversal.</p>
        </div>
        <div class="proj-num-item">
          <span class="proj-num">02</span>
          <p>Exposed ontology querying as a <strong>REST API (FastAPI)</strong> with <strong>CUDA-accelerated</strong> embeddings.</p>
        </div>
        <div class="proj-num-item">
          <span class="proj-num">03</span>
          <p>Containerized with <strong>Singularity</strong> for HPC deployment on Wright State's <strong>FRY cluster</strong>.</p>
        </div>
        <div class="proj-num-item">
          <span class="proj-num">04</span>
          <p>An ontology <em>chunking</em> framework that optimizes context windows and raises accuracy on
          natural-language → <strong>SPARQL</strong> translation.</p>
        </div>
      </div>
    </div>
  </div>
  `
};

/* ---------- projects/multimodal-rag.md ---------- */
FILES['multimodal-rag.md'] = {
  name: 'multimodal-rag.md', path: 'portfolio/projects/multimodal-rag.md', icon: 'md', iconClass: 'ic-md',
  lang: 'Markdown', render: 'md', git: 'U',
  body: `
  <div class="proj-head">
    <h1>Multimodal RAG</h1>
    <span class="year">2025 – 2026 · Research</span>
  </div>
  <div class="subtitle">// Visual-semantic retrieval for complex documents</div>
  <div class="proj-meta-row">
    <div class="proj-meta-card">
      <div class="proj-meta-label">Timeline</div>
      <div class="proj-meta-value">2025 – 2026</div>
    </div>
    <div class="proj-meta-card">
      <div class="proj-meta-label">Type</div>
      <div class="proj-meta-value">Research</div>
    </div>
    <div class="proj-meta-card">
      <div class="proj-meta-label">Role</div>
      <div class="proj-meta-value">Sole researcher · WSU HPC</div>
    </div>
    <div class="proj-meta-source">
      <a class="proj-source-link" href="https://github.com/5usan/Multimodal-RAG" target="_blank" rel="noopener">
        ${ICONS.github} /5usan/Multimodal-RAG
      </a>
    </div>
  </div>
  <div class="proj-body">
    <div class="proj-left">
      <div class="proj-intro"><b>The problem —</b> Text-only RAG has a visual blind spot — charts, tables, and figures in
      multi-page documents get lost. This system retrieves on <strong>visual semantics</strong>, not just extracted text.</div>
      <div class="proj-section"><span class="proj-section-label">Stack</span></div>
      <div class="chips">
        <span class="chip">ColPali</span><span class="chip">Byaldi</span><span class="chip">LLaVA-v1.5</span>
        <span class="chip">LlamaIndex</span><span class="chip">RAGAS</span><span class="chip">LoRA</span>
      </div>
    </div>
    <div class="proj-right">
      <div class="proj-section"><span class="proj-section-label">Highlights</span></div>
      <div class="proj-numbered-list">
        <div class="proj-num-item">
          <span class="proj-num">01</span>
          <p>End-to-end multimodal RAG for visual-semantic retrieval across complex, multi-page documents.</p>
        </div>
        <div class="proj-num-item">
          <span class="proj-num">02</span>
          <p>Applied <strong>4-bit quantization</strong> + <strong>LoRA</strong> to fit a 16 GB VRAM budget.</p>
        </div>
        <div class="proj-num-item">
          <span class="proj-num">03</span>
          <p>Ran experiments on the WSU HPC cluster — <strong>SLURM</strong>, <strong>Singularity</strong>, NVIDIA <strong>P100</strong> GPUs.</p>
        </div>
        <div class="proj-num-item">
          <span class="proj-num">04</span>
          <p>Evaluated with <strong>RAGAS</strong> using <em>MultiModalFaithfulness</em> &amp; <em>MultiModalRelevance</em>
          on the <strong>ViDoRe</strong> and <strong>DocVQA</strong> benchmarks.</p>
        </div>
      </div>
    </div>
  </div>
  `
};

/* ---------- projects/arom-ontology.md ---------- */
FILES['arom-ontology.md'] = {
  name: 'arom-ontology.md', path: 'portfolio/projects/arom-ontology.md', icon: 'md', iconClass: 'ic-md',
  lang: 'Markdown', render: 'md', git: 'U',
  body: `
  <div class="proj-head">
    <h1>AROM Ontology</h1>
    <span class="year">Fall 2025 · Research</span>
  </div>
  <div class="subtitle">// Autonomous Robotic Orchestration Modular Ontology</div>
  <div class="proj-meta-row">
    <div class="proj-meta-card">
      <div class="proj-meta-label">Timeline</div>
      <div class="proj-meta-value">Fall 2025</div>
    </div>
    <div class="proj-meta-card">
      <div class="proj-meta-label">Type</div>
      <div class="proj-meta-value">Research</div>
    </div>
    <div class="proj-meta-card">
      <div class="proj-meta-label">Role</div>
      <div class="proj-meta-value">Graduate Researcher · KASTLE Lab</div>
    </div>
    <div class="proj-meta-source">
      <a class="proj-source-link" href="https://github.com/kastle-lab/Autonomous-Robotic-Orchestration-Modular-Ontology" target="_blank" rel="noopener">
        ${ICONS.github} kastle-lab/AROM
      </a>
    </div>
  </div>
  <div class="proj-body">
    <div class="proj-left">
      <div class="proj-intro"><b>The goal —</b> A modular ontology that lets autonomous multi-agent robotic systems reason about
      tasks, capabilities, and goals in a shared, machine-interpretable vocabulary.</div>
      <div class="proj-section"><span class="proj-section-label">Stack</span></div>
      <div class="chips">
        <span class="chip">OWL</span><span class="chip">Protégé</span><span class="chip">SPARQL</span>
        <span class="chip">RDFLib</span><span class="chip">yEd</span>
      </div>
    </div>
    <div class="proj-right">
      <div class="proj-section"><span class="proj-section-label">What's inside</span></div>
      <div class="proj-numbered-list">
        <div class="proj-num-item">
          <span class="proj-num">01</span>
          <p>Built on <strong>8 ontological design patterns</strong> — Archetype, Capability, Goal-Task, Spatial-Thing, and more.</p>
        </div>
        <div class="proj-num-item">
          <span class="proj-num">02</span>
          <p>Integrated <strong>6 robotic datasets</strong>: RH20T-P, Droid, BridgeData V2, MOAD, ALFRED, LaViA.</p>
        </div>
        <div class="proj-num-item">
          <span class="proj-num">03</span>
          <p>Generated <strong>OWL axioms</strong> covering task decomposition and agent–capability matching.</p>
        </div>
      </div>
    </div>
  </div>
  `
};

/* ---------- projects/federated-llm.md ---------- */
FILES['federated-llm.md'] = {
  name: 'federated-llm.md', path: 'portfolio/projects/federated-llm.md', icon: 'md', iconClass: 'ic-md',
  lang: 'Markdown', render: 'md', git: 'U',
  body: `
  <div class="proj-head">
    <h1>Federated Pipeline Learning for LLMs</h1>
    <span class="year">2025 · Research</span>
  </div>
  <div class="subtitle">// Privacy-preserving, multi-GPU NLP training</div>
  <div class="proj-meta-row">
    <div class="proj-meta-card">
      <div class="proj-meta-label">Timeline</div>
      <div class="proj-meta-value">2025</div>
    </div>
    <div class="proj-meta-card">
      <div class="proj-meta-label">Type</div>
      <div class="proj-meta-value">Research</div>
    </div>
    <div class="proj-meta-card">
      <div class="proj-meta-label">Role</div>
      <div class="proj-meta-value">Sole researcher</div>
    </div>
    <div class="proj-meta-source">
      <a class="proj-source-link" href="https://github.com/5usan/Federated-LLM-Learning" target="_blank" rel="noopener">
        ${ICONS.github} /5usan/Federated-LLM-Learning
      </a>
    </div>
  </div>
  <div class="proj-body">
    <div class="proj-left">
      <div class="proj-intro"><b>The idea —</b> A privacy-preserving federated learning system with <strong>pipeline-parallel</strong>,
      multi-GPU NLP training across client-specific tasks — each client trains locally, no raw data leaves the device.</div>
      <div class="proj-section"><span class="proj-section-label">Stack</span></div>
      <div class="chips">
        <span class="chip">DistilBERT</span><span class="chip">Flower</span>
        <span class="chip">FairScale</span><span class="chip">PyTorch</span>
      </div>
    </div>
    <div class="proj-right">
      <div class="proj-section"><span class="proj-section-label">What I built</span></div>
      <div class="proj-numbered-list">
        <div class="proj-num-item">
          <span class="proj-num">01</span>
          <p>A privacy-preserving <strong>federated learning</strong> system with <strong>pipeline-parallel</strong>,
          multi-GPU NLP training across client-specific tasks.</p>
        </div>
        <div class="proj-num-item">
          <span class="proj-num">02</span>
          <p>Used <strong>FairScale</strong> for pipeline parallelism and the <strong>Flower</strong> framework for federation.</p>
        </div>
      </div>
    </div>
  </div>
  `
};

/* ---------- projects/face-detection.md ---------- */
FILES['face-detection.md'] = {
  name: 'face-detection.md', path: 'portfolio/projects/face-detection.md', icon: 'md', iconClass: 'ic-md',
  lang: 'Markdown', render: 'md', git: 'U',
  body: `
  <div class="proj-head">
    <h1>Face &amp; Person Detection</h1>
    <span class="year">Fall 2024 · Course Project</span>
  </div>
  <div class="subtitle">// Real-time detection with YOLOv8</div>
  <div class="proj-meta-row">
    <div class="proj-meta-card">
      <div class="proj-meta-label">Timeline</div>
      <div class="proj-meta-value">Fall 2024</div>
    </div>
    <div class="proj-meta-card">
      <div class="proj-meta-label">Type</div>
      <div class="proj-meta-value">Course Project</div>
    </div>
    <div class="proj-meta-card">
      <div class="proj-meta-label">Role</div>
      <div class="proj-meta-value">Sole researcher</div>
    </div>
    <div class="proj-meta-source">
      <a class="proj-source-link" href="https://github.com/5usan/Face-Detection" target="_blank" rel="noopener">
        ${ICONS.github} /5usan/Face-Detection
      </a>
    </div>
  </div>
  <div class="proj-body">
    <div class="proj-left">
      <div class="proj-intro"><b>The goal —</b> Train and deploy a real-time face and person detector using <strong>YOLOv8</strong>
      on a custom Roboflow dataset, optimized for live webcam inference.</div>
      <div class="proj-section"><span class="proj-section-label">Stack</span></div>
      <div class="chips">
        <span class="chip">YOLOv8</span><span class="chip">OpenCV</span>
        <span class="chip">PyTorch</span><span class="chip">Roboflow</span>
      </div>
    </div>
    <div class="proj-right">
      <div class="proj-section"><span class="proj-section-label">Results</span></div>
      <div class="proj-numbered-list">
        <div class="proj-num-item">
          <span class="proj-num">01</span>
          <p>Trained <strong>YOLOv8</strong> on <strong>1,880</strong> Roboflow images over <strong>120 epochs</strong>.</p>
        </div>
        <div class="proj-num-item">
          <span class="proj-num">02</span>
          <p>Achieved <strong>76.3%</strong> test accuracy and a <strong>74.7%</strong> F1 score.</p>
        </div>
        <div class="proj-num-item">
          <span class="proj-num">03</span>
          <p>Deployed for <strong>live webcam</strong> real-time detection.</p>
        </div>
      </div>
    </div>
  </div>
  `
};

/* ---------- experience/research.md ---------- */
FILES['research.md'] = {
  name: 'research.md', path: 'portfolio/experience/research.md', icon: 'md', iconClass: 'ic-md',
  lang: 'Markdown', render: 'md', git: 'M',
  body: `<div class="rt-root">
  <h1 class="rt-title">Research Experience</h1>
  <p class="rt-tag">// KASTLE Lab — Knowledge and Skill Transfer Laboratory</p>
  <div class="rt-rule"></div>
  <div class="rt-tl">

    <div class="rt-entry">
      <div class="rt-erow">
        <h2 class="rt-role">Graduate Research Assistant</h2>
        <span class="rt-period">Jun 2025 — Present</span>
      </div>
      <p class="rt-org"><b>Wright State University</b> · KASTLE Lab · advised by Cogan Shimizu</p>
      <p class="rt-sub">Dayton, OH</p>
      <ul class="rt-list">
        <li>Architected an <b>ontology chunking framework</b> for RAG pipelines — optimizing context windows and increasing LLM accuracy for natural-language → SPARQL translation.</li>
        <li>Engineered end-to-end <b>NLP pipelines</b> with Python, Neo4j, and Apache Jena to automate semantic enrichment and prepare large scientific metadata repositories for AI consumption.</li>
        <li>Co-developed the <b>Heliophysics Knowledge Network</b> — modular, domain-specific knowledge graphs that serve as a deterministic ground-truth layer for downstream generative AI.</li>
      </ul>
      <div class="rt-tags">
        <span class="rt-chip">Python</span><span class="rt-chip">Neo4j</span><span class="rt-chip">Apache Jena</span><span class="rt-chip">RAG</span><span class="rt-chip">SPARQL</span>
      </div>
    </div>

    <div class="rt-entry">
      <div class="rt-erow">
        <h2 class="rt-role">Graduate Teaching Assistant</h2>
        <span class="rt-period">Aug 2024 — Present</span>
      </div>
      <p class="rt-org"><b>Wright State University</b></p>
      <p class="rt-sub">Dayton, OH</p>
      <ul class="rt-list">
        <li>Supported course instruction, grading, and office hours for graduate <b>Computer Science</b> courses.</li>
      </ul>
      <div class="rt-tags">
        <span class="rt-chip">Teaching</span><span class="rt-chip">Mentoring</span>
      </div>
    </div>

  </div>
</div>`
};

/* ---------- experience/work.md ---------- */
FILES['work.md'] = {
  name: 'work.md', path: 'portfolio/experience/work.md', icon: 'md', iconClass: 'ic-md',
  lang: 'Markdown', render: 'md', git: 'M',
  body: `<div class="rt-root">
  <h1 class="rt-title">Work Experience</h1>
  <p class="rt-tag">// industry roles — research to production</p>
  <div class="rt-rule"></div>
  <div class="rt-tl">

    <div class="rt-entry">
      <div class="rt-erow">
        <h2 class="rt-role">AI Developer</h2>
        <span class="rt-period">Jun 2025 — Present</span>
      </div>
      <p class="rt-org"><b>Wright State University</b></p>
      <p class="rt-sub">Dayton, OH</p>
      <ul class="rt-list">
        <li>Fine-tuned <b>LLaMA 3</b> on custom historical datasets for persona consistency; deployed in a mobile app for real-time conversations with AI historical figures.</li>
        <li>Built <b>voice-cloning solutions</b> with F5-TTS and ElevenLabs to replicate historical voices with high fidelity.</li>
        <li>Produced multi-speaker <b>AI video podcasts</b> integrating Sora frames, WAN 2.0, and ComfyUI pipelines.</li>
      </ul>
      <div class="rt-tags">
        <span class="rt-chip">LLaMA 3</span><span class="rt-chip">F5-TTS</span><span class="rt-chip">ElevenLabs</span><span class="rt-chip">ComfyUI</span>
      </div>
    </div>

    <div class="rt-entry">
      <div class="rt-erow">
        <h2 class="rt-role">Software Engineer</h2>
        <span class="rt-period">Mar 2023 — Aug 2024</span>
      </div>
      <p class="rt-org"><b>Vairav Technology (P) Ltd.</b></p>
      <p class="rt-sub">Kathmandu, Nepal</p>
      <ul class="rt-list">
        <li>Built a <b>Report Engine</b> to automate log analysis and visualization — cut report generation time by 75%.</li>
        <li>Engineered a <b>SOAR platform</b> automating threat detection and response — reduced SOC analyst workload by 40%.</li>
        <li>Integrated <b>GraphQL</b> into the CMS — cut content load time by 35%.</li>
        <li>Partnered with SOC/SIEM teams for deployment and continuous security monitoring.</li>
      </ul>
      <div class="rt-tags">
        <span class="rt-chip">Python</span><span class="rt-chip">GraphQL</span><span class="rt-chip">SOAR</span><span class="rt-chip">Node.js</span>
      </div>
    </div>

    <div class="rt-entry">
      <div class="rt-erow">
        <h2 class="rt-role">Full-Stack Developer</h2>
        <span class="rt-period">Aug 2022 — Mar 2023</span>
      </div>
      <p class="rt-org"><b>Port Pro (P) Ltd.</b></p>
      <p class="rt-sub">Kathmandu, Nepal</p>
      <ul class="rt-list">
        <li>Automated real-time shipping data updates with <b>Puppeteer</b> — boosted engagement by 30%.</li>
        <li>Built <b>RESTful APIs</b> serving dynamic data to 1,000+ concurrent users.</li>
        <li>Resolved critical web issues across 100+ global teams — cut development time by 40%.</li>
      </ul>
      <div class="rt-tags">
        <span class="rt-chip">Puppeteer</span><span class="rt-chip">REST API</span><span class="rt-chip">Node.js</span>
      </div>
    </div>

  </div>
</div>`
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
    { type: 'file', id: 'work.md' },
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
