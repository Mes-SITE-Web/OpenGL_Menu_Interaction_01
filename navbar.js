const navContainer = document.querySelector(".nav-container");
const hamburgerBtn = document.querySelector(".hamburger-btn");

// Toggle navigation
hamburgerBtn.addEventListener("click", () => {
  navContainer.classList.toggle("active");
});

// Fermer le menu quand on clique à l'extérieur
document.addEventListener("click", (e) => {
  if (
    !navContainer.contains(e.target) &&
    navContainer.classList.contains("active")
  ) {
    navContainer.classList.remove("active");
  }
});
