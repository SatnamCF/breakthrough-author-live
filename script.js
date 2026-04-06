/* ============================================
   Breakthrough Author Live — Landing Page JS
   ============================================ */

// --- Dark/Light mode toggle ---
(function () {
  var toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  var saved = localStorage.getItem('bal-theme');
  if (saved === 'light') {
    document.documentElement.classList.add('light');
  }

  toggle.addEventListener('click', function () {
    document.documentElement.classList.toggle('light');
    var isLight = document.documentElement.classList.contains('light');
    localStorage.setItem('bal-theme', isLight ? 'light' : 'dark');
  });
})();

// --- Scroll-triggered fade-in animations ---
(function () {
  const targets = document.querySelectorAll(
    '.section__title, .check-list li, .case-card, .fail-card, .week-card, .bonus-item, .faq-item, .stat-card, .for-card, .price-box, .guarantee, .final-copy'
  );

  targets.forEach(function (el) {
    el.classList.add('fade-in');
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();

// --- Sticky CTA: hide when hero buy button is in view ---
(function () {
  var stickyCta = document.querySelector('.sticky-cta');
  if (!stickyCta) return;

  var heroCta = document.querySelector('.hero .btn--cta');
  if (!heroCta) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        stickyCta.style.transform = entry.isIntersecting
          ? 'translateY(100%)'
          : 'translateY(0)';
      });
    },
    { threshold: 0.5 }
  );

  stickyCta.style.transition = 'transform 0.3s ease';
  observer.observe(heroCta);
})();
