/* =================================================
   EMRE OUTLET — main.js
   Global interactivity: navbar, scroll, particles,
   counters, mobile menu, reveal animations
   ================================================= */

// ── Navbar scroll effect ──────────────────────────
const navbar = document.getElementById('navbar');
if (navbar && !navbar.classList.contains('scrolled')) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ── Mobile Menu ───────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  // close on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

// ── Scroll Reveal (Intersection Observer) ─────────
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObserver.observe(el));
}

// ── Hero Particles ────────────────────────────────
function createParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;
  const count = 30;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = (40 + Math.random() * 60) + '%';
    p.style.setProperty('--duration', (4 + Math.random() * 8) + 's');
    p.style.setProperty('--delay', (Math.random() * 6) + 's');
    p.style.width = p.style.height = (1 + Math.random() * 2.5) + 'px';
    container.appendChild(p);
  }
}
createParticles();

// ── Animated Counters ─────────────────────────────
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  if (!target) return;
  const duration = 1800;
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}

const counterEls = document.querySelectorAll('.counter-num[data-target]');
if (counterEls.length) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counterEls.forEach(el => counterObserver.observe(el));
}

// ── Smooth Page Transitions ───────────────────────
document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  if (!href || href.startsWith('http') || href.startsWith('#') ||
      href.startsWith('tel') || href.startsWith('mailto') || href.includes('wa.me')) return;
  link.addEventListener('click', (e) => {
    const target = link.href;
    if (target && target !== window.location.href) {
      e.preventDefault();
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.25s ease';
      setTimeout(() => { window.location.href = target; }, 260);
    }
  });
});

// Fade in on load
document.body.style.opacity = '0';
window.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => {
    document.body.style.transition = 'opacity 0.4s ease';
    document.body.style.opacity = '1';
  });
});

// ── Active nav link ───────────────────────────────
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  } else {
    a.classList.remove('active');
  }
});
