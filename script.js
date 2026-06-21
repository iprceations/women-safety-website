document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle && navToggle.addEventListener('click', function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    if(!expanded){
      mainNav.style.display = 'block';
    } else {
      mainNav.style.display = 'none';
    }
  });

  // Set current year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form: open user's mail client with form content (simple fallback)
  const form = document.getElementById('contactForm');
  form && form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name || !email || !message){
      alert('Please complete all fields before sending.');
      return;
    }
    const to = 'support@example.com'; // replace
    const subject = encodeURIComponent('Contact from Women Safety website');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
});
