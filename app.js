// Init AOS animations
if (window.AOS) AOS.init({ duration: 700, once: true });

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => {
  const open = menu.style.display === 'flex';
  menu.style.display = open ? 'none' : 'flex';
});

// Active link on scroll
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');
const setActive = () => {
  let current = 'home';
  const scrollY = window.pageYOffset + 120;
  sections.forEach(sec => {
    const top = sec.offsetTop, bottom = top + sec.offsetHeight;
    if (scrollY >= top && scrollY < bottom) current = sec.id;
  });
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
};
window.addEventListener('scroll', setActive);
setActive();

// Smooth anchor
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
  });
});

// Contact form (demo only)
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  form.reset();
  if(note){ note.hidden = false; setTimeout(()=> note.hidden = true, 4000); }
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

