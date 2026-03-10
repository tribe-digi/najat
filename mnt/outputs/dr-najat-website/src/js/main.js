/* ============================================================
   Dr Najat Amharar — Main JS
   ============================================================ */

// --- Sticky header ------------------------------------------
const header = document.querySelector('.site-header');
if (header) {
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// --- Mobile nav ---------------------------------------------
const hamburger = document.querySelector('.nav__hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const closeBtn  = document.querySelector('.mobile-nav__close');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
}
if (closeBtn && mobileNav) {
  closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  });
}

// Close mobile nav on link click
document.querySelectorAll('.mobile-nav a').forEach(a => {
  a.addEventListener('click', () => {
    mobileNav && mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// --- Active nav link ----------------------------------------
const currentPage = window.location.pathname.split('/').filter(Boolean).pop() || 'index.html';
document.querySelectorAll('.nav__links a, .mobile-nav a').forEach(a => {
  const href = a.getAttribute('href') || '';
  const linkPage = href.split('/').filter(Boolean).pop() || 'index.html';
  if (linkPage === currentPage) a.classList.add('active');
});

// --- Scroll-reveal with IntersectionObserver ---------------
const revealEls = document.querySelectorAll('[data-reveal]');
if (revealEls.length && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    revealObserver.observe(el);
  });
}

// Style for revealed elements
document.head.insertAdjacentHTML('beforeend', `
  <style>
    [data-reveal].revealed {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  </style>
`);

// --- Contact form submission --------------------------------
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;

    try {
      const data = new FormData(contactForm);
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString()
      });

      if (res.ok) {
        contactForm.innerHTML = `
          <div style="text-align:center;padding:40px 20px;">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#6B8F6E" stroke-width="1.5" style="margin:0 auto 16px"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <h3 style="font-family:'Cormorant Garamond',serif;color:#1D3A2F;margin-bottom:10px;">Thank you for reaching out!</h3>
            <p style="color:#717171;">Dr Najat will be in touch with you within 1–2 business days.</p>
          </div>`;
      } else {
        throw new Error('Form error');
      }
    } catch {
      btn.textContent = 'Send Message';
      btn.disabled = false;
      alert('Something went wrong. Please email us directly.');
    }
  });
}
