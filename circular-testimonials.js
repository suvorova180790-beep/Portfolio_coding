/**
 * Круговые отзывы (порт CircularTestimonials): слайды, gap от ширины, автоплей, стрелки, клавиатура.
 */
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const TESTIMONIALS = [
    {
      quote:
        "Сайт вышел живым: не шаблон, а характер. Запускали быстро, правки были по делу — без лишних итераций.",
      name: "Анна К.",
      designation: "основатель digital-студии",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&h=1100&fit=crop&auto=format",
    },
    {
      quote:
        "Сильный первый экран и ритм блоков — люди реально стали дольше смотреть страницу. Вайб и структура в одном флаконе.",
      name: "Михаил Т.",
      designation: "продуктовый маркетинг",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&h=1100&fit=crop&auto=format",
    },
    {
      quote:
        "Не «красиво и пусто», а понятно, куда смотреть и что делать дальше. Именно такой digital-язык я и хотела.",
      name: "Елена В.",
      designation: "эксперт и спикер",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&h=1100&fit=crop&auto=format",
    },
  ];

  function calculateGap(width) {
    const minWidth = 1024;
    const maxWidth = 1456;
    const minGap = 60;
    const maxGap = 86;
    if (width <= minWidth) return minGap;
    if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
    return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
  }

  function getImageStyle(index, activeIndex, len, containerWidth) {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + len) % len === index;
    const isRight = (activeIndex + 1) % len === index;

    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: "translateX(0) translateY(0) scale(1) rotateY(0deg)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
      };
    }
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transform: "translateX(0) translateY(0) scale(0.75) rotateY(0deg)",
    };
  }

  function applyImageStyles(root, activeIndex, len, width) {
    const imgs = root.querySelectorAll(".circular-testimonials__img");
    imgs.forEach((img, index) => {
      const s = getImageStyle(index, activeIndex, len, width);
      img.style.zIndex = String(s.zIndex);
      img.style.opacity = String(s.opacity);
      img.style.pointerEvents = s.pointerEvents;
      img.style.transform = s.transform;
    });
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function renderQuoteWords(quoteEl, quoteText) {
    quoteEl.classList.remove("is-words-visible");
    const words = quoteText.split(/\s+/).filter(Boolean);
    quoteEl.innerHTML = words
      .map(
        (w, i) =>
          `<span class="circular-testimonials__word" style="--w: ${i}">${escapeHtml(w)}</span>&#32;`
      )
      .join("");

    if (reduce) {
      quoteEl.classList.add("is-words-visible");
      return;
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        quoteEl.classList.add("is-words-visible");
      });
    });
  }

  const root = document.querySelector("[data-circular-testimonials]");
  if (!root) return;

  const imageContainer = root.querySelector("[data-image-container]");
  const nameEl = root.querySelector("[data-field='name']");
  const roleEl = root.querySelector("[data-field='role']");
  const quoteEl = root.querySelector("[data-field='quote']");
  const liveEl = root.querySelector("[data-live]");
  const btnPrev = root.querySelector("[data-arrow='prev']");
  const btnNext = root.querySelector("[data-arrow='next']");

  if (!imageContainer || !nameEl || !roleEl || !quoteEl || !btnPrev || !btnNext) return;

  const len = TESTIMONIALS.length;
  let activeIndex = 0;
  function readWidth() {
    return Math.max(imageContainer.offsetWidth || 0, 320);
  }

  let containerWidth = readWidth();
  let autoplayTimer = null;

  function announce() {
    const t = TESTIMONIALS[activeIndex];
    if (liveEl) {
      liveEl.textContent = `${t.name}, ${t.designation}. ${t.quote}`;
    }
  }

  function updateText() {
    const t = TESTIMONIALS[activeIndex];
    nameEl.textContent = t.name;
    roleEl.textContent = t.designation;
    renderQuoteWords(quoteEl, t.quote);
    announce();
  }

  function refreshImages() {
    containerWidth = readWidth();
    applyImageStyles(root, activeIndex, len, containerWidth);
  }

  function go(delta) {
    stopAutoplay();
    activeIndex = (activeIndex + delta + len) % len;
    updateText();
    refreshImages();
    startAutoplay();
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function startAutoplay() {
    if (reduce) return;
    const autoplay = root.getAttribute("data-autoplay") !== "false";
    if (!autoplay) return;
    stopAutoplay();
    autoplayTimer = window.setInterval(() => {
      activeIndex = (activeIndex + 1) % len;
      updateText();
      refreshImages();
    }, 5000);
  }

  function onResize() {
    refreshImages();
  }

  btnPrev.addEventListener("click", () => go(-1));
  btnNext.addEventListener("click", () => go(1));

  document.addEventListener("keydown", (e) => {
    const ae = document.activeElement;
    if (!ae || !root.contains(ae)) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    }
  });

  const ro =
    typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(() => onResize())
      : null;
  if (ro) ro.observe(imageContainer);
  window.addEventListener("resize", onResize);

  updateText();
  refreshImages();
  startAutoplay();
})();
