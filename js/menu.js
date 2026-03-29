const MOBILE_BREAKPOINT = 768;

document.querySelectorAll(".navbar").forEach((navbar) => {
  const menuButton = navbar.querySelector(".menu-toggle");
  const menu = navbar.querySelector(".elementos-navbar");

  if (!menuButton || !menu) {
    return;
  }

  const setExpandedState = (isExpanded) => {
    navbar.classList.toggle("is-open", isExpanded);
    menuButton.setAttribute("aria-expanded", String(isExpanded));
    menuButton.setAttribute(
      "aria-label",
      isExpanded ? "Cerrar menu de navegacion" : "Abrir menu de navegacion",
    );
  };

  setExpandedState(false);

  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    setExpandedState(!isExpanded);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= MOBILE_BREAKPOINT) {
        setExpandedState(false);
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > MOBILE_BREAKPOINT) {
      setExpandedState(false);
    }
  });
});
