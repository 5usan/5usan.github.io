const phrases = [
  'Building intelligent backend systems 🚀',
  'Turning data into decisions 🧠',
  'Exploring LLM and GraphRAG pipelines 🤖',
  'Always learning, always shipping ✨'
];

const typingTarget = document.getElementById('typing-text');
const TYPING_DELAY_MS = 70;
const DELETE_DELAY_MS = 40;
// 0.16 (~16% visibility) was chosen via visual tuning for balanced reveal timing on desktop and mobile.
const REVEAL_THRESHOLD = 0.16;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  if (!typingTarget) return;

  const phrase = phrases[phraseIndex];
  if (!deleting) {
    charIndex += 1;
    typingTarget.textContent = `${phrase.slice(0, charIndex)}|`;
    if (charIndex === phrase.length) {
      deleting = true;
      setTimeout(type, 1100);
      return;
    }
  } else {
    charIndex -= 1;
    typingTarget.textContent = `${phrase.slice(0, charIndex)}|`;
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(type, deleting ? DELETE_DELAY_MS : TYPING_DELAY_MS);
}

if (!prefersReducedMotion) {
  type();
} else if (typingTarget) {
  typingTarget.textContent = phrases[0];
}

if (!prefersReducedMotion) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: REVEAL_THRESHOLD });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
}

const topButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (!topButton) return;
  topButton.classList.toggle('show', window.scrollY > 350);
});

topButton?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
});

const yearTarget = document.getElementById('year');
if (yearTarget) yearTarget.textContent = new Date().getFullYear();

const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  navLinks?.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
  });
});
