const html = document.querySelector("html");

const btnThemeDark = document.querySelector(".dark-mode");
const btnThemeLight = document.querySelector(".light-mode");

btnThemeLight.addEventListener("click", () => {
  html.classList.add("dark");
  btnThemeDark.classList.remove("hidden");
  btnThemeLight.classList.add("hidden");
});

btnThemeDark.addEventListener("click", () => {
  html.classList.remove("dark");

  btnThemeDark.classList.add("hidden");
  btnThemeLight.classList.remove("hidden");
});
