import { useEffect } from "react";

// Each reveal plays once, when its element scrolls into view, as a CSS transition on
// transform and opacity (see index.css). It runs on the compositor and always finishes,
// even if scrolling stops halfway. Reduced motion is handled in CSS: nothing is hidden.
const useScrollReveal = () => {
  useEffect(() => {
    const root = document.documentElement;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          // Also reveal anything already scrolled past, e.g. after a jump to #contact.
          if (e.isIntersecting || e.boundingClientRect.top < 0) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px" }
    );

    document.querySelectorAll("[data-rv], [data-row]").forEach((el) => io.observe(el));
    root.classList.add("rv");
    return () => {
      io.disconnect();
      root.classList.remove("rv");
    };
  }, []);
};

export default useScrollReveal;
