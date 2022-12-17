const htmlBody = document.querySelector("body");

const btnThemeDark = document.querySelector(".dark-mode");
const btnThemeLight = document.querySelector(".light-mode");

const darkThemeOn = () => {
  htmlBody.classList.toggle("dark");
  btnThemeDark.classList.remove("hidden");
  btnThemeLight.classList.add("hidden");
};

btnThemeLight.addEventListener("click", () => {
  darkThemeOn();
});

btnThemeDark.addEventListener("click", () => {
  htmlBody.classList.remove("dark");
  btnThemeDark.classList.add("hidden");
  btnThemeLight.classList.remove("hidden");
});
