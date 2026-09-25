// Año dinámico en el footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Animación de entrada al hacer scroll
const revealEls = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window && revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// Resalta el enlace de navegación de la sección visible
const navLinks = document.querySelectorAll(".elements");
const sections = Array.from(navLinks)
  .map((link) => {
    const id = link.getAttribute("href");
    return id && id.startsWith("#") ? document.querySelector(id) : null;
  })
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              "is-current",
              link.getAttribute("href") === "#" + entry.target.id,
            );
          });
        }
      });
    },
    { threshold: 0.5 },
  );

  sections.forEach((section) => spy.observe(section));
}
