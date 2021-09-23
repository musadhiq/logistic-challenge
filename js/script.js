window.addEventListener("load", () => {
  const humburger = document.querySelector(".humburger");
  const navLinks = document.querySelector(".nav-links");

  if (humburger) {
    humburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }
});
