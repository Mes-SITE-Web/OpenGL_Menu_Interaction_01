document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetUrl = this.getAttribute("href");

      // Ajoutez la classe fade-out pour déclencher la transition
      document.getElementById("content").classList.add("fade-out");

      // Attendez que la transition soit terminée avant de charger la nouvelle page
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 500); // Temps de transition en millisecondes
    });
  });
});
