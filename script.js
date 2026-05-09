/* ============================================
   TYPING EFFECT
   ============================================ */
const roles = [
  'Desenvolvedor Full-Stack Junior',
  'Apaixonado por Tecnologia',
  'Criador de Soluções Web'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById('typing');

function typeRole() {
  const current = roles[roleIndex];
  
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingEl.innerHTML = current.substring(0, charIndex) + '<span class="cursor">|</span>';

  let speed = isDeleting ? 30 : 60;

  if (!isDeleting && charIndex === current.length) {
    speed = 2000; // pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 500; // pause before next word
  }

  setTimeout(typeRole, speed);
}

typeRole();

/* ============================================
   NAVBAR SCROLL EFFECT
   ============================================ */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

/* ============================================
   MOBILE MENU
   ============================================ */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

/* ============================================
   SCROLL REVEAL
   ============================================ */
const revealElements = document.querySelectorAll(
  '.skill-card, .project-card, .contact-item, .about-text, .about-stats, .stat, .softskill-card, .timeline-item, .education-title'
);

revealElements.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

revealElements.forEach(el => observer.observe(el));

/* ============================================
   ACTIVE NAV LINK ON SCROLL
   ============================================ */
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
});

/* ============================================
   SMOOTH SCROLL OFFSET
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
