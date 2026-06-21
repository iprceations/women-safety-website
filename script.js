// small JS: nav toggle, accordion, contact mailto, year
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle && navToggle.addEventListener('click', function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    if(mainNav.style.display === 'block') mainNav.style.display = 'none'; else mainNav.style.display = 'block';
  });

  // Accordion
  document.querySelectorAll('.acc-btn').forEach(btn => {
    btn.addEventListener('click', function(){
      const panel = this.nextElementSibling;
      const open = panel.style.display === 'block';
      document.querySelectorAll('.acc-panel').forEach(p => p.style.display = 'none');
      document.querySelectorAll('.acc-btn span').forEach(s => s.textContent = '+');
      if(!open){ panel.style.display = 'block'; this.querySelector('span').textContent = '-'; }
    });
  });

  // Contact form -> mailto fallback
  const form = document.getElementById('contactForm');
  form && form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = encodeURIComponent(document.getElementById('name').value.trim());
    const email = encodeURIComponent(document.getElementById('email').value.trim());
    const message = encodeURIComponent(document.getElementById('message').value.trim());
    if(!name || !email || !message){ alert('Please complete all fields.'); return; }
    const to = 'support@womensafety.com';
    const subject = encodeURIComponent('Contact from Women Safety website');
    const body = encodeURIComponent(`Name: ${decodeURIComponent(name)}\nEmail: ${decodeURIComponent(email)}\n\nMessage:\n${decodeURIComponent(message)}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });

  // Year
  const yearEl = document.getElementById('year'); if(yearEl) yearEl.textContent = new Date().getFullYear();
});
