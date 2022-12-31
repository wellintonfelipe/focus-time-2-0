const btnPlay = document.querySelector("#button-play");

const minutsDisplay = document.querySelector("#minutes");
const secondsDisplay = document.querySelector("#seconds");

let minuts;
let timer;

function getTimer() {}

function contDown() {
  setTimeout(() => {
    let minuts = Number(minutsDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);

    if (seconds == 0 && minuts == 0) {
      return;
    }

    if (minuts < 0 || seconds <= 0) {
      seconds = 2;
      minutsDisplay.textContent = String(minuts - 1).padStart(2, "0");
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");

    contDown();
  }, 1000);
}

btnPlay.addEventListener("click", () => {
  minuts = prompt("Digite um número: ");

  minutsDisplay.textContent = String(minuts).padStart(2, "0");
  contDown();
});
