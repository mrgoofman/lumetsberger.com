(function () {
  var reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var wide = matchMedia('(min-width: 900px)');

  // Fade sections in as they scroll into view.
  function initReveal() {
    var els = document.querySelectorAll('[data-reveal]');
    if (reduceMotion || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    els.forEach(function (el) { io.observe(el); });
  }

  // "My Current Focus": vertical scroll drives the horizontal track on wide screens.
  function initReel() {
    var reel = document.querySelector('[data-reel]');
    if (!reel) return;
    var track = reel.querySelector('[data-track]');
    var prog = reel.querySelector('[data-prog]');
    var panels = [].slice.call(track.children);

    // Phones: the cards stick and stack; each one shrinks and dims as the next covers it.
    // Reads every position before writing any style, so a scroll frame costs one layout.
    function stack() {
      var tops = panels.map(function (p) { return p.getBoundingClientRect().top; });
      panels.forEach(function (p, i) {
        var t = 0;
        if (i + 1 < panels.length && !reduceMotion) {
          t = Math.max(0, Math.min(1, 1 - (tops[i + 1] - tops[i]) / innerHeight));
        }
        p.style.transform = t ? 'scale(' + (1 - t * 0.08) + ')' : '';
        p.style.filter = t ? 'brightness(' + (1 - t * 0.5) + ')' : '';
      });
    }

    function update() {
      if (!wide.matches) { track.style.transform = ''; stack(); return; }
      panels.forEach(function (p) { p.style.transform = p.style.filter = ''; });
      var r = reel.getBoundingClientRect();
      var t = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)));
      track.style.transform = 'translateX(' + (-t * (track.scrollWidth - innerWidth)) + 'px)';
      prog.style.width = (t * 100) + '%';
    }
    addEventListener('scroll', update, { passive: true });
    addEventListener('resize', update);
    update();
  }

  function initTypewriter() {
    var el = document.querySelector('[data-typewriter]');
    if (!el || reduceMotion) return;
    var words = ['Speaker.', 'Vibecoder.', 'Entrepreneur.', 'Builder.'];
    var w = 0, c = words[0].length, deleting = true;

    function tick() {
      var word = words[w];
      c += deleting ? -1 : 1;
      el.textContent = word.substring(0, c);
      var wait = deleting ? 50 : Math.random() * 100 + 100;
      if (!deleting && c === word.length) { deleting = true; wait = 2000; }
      else if (deleting && c === 0) { deleting = false; w = (w + 1) % words.length; wait = 200; }
      setTimeout(tick, wait);
    }
    setTimeout(tick, 2000);
  }

  // Phone menu sheet (the burger only shows below 900px).
  function initMenu() {
    var btn = document.querySelector('[data-menu]');
    if (!btn) return;
    var root = document.documentElement;
    // While open, the page behind the sheet is out of reach for Tab and screen readers.
    var behind = document.querySelectorAll('main, .foot');
    function setMenu(open) {
      root.classList.toggle('menu-open', open);
      btn.setAttribute('aria-expanded', open);
      behind.forEach(function (el) { el.inert = open; });
    }
    btn.addEventListener('click', function () { setMenu(!root.classList.contains('menu-open')); });
    document.querySelectorAll('.sheet a').forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });
    addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && root.classList.contains('menu-open')) { setMenu(false); btn.focus(); }
    });
    wide.addEventListener('change', function (e) { if (e.matches) setMenu(false); });
  }

  // The contact address is never in the HTML: it ships as two base64 halves, joined on click.
  function initMail() {
    document.querySelectorAll('[data-mail-user]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        location.href = 'mai' + 'lto:' + atob(a.dataset.mailUser) + String.fromCharCode(64) + atob(a.dataset.mailDomain);
      });
    });
  }

  initReveal();
  initReel();
  initTypewriter();
  initMenu();
  initMail();
})();
