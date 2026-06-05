/* ============================================================
   App logic: explorer, tabs, command palette, terminal,
   status bar, theme switching
   ============================================================ */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- state ---------- */
  const state = {
    openTabs: [],           // array of file ids
    active: null,           // active file id
    selectedTree: null,
    theme: localStorage.getItem('ss-theme') || 'dark',
    panelOpen: true,
    previewTab: null,       // single-click preview tab (italic)
  };

  const THEME_LABEL = { dark: 'Dark+ (default dark)', onedark: 'One Dark Pro', monokai: 'Monokai' };
  const THEME_ORDER = ['dark', 'onedark', 'monokai'];

  function applyTheme(t) {
    state.theme = t;
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('ss-theme', t);
    const lbl = $('#sb-theme-label');
    if (lbl) lbl.textContent = THEME_LABEL[t];
  }

  /* ============================================================
     Explorer rendering
     ============================================================ */
  function fileIcon(f) {
    return `<span class="ficon ${f.iconClass}">${ICONS[f.icon]}</span>`;
  }

  function renderTree() {
    const root = $('#tree');
    root.innerHTML = '';
    TREE.forEach(node => renderNode(node, root, 1));
  }

  function renderNode(node, container, depth) {
    if (node.type === 'folder') {
      const row = document.createElement('div');
      row.className = 'tree-row';
      row.style.paddingLeft = (depth * 8) + 'px';
      row.innerHTML =
        `<span class="chevron">${node.open ? ICONS.chevronD : ICONS.chevronR}</span>` +
        `<span class="ficon ic-folder">${node.open ? ICONS.folderOpen : ICONS.folder}</span>` +
        `<span class="label">${node.name}</span>`;
      row.addEventListener('click', () => { node.open = !node.open; renderTree(); });
      container.appendChild(row);
      if (node.open) node.children.forEach(c => renderNode(c, container, depth + 1));
    } else {
      const f = FILES[node.id];
      const row = document.createElement('div');
      row.className = 'tree-row' + (state.selectedTree === node.id ? ' selected' : '');
      row.style.paddingLeft = (depth * 8 + 4) + 'px';
      row.dataset.id = node.id;
      row.innerHTML =
        `<span class="chevron hidden"></span>` +
        fileIcon(f) +
        `<span class="label" style="${f.git ? '' : ''}color:${f.git === 'U' ? 'var(--git-U,#73c991)' : 'inherit'}">${f.name}</span>` +
        (f.git ? `<span class="git-mark git-${f.git}">${f.git}</span>` : '');
      row.addEventListener('click', () => openFile(node.id, false));
      row.addEventListener('dblclick', () => openFile(node.id, true));
      container.appendChild(row);
    }
  }

  /* ============================================================
     Tabs + editor
     ============================================================ */
  function openFile(id, pin) {
    if (!FILES[id]) return;
    state.selectedTree = id;
    if (!state.openTabs.includes(id)) {
      // replace preview tab if exists and not pinning
      if (state.previewTab && !pin && state.openTabs.includes(state.previewTab)) {
        const idx = state.openTabs.indexOf(state.previewTab);
        state.openTabs.splice(idx, 1, id);
      } else {
        state.openTabs.push(id);
      }
      state.previewTab = pin ? null : id;
    } else if (pin && state.previewTab === id) {
      state.previewTab = null;
    }
    state.active = id;
    render();
    $('.editor-scroll')?.scrollTo(0, 0);
  }

  function closeTab(id, e) {
    if (e) e.stopPropagation();
    const idx = state.openTabs.indexOf(id);
    if (idx === -1) return;
    state.openTabs.splice(idx, 1);
    if (state.previewTab === id) state.previewTab = null;
    if (state.active === id) {
      state.active = state.openTabs[idx] || state.openTabs[idx - 1] || state.openTabs[state.openTabs.length - 1] || null;
      state.selectedTree = state.active;
    }
    render();
  }

  function renderTabs() {
    const bar = $('#tabbar');
    bar.innerHTML = '';
    state.openTabs.forEach(id => {
      const f = FILES[id];
      const tab = document.createElement('div');
      tab.className = 'tab' + (state.active === id ? ' active' : '');
      tab.dataset.id = id;
      const preview = state.previewTab === id ? ' preview' : '';
      tab.innerHTML =
        fileIcon(f) +
        `<span class="label${preview}">${f.name}</span>` +
        `<span class="close">${ICONS.close}</span>`;
      tab.addEventListener('click', () => { state.active = id; state.selectedTree = id; render(); });
      tab.addEventListener('dblclick', () => { state.previewTab = null; render(); });
      $('.close', tab).addEventListener('click', (e) => closeTab(id, e));
      // middle-click close
      tab.addEventListener('auxclick', (e) => { if (e.button === 1) closeTab(id, e); });
      bar.appendChild(tab);
    });
  }

  function renderBreadcrumb() {
    const bc = $('#breadcrumb');
    if (!state.active) { bc.innerHTML = ''; return; }
    const f = FILES[state.active];
    const parts = f.path.split('/');
    bc.innerHTML = parts.map((p, i) => {
      const isLast = i === parts.length - 1;
      const icon = isLast ? fileIcon(f) : `<span class="ficon ic-folder">${ICONS.folder}</span>`;
      return `<span class="crumb">${i === 0 ? '' : ''}${i === parts.length - 1 ? icon : (i === 0 ? '' : icon)}<span>${p}</span></span>` +
             (isLast ? '' : `<span class="sep">${ICONS.chevronR}</span>`);
    }).join('');
  }

  function renderEditor() {
    const host = $('#editor-scroll');
    if (!state.active) {
      host.innerHTML = `<div class="empty-editor">Select a file from the explorer · ⌘P to search</div>`;
      return;
    }
    const f = FILES[state.active];
    if (f.render === 'md') {
      host.innerHTML = `<div class="md-view">${f.body}</div>`;
    } else {
      const nLines = f.lines || (f.body.split('\n').length);
      host.innerHTML =
        `<div class="code-view">
           <div class="gutter">${gutter(nLines)}</div>
           <div class="code-body">${f.body}</div>
         </div>`;
    }
  }

  function renderStatus() {
    if (!state.active) return;
    const f = FILES[state.active];
    $('#sb-lang').textContent = f.lang;
    const isMd = f.render === 'md';
    $('#sb-spaces').textContent = isMd ? 'Spaces: 2' : 'Spaces: 2';
    $('#sb-enc').textContent = 'UTF-8';
    $('#sb-eol').textContent = 'LF';
  }

  function render() {
    renderTree();
    renderTabs();
    renderBreadcrumb();
    renderEditor();
    renderStatus();
    // re-bind contact-card links so SPA clicks work (they're plain anchors, fine)
  }

  /* ============================================================
     Command palette
     ============================================================ */
  const palette = {
    el: null, input: null, list: null, items: [], active: 0, mode: 'files',
  };

  function buildPaletteItems(query) {
    const q = query.toLowerCase().replace(/^>/, '').trim();
    const isCmd = query.startsWith('>');
    let items = [];
    if (isCmd) {
      const cmds = [
        { label: 'Change Color Theme', sub: '⌘K ⌘T', action: cycleTheme, icon: 'settings' },
        { label: 'Theme: Dark+ (default dark)', sub: 'theme', action: () => applyTheme('dark'), icon: 'settings' },
        { label: 'Theme: One Dark Pro', sub: 'theme', action: () => applyTheme('onedark'), icon: 'settings' },
        { label: 'Theme: Monokai', sub: 'theme', action: () => applyTheme('monokai'), icon: 'settings' },
        { label: 'Toggle Integrated Terminal', sub: '⌃`', action: togglePanel, icon: 'terminal' },
        { label: 'View: Close All Editors', sub: '', action: () => { state.openTabs = []; state.active = null; render(); }, icon: 'close' },
        { label: 'Run: hire-me', sub: 'easter egg', action: () => { openTerminalCmd('hire-me'); }, icon: 'run' },
      ];
      items = cmds.filter(c => !q || c.label.toLowerCase().includes(q));
    } else {
      // file search
      items = Object.keys(FILES)
        .filter(id => !q || FILES[id].name.toLowerCase().includes(q) || FILES[id].path.toLowerCase().includes(q))
        .map(id => ({
          label: FILES[id].name, sub: FILES[id].path.replace('portfolio/', '').replace('/' + FILES[id].name, '') || 'portfolio',
          action: () => openFile(id, true), icon: FILES[id].icon, iconClass: FILES[id].iconClass, query: q,
        }));
    }
    return items;
  }

  function openPalette(prefill = '') {
    palette.el.classList.add('open');
    palette.input.value = prefill;
    palette.input.focus();
    palette.input.setSelectionRange(prefill.length, prefill.length);
    updatePalette();
  }
  function closePalette() { palette.el.classList.remove('open'); }

  function highlight(text, q) {
    if (!q) return text;
    const i = text.toLowerCase().indexOf(q);
    if (i === -1) return text;
    return text.slice(0, i) + `<span class="hl">${text.slice(i, i + q.length)}</span>` + text.slice(i + q.length);
  }

  function updatePalette() {
    const val = palette.input.value;
    palette.items = buildPaletteItems(val);
    palette.active = 0;
    const q = val.toLowerCase().replace(/^>/, '').trim();
    palette.list.innerHTML = '';
    if (!palette.items.length) {
      palette.list.innerHTML = `<div class="palette-item" style="color:#8a8a8a">No matching results</div>`;
      return;
    }
    palette.items.forEach((it, i) => {
      const div = document.createElement('div');
      div.className = 'palette-item' + (i === 0 ? ' active' : '');
      const ic = it.icon && ICONS[it.icon] ? `<span class="ficon ${it.iconClass || ''}">${ICONS[it.icon]}</span>` : '';
      div.innerHTML = ic + `<span>${highlight(it.label, q)}</span>` + (it.sub ? `<span class="sub">${it.sub}</span>` : '');
      div.addEventListener('click', () => { it.action(); closePalette(); });
      div.addEventListener('mousemove', () => setActiveItem(i));
      palette.list.appendChild(div);
    });
  }

  function setActiveItem(i) {
    palette.active = i;
    $$('.palette-item', palette.list).forEach((el, idx) => el.classList.toggle('active', idx === i));
  }

  function paletteKey(e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveItem(Math.min(palette.active + 1, palette.items.length - 1)); ensureVisible(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActiveItem(Math.max(palette.active - 1, 0)); ensureVisible(); }
    else if (e.key === 'Enter') { e.preventDefault(); const it = palette.items[palette.active]; if (it) { it.action(); closePalette(); } }
    else if (e.key === 'Escape') { closePalette(); }
  }
  function ensureVisible() {
    const el = $$('.palette-item', palette.list)[palette.active];
    if (el) el.scrollIntoView({ block: 'nearest' });
  }

  function cycleTheme() {
    const i = THEME_ORDER.indexOf(state.theme);
    applyTheme(THEME_ORDER[(i + 1) % THEME_ORDER.length]);
    toast(`Color theme: ${THEME_LABEL[state.theme]}`);
  }

  /* ============================================================
     Terminal
     ============================================================ */
  const term = { el: null, history: [], hidx: 0 };

  const TERM_HELP = [
    ['help', 'show this list'],
    ['about', 'who is Susan?'],
    ['projects', 'list research & engineering projects'],
    ['skills', 'print the tech stack'],
    ['experience', 'work history'],
    ['education', 'degrees'],
    ['contact / email', 'how to reach me'],
    ['open <file>', 'open a file in the editor'],
    ['theme <name>', 'dark · onedark · monokai'],
    ['hire-me', '🎉 the important one'],
    ['sudo', 'try it'],
    ['clear', 'clear the terminal'],
  ];

  function termWrite(html, cls = '') {
    const div = document.createElement('div');
    div.className = 'line ' + cls;
    div.innerHTML = html;
    // insert before the input prompt line
    term.el.insertBefore(div, $('#term-prompt-line'));
    scrollTermBottom();
  }
  function scrollTermBottom() { term.el.scrollTop = term.el.scrollHeight; }

  function termPrompt(cmdEcho) {
    termWrite(`<span class="term-green">susan@portfolio</span><span class="term-dim">:</span><span class="term-blue">~/portfolio</span><span class="term-dim">$</span> ${cmdEcho}`);
  }

  function runCommand(raw) {
    const cmd = raw.trim();
    if (cmd) { term.history.push(cmd); term.hidx = term.history.length; }
    termPrompt(escapeHtml(cmd));
    const [base, ...rest] = cmd.split(/\s+/);
    const arg = rest.join(' ').toLowerCase();
    switch ((base || '').toLowerCase()) {
      case '': break;
      case 'help': case 'h': case '?':
        termWrite('<span class="term-cyan">Available commands:</span>');
        TERM_HELP.forEach(([c, d]) => termWrite(`  <span class="term-yellow">${c.padEnd(16)}</span><span class="term-dim">${d}</span>`));
        break;
      case 'about': case 'whoami':
        termWrite(`<span class="term-accent">Susan Shrestha</span> — AI/ML researcher, M.S. Computer Science @ Wright State (KASTLE Lab).`);
        termWrite(`Building <span class="term-cyan">knowledge-grounded AI</span>: GraphRAG, knowledge graphs, LLM fine-tuning.`);
        termWrite(`Type <span class="term-yellow">open README.md</span> for the full story.`);
        break;
      case 'projects': case 'ls':
        ['graphrag.md','multimodal-rag.md','roal-ontology.md','federated-llm.md','yolo-detection.md'].forEach(id =>
          termWrite(`  <span class="term-cyan">📄</span> <span class="term-link" data-open="${id}">${id}</span>`));
        bindTermLinks();
        break;
      case 'skills':
        termWrite(`<span class="term-cyan">languages   </span> Python · JS/TS · SQL · C# · HTML/CSS`);
        termWrite(`<span class="term-cyan">ai/ml       </span> PyTorch · Transformers · HF · YOLO · OpenCV`);
        termWrite(`<span class="term-cyan">llms & rag  </span> GraphRAG · Multimodal RAG · LoRA · LLaMA 3 · LLaVA`);
        termWrite(`<span class="term-cyan">knowledge   </span> RDF/OWL · SPARQL · Protégé · Apache Jena`);
        termWrite(`<span class="term-cyan">systems     </span> CUDA · SLURM · Singularity · Docker · AWS`);
        termWrite(`<span class="term-dim">→ open skills.ts for the full typed object</span>`);
        break;
      case 'experience': case 'work':
        termWrite(`<span class="term-yellow">AI Developer</span> · Wright State <span class="term-dim">(Jun 2025 – Present)</span>`);
        termWrite(`<span class="term-yellow">Software Engineer</span> · Vairav Technology <span class="term-dim">(Mar 2023 – Aug 2024)</span>`);
        termWrite(`<span class="term-yellow">Full-Stack Developer</span> · Port Pro <span class="term-dim">(Aug 2022 – Mar 2023)</span>`);
        termWrite(`<span class="term-dim">→ open experience/work.json</span>`);
        break;
      case 'education': case 'edu':
        termWrite(`🎓 <span class="term-cyan">M.S. Computer Science</span> — Wright State University <span class="term-dim">(Dec 2026)</span>`);
        termWrite(`🎓 <span class="term-cyan">B.Sc. CSIT</span> — Tribhuvan University <span class="term-dim">(2022)</span>`);
        break;
      case 'contact': case 'email':
        termWrite(`<span class="term-cyan">email   </span> <a class="term-link" href="mailto:susanshrestha2056@gmail.com">susanshrestha2056@gmail.com</a>`);
        termWrite(`<span class="term-cyan">phone   </span> (937) 422-5518`);
        termWrite(`<span class="term-cyan">linkedin</span> <a class="term-link" href="https://linkedin.com/in/5usan" target="_blank">linkedin.com/in/5usan</a>`);
        termWrite(`<span class="term-cyan">github  </span> <a class="term-link" href="https://github.com/5usan" target="_blank">github.com/5usan</a>`);
        break;
      case 'open': case 'cat': case 'code': {
        const target = Object.keys(FILES).find(id => id.toLowerCase() === arg || FILES[id].name.toLowerCase() === arg);
        if (target) { openFile(target, true); termWrite(`<span class="term-green">✓</span> opened <span class="term-yellow">${FILES[target].name}</span> in the editor`); }
        else termWrite(`<span style="color:#f48771">open: '${escapeHtml(arg)}' — no such file. try </span><span class="term-yellow">projects</span>`);
        break;
      }
      case 'theme': {
        if (['dark','onedark','monokai'].includes(arg)) { applyTheme(arg); termWrite(`<span class="term-green">✓</span> theme → ${THEME_LABEL[arg]}`); }
        else termWrite(`<span class="term-dim">usage: theme [dark | onedark | monokai]</span>`);
        break;
      }
      case 'hire-me': case 'hireme':
        termWrite(`<span class="term-green">$ npm install susan-shrestha --save</span>`);
        setTimeout(() => termWrite(`<span class="term-dim">resolving dependencies...</span>`), 150);
        setTimeout(() => termWrite(`<span class="term-dim">  ✓ python  ✓ pytorch  ✓ curiosity  ✓ good-vibes</span>`), 450);
        setTimeout(() => termWrite(`<span class="term-green">+ susan-shrestha@2026.0.0</span> <span class="term-dim">added in 0.42s</span>`), 800);
        setTimeout(() => { termWrite(`🎉 <span class="term-accent">Great choice!</span> Reach out → <a class="term-link" href="mailto:susanshrestha2056@gmail.com">susanshrestha2056@gmail.com</a>`); }, 1100);
        break;
      case 'sudo':
        termWrite(`<span style="color:#f48771">susan is not in the sudoers file. This incident will be reported.</span> 😏`);
        break;
      case 'clear': case 'cls':
        $$('.line', term.el).forEach(l => { if (l.id !== 'term-prompt-line') l.remove(); });
        break;
      case 'echo':
        termWrite(escapeHtml(rest.join(' ')));
        break;
      case 'pwd':
        termWrite('/home/susan/portfolio');
        break;
      case 'date':
        termWrite(new Date().toString());
        break;
      case 'coffee': case 'make':
        termWrite(`<span class="term-dim">brewing</span> ☕ <span class="term-dim">... I/O error: insufficient caffeine. Refill required.</span>`);
        break;
      default:
        termWrite(`<span style="color:#f48771">command not found: ${escapeHtml(base)}</span> — type <span class="term-yellow">help</span>`);
    }
  }

  function bindTermLinks() {
    $$('.term-link[data-open]', term.el).forEach(a => {
      if (a._bound) return; a._bound = true;
      a.addEventListener('click', () => openFile(a.dataset.open, true));
    });
  }

  function openTerminalCmd(cmd) {
    if (!state.panelOpen) togglePanel();
    runCommand(cmd);
    $('#term-input').focus();
  }

  function escapeHtml(s) { return (s || '').replace(/[&<>"]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[c])); }

  /* ============================================================
     Panel toggle
     ============================================================ */
  function togglePanel() {
    state.panelOpen = !state.panelOpen;
    $('#panel').classList.toggle('collapsed', !state.panelOpen);
    if (state.panelOpen) setTimeout(() => $('#term-input').focus(), 0);
  }

  /* ============================================================
     Toast
     ============================================================ */
  let toastTimer;
  function toast(msg) {
    let t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
  }

  /* ============================================================
     Status bar clock + problems
     ============================================================ */
  function tickClock() {
    const el = $('#sb-clock');
    if (el) {
      const d = new Date();
      el.textContent = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  }

  /* ============================================================
     Init
     ============================================================ */
  function init() {
    applyTheme(state.theme);
    palette.el = $('#palette-overlay');
    palette.input = $('#palette-input');
    palette.list = $('#palette-list');
    term.el = $('#terminal');

    // explorer activity bar items
    $$('.act-item[data-view]').forEach(it => {
      it.addEventListener('click', () => {
        $$('.act-item[data-view]').forEach(x => x.classList.remove('active'));
        it.classList.add('active');
        const v = it.dataset.view;
        $('#sidebar-title').textContent = v.toUpperCase();
        // simple: only explorer has content; others toast
        if (v !== 'explorer') { toast(`The ${v} panel is just for show 😄 — everything lives in Explorer`); }
      });
    });

    // open default
    openFile('README.md', true);

    // palette triggers
    palette.input.addEventListener('input', updatePalette);
    palette.input.addEventListener('keydown', paletteKey);
    palette.el.addEventListener('mousedown', (e) => { if (e.target === palette.el) closePalette(); });

    // terminal input
    const ti = $('#term-input');
    ti.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { runCommand(ti.value); ti.value = ''; }
      else if (e.key === 'ArrowUp') { e.preventDefault(); if (term.hidx > 0) { term.hidx--; ti.value = term.history[term.hidx] || ''; } }
      else if (e.key === 'ArrowDown') { e.preventDefault(); if (term.hidx < term.history.length - 1) { term.hidx++; ti.value = term.history[term.hidx] || ''; } else { term.hidx = term.history.length; ti.value = ''; } }
      else if (e.key === 'l' && e.ctrlKey) { e.preventDefault(); runCommand('clear'); }
    });
    $('#terminal').addEventListener('click', (e) => { if (!e.target.closest('a') && !e.target.closest('.term-link')) ti.focus(); });

    // panel tabs (just terminal active; others toast)
    $$('.panel-tab').forEach(pt => pt.addEventListener('click', () => {
      $$('.panel-tab').forEach(x => x.classList.remove('active'));
      pt.classList.add('active');
      if (pt.dataset.panel !== 'terminal') toast(`'${pt.textContent.trim()}' is decorative — the Terminal is the fun one`);
    }));

    // panel actions
    $('#panel-close')?.addEventListener('click', togglePanel);
    $('#panel-trash')?.addEventListener('click', () => runCommand('clear'));

    // status bar interactions
    $('#sb-theme')?.addEventListener('click', cycleTheme);
    $('#sb-terminal')?.addEventListener('click', togglePanel);
    $('#sb-branch')?.addEventListener('click', () => toast('main · synced with origin · 0 changes to push'));
    $('#sb-problems')?.addEventListener('click', () => { openTerminalCmd('help'); });
    $('#sb-bell')?.addEventListener('click', () => toast('🔔 No notifications. Inbox zero — for once.'));
    $('#sb-feedback')?.addEventListener('click', () => openFile('contact.md', true));

    // titlebar menu easter eggs
    $$('.titlebar-menu span').forEach(s => s.addEventListener('click', () => {
      const t = s.textContent.trim();
      if (t === 'Go') openPalette();
      else if (t === 'Terminal') togglePanel();
      else if (t === 'Help') openTerminalCmd('help');
      else toast(`'${t}' menu — type ⌘P to navigate instead`);
    }));

    // sidebar collapse-all (decorative)
    $('#explorer-newfile')?.addEventListener('click', () => toast("Nice try — this portfolio is read-only 😄"));

    // global keyboard
    document.addEventListener('keydown', (e) => {
      const mod = e.metaKey || e.ctrlKey;
      if (mod && (e.key === 'p' || e.key === 'P') && !e.shiftKey) { e.preventDefault(); openPalette(''); }
      else if (mod && e.shiftKey && (e.key === 'p' || e.key === 'P')) { e.preventDefault(); openPalette('>'); }
      else if (e.key === '`' && e.ctrlKey) { e.preventDefault(); togglePanel(); }
      else if (mod && (e.key === 'k' || e.key === 'K')) {
        // wait for chord 't'
        const once = (ev) => { if (ev.key === 't' || ev.key === 'T') { ev.preventDefault(); cycleTheme(); } document.removeEventListener('keydown', once, true); };
        document.addEventListener('keydown', once, true);
      }
    });

    // clock
    tickClock(); setInterval(tickClock, 10000);

    // terminal welcome
    termWrite(`<span class="term-dim">Susan Shrestha — portfolio shell · type </span><span class="term-yellow">help</span><span class="term-dim"> to begin · try </span><span class="term-yellow">hire-me</span> 🎉`);

    render();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
