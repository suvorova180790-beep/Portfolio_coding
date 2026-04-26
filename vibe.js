/**
 * Скролл-ревил + печать подзаголовка в hero.
 */
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const root = document.documentElement;

  function initReveal() {
    if (reduce) return;
    root.classList.add("js-reveal");

    const nodes = document.querySelectorAll("[data-reveal]");

    function revealIfInView(el) {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      if (rect.top < vh * 0.9 && rect.bottom > -48) {
        el.classList.add("is-visible");
        return true;
      }
      return false;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );

    nodes.forEach((el) => {
      if (!revealIfInView(el)) observer.observe(el);
    });
  }

  function initHeroTypewriter() {
    const wrap = document.querySelector("#hero-subtitle");
    const node = document.querySelector("#hero-subtitle .subtitle__type");
    if (!wrap || !node) return;

    const full = node.textContent.replace(/\s+/g, " ").trim();
    if (!full) return;

    if (reduce) {
      node.textContent = full;
      wrap.classList.add("is-typewriter-done");
      return;
    }

    node.textContent = "";
    let i = 0;
    const baseDelay = 26;

    function step() {
      if (i >= full.length) {
        node.textContent = full;
        wrap.classList.add("is-typewriter-done");
        return;
      }

      const ch = full[i];
      i += 1;
      node.textContent = full.slice(0, i);
      const jitter = Math.random() * 20;
      const pause = /[.,!?]/.test(ch) ? 110 + Math.random() * 160 : 0;
      setTimeout(step, baseDelay + jitter + pause);
    }

    setTimeout(step, 720);
  }

  initReveal();
  initHeroTypewriter();
})();
