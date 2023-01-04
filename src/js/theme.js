const htmlBody = document.querySelector("body");

const btnThemeDark = document.querySelector(".dark-mode");
const btnThemeLight = document.querySelector(".light-mode");

const darkThemeOn = () => {
  btnThemeDark.classList.add("dark");
  btnThemeDark.classList.remove("hidden");
  btnThemeLight.classList.add("hidden");
  htmlBody.classList.add("dark");
};

const darkThemeOff = () => {
  btnThemeDark.classList.add("hidden");
  btnThemeLight.classList.remove("hidden");

  htmlBody.classList.remove("dark");
};

btnThemeLight.addEventListener("click", () => {
  darkThemeOn();
});

btnThemeDark.addEventListener("click", () => {
  darkThemeOff();
});
