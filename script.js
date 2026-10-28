"use strict";
function updateNavigation() {
  const current = location.hash || "#home";
  document.querySelectorAll(".nav a").forEach(link => {
    const active = link.getAttribute("href") === current;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}
window.addEventListener("hashchange", updateNavigation);
updateNavigation();
