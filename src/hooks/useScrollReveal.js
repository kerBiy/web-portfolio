import { useEffect } from "react";

const clamp01 = (v) => Math.max(0, Math.min(1, v));
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Every reveal is a pure function of scroll position, so scrolling back plays it
// in reverse along the same path. Only transform, opacity and clip-path change.
const reveal = () => {
  const vh = window.innerHeight;
  const small = window.matchMedia("(max-width: 760px)").matches;
  const radius = small ? 20 : 24;

  document.querySelectorAll("[data-rv]").forEach((el) => {
    const e = easeOut(clamp01((vh - el.getBoundingClientRect().top) / (vh * 0.35)));
    if (el.dataset.rv === "title") {
      const inner = el.querySelector("[data-rv-inner]");
      if (inner) inner.style.transform = `translate3d(0, ${((1 - e) * 105).toFixed(2)}%, 0)`;
    } else {
      el.style.opacity = e.toFixed(3);
      el.style.transform = `translate3d(0, ${((1 - e) * 24).toFixed(2)}px, 0)`;
    }
  });

  document.querySelectorAll("[data-row]").forEach((row) => {
    const p = clamp01((vh - row.getBoundingClientRect().top) / (vh * 0.6));
    const m = easeInOut(clamp01(p / 0.85));
    const frame = row.querySelector("[data-frame]");
    const inner = row.querySelector("[data-inner]");

    // The wipe opens upward from the frame's bottom edge.
    if (frame) frame.style.clipPath = `inset(${((1 - m) * 100).toFixed(2)}% 0 0 0 round ${radius}px)`;
    if (inner) inner.style.transform = `scale(${(1 + (1 - m) * 0.12).toFixed(4)})`;
  });
};

const clear = () => {
  document
    .querySelectorAll("[data-rv], [data-rv-inner], [data-frame], [data-inner]")
    .forEach((el) => {
      el.style.opacity = "";
      el.style.transform = "";
      el.style.clipPath = "";
    });
};

const useScrollReveal = () => {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    const onScroll = () => {
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0;
          reveal();
        });
      }
    };

    const start = () => {
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      reveal();
    };
    const stop = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
      raf = 0;
    };

    // Reduced motion: everything is simply shown, and the setting is honoured live.
    const onPreference = () => {
      stop();
      if (reduce.matches) clear();
      else start();
    };

    onPreference();
    reduce.addEventListener("change", onPreference);
    return () => {
      stop();
      reduce.removeEventListener("change", onPreference);
    };
  }, []);
};

export default useScrollReveal;
