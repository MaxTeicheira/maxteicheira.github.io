// Fast ease-out scroll for TOC sidebar links
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    const link = e.target.closest("#TOC a, .sidebar-navigation a, nav.toc-active a");
    if (!link) return;
    const hash = link.getAttribute("href");
    if (!hash || hash.charAt(0) !== "#") return;
    const target = document.querySelector(hash);
    if (!target) return;
    e.preventDefault();
    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + start - 20;
    const distance = end - start;
    const duration = Math.min(350, 150 + Math.abs(distance) * 0.08);
    let t0 = null;
    function step(ts) {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      // ease-out cubic: fast start, soft deceleration
      const ease = 1 - Math.pow(1 - p, 3);
      window.scrollTo(0, start + distance * ease);
      if (p < 1) requestAnimationFrame(step);
      else history.replaceState(null, "", hash);
    }
    requestAnimationFrame(step);
  });
});
