const btnThemeDark = document.querySelector(".dark-mode");
const btnThemeLight = document.querySelector(".light-mode");

btnThemeLight.addEventListener("click", () => {
  btnThemeDark.classList.remove("hidden");
  btnThemeLight.classList.add("hidden");
});

btnThemeDark.addEventListener("click", () => {
  btnThemeDark.classList.add("hidden");
  btnThemeLight.classList.remove("hidden");
});
