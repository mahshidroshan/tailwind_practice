const html = document.querySelector("html");
const btn = document.getElementById("mode");

btn.addEventListener("click", () => {
  html.classList.toggle("dark");
  if (isDarkMode()) {
    btn.innerHTML = `🌞`;
  } else {
    btn.innerHTML = `🌝`;
  }
});

function isDarkMode() {
  return html.classList.contains("dark");
}

const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamburgerBtn.classList.toggle("toggle-btn");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
