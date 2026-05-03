// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Scroll-reveal (IntersectionObserver)
const revealEls = document.querySelectorAll('.fade-in, .fade-in-right');
const observer  = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach(el => observer.observe(el));

// Floating particles in hero
const container = document.getElementById('particles');
const PARTICLE_COUNT = 30;

for (let i = 0; i < PARTICLE_COUNT; i++) {
  const p   = document.createElement('div');
  p.className = 'particle';
  const size     = Math.random() * 8 + 3;
  const duration = Math.random() * 12 + 8;
  const delay    = Math.random() * 10;
  const left     = Math.random() * 100;
  p.style.cssText = `
    width:${size}px;
    height:${size}px;
    left:${left}%;
    animation-duration:${duration}s;
    animation-delay:${delay}s;
    opacity:${Math.random() * 0.6 + 0.2};
  `;
  container.appendChild(p);
}
