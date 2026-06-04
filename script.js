const phrases = [
  'Building intelligent backend systems 🚀',
  'Turning data into decisions 🧠',
  'Exploring LLM and GraphRAG pipelines 🤖',
  'Always learning, always shipping ✨'
];

const typingTarget = document.getElementById('typing-text');
const TYPING_SPEED_ADD = 70;
const TYPING_SPEED_DELETE = 40;
const REVEAL_THRESHOLD = 0.16;
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

  setTimeout(type, deleting ? TYPING_SPEED_DELETE : TYPING_SPEED_ADD);
}

type();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
// Trigger slightly before full visibility so animations feel responsive while scrolling.
}, { threshold: REVEAL_THRESHOLD });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const topButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (!topButton) return;
  topButton.classList.toggle('show', window.scrollY > 350);
});

topButton?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
