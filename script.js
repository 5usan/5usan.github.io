const sections = ['about', 'projects', 'experience', 'contact'];
const MOBILE_BREAKPOINT = 860;

const tabs = Array.from(document.querySelectorAll('.tab'));
const explorerItems = Array.from(document.querySelectorAll('.file-item'));
const activityIcons = Array.from(document.querySelectorAll('.activity-icon'));
const panels = Array.from(document.querySelectorAll('.panel'));
const activeFile = document.getElementById('active-file');
const yearTarget = document.getElementById('year');
const clockTarget = document.getElementById('clock');
const sidebarToggle = document.getElementById('sidebar-toggle');
const explorer = document.getElementById('explorer');
const fileExtensions = {
  about: 'md',
  projects: 'json',
  experience: 'log',
  contact: 'yml'
};

function setActiveSection(target) {
  if (!sections.includes(target)) return;

  tabs.forEach((tab) => {
    const isActive = tab.dataset.target === target;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
  });

  explorerItems.forEach((item) => {
    item.classList.toggle('active', item.dataset.target === target);
  });

  activityIcons.forEach((icon) => {
    icon.classList.toggle('active', icon.dataset.target === target);
  });

  panels.forEach((panel) => {
    const isActive = panel.id === `panel-${target}`;
    panel.classList.toggle('active', isActive);
    panel.hidden = !isActive;
  });

  if (activeFile) {
    activeFile.textContent = `${target}.${fileExtensions[target] || 'md'}`;
  }
}

function bindNavigation(buttons) {
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      setActiveSection(button.dataset.target || 'about');
      if (window.innerWidth <= MOBILE_BREAKPOINT && explorer) {
        explorer.classList.remove('open');
      }
    });
  });
}

bindNavigation(tabs);
bindNavigation(explorerItems);
bindNavigation(activityIcons);

function handleTabKeyNavigation(event) {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;

  const currentIndex = tabs.findIndex((tab) => tab.classList.contains('active'));
  if (currentIndex === -1) return;

  let nextIndex = currentIndex;
  if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % tabs.length;
  if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
  if (event.key === 'Home') nextIndex = 0;
  if (event.key === 'End') nextIndex = tabs.length - 1;

  const nextTab = tabs[nextIndex];
  if (!nextTab) return;

  setActiveSection(nextTab.dataset.target || 'about');
  nextTab.focus();
  event.preventDefault();
}

tabs.forEach((tab) => tab.addEventListener('keydown', handleTabKeyNavigation));

function setSidebarState(isExpanded) {
  if (!explorer || !sidebarToggle) return;

  sidebarToggle.setAttribute('aria-expanded', String(isExpanded));
  if (window.innerWidth <= MOBILE_BREAKPOINT) {
    explorer.classList.toggle('open', isExpanded);
    explorer.classList.toggle('collapsed', !isExpanded);
  } else {
    explorer.classList.toggle('collapsed', !isExpanded);
    explorer.classList.remove('open');
  }
}

sidebarToggle?.addEventListener('click', () => {
  const expanded = sidebarToggle.getAttribute('aria-expanded') === 'true';
  setSidebarState(!expanded);
});

function updateClock() {
  if (!clockTarget) return;
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  clockTarget.textContent = `${hours}:${minutes}`;
}

let minuteTimer;
function startMinuteClock() {
  updateClock();
  clearTimeout(minuteTimer);

  const now = new Date();
  const delayToNextMinute = ((60 - now.getSeconds()) * 1000) - now.getMilliseconds();
  minuteTimer = setTimeout(() => {
    updateClock();
    minuteTimer = setInterval(updateClock, 60000);
  }, Math.max(delayToNextMinute, 0));
}

window.addEventListener('resize', () => {
  const expanded = sidebarToggle?.getAttribute('aria-expanded') === 'true';
  setSidebarState(expanded);
});

if (yearTarget) yearTarget.textContent = new Date().getFullYear();
startMinuteClock();
setActiveSection('about');
setSidebarState(window.innerWidth > MOBILE_BREAKPOINT);
