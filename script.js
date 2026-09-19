// Small enhancements. The page works fine without any of this.

(function () {
  'use strict';

  /* Header border appears once the page scrolls ------------------- */

  var header = document.querySelector('.site-header');

  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Highlight the nav link for the section in view ---------------- */

  var links = Array.prototype.slice.call(document.querySelectorAll('.nav-links a'));
  var sections = links
    .map(function (link) { return document.querySelector(link.hash); })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          link.classList.toggle('is-active', link.hash === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (section) { observer.observe(section); });
  }

  /* Phone menu ---------------------------------------------------- */

  var nav = document.querySelector('.nav');
  var menuToggle = document.querySelector('.menu-toggle');

  if (nav && menuToggle) {
    var setMenu = function (open) {
      nav.classList.toggle('is-open', open);
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    menuToggle.addEventListener('click', function () {
      setMenu(!nav.classList.contains('is-open'));
    });

    // Picking a section closes the menu; Escape does too.
    nav.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () { setMenu(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  /* Footer year --------------------------------------------------- */

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
