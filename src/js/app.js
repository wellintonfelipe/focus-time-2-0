const btnPlay = document.querySelector("#button-play");
const minutsDisplay = document.querySelector("#minutes");
const secondsDisplay = document.querySelector("#seconds");
let timer;

let minuts;

function getTime() {
  timer = Number(prompt("Digite o valor: "));
  if (!timer) {
    return false;
  }
  return timer;
}

btnPlay.addEventListener("click", () => {
  getTime();
  minutsDisplay.textContent = String(timer).padStart(2, "0");
});
