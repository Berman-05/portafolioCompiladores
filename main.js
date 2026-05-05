
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

const fechaEl = document.getElementById('fecha');
if (fechaEl) {
  fechaEl.textContent = new Date().toLocaleDateString('es-GT', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.08, rootMargin: '0px 0px -36px 0px' });

revealEls.forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 0.07 + 's';
  revealObserver.observe(el);
});

const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 90) current = sec.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
  });
});


