const btnPlay = document.querySelector("#button-play");
const btnStop = document.querySelector("#button-stop");
const btnPause = document.querySelector(".button-pause");
const controllers = document.querySelector("#controllers");

const bntPaused = document.querySelector("#button-stop");
const bntIncrement = document.querySelector("#increment");
const bntDecrement = document.querySelector("#decrement");

const minutsDisplay = document.querySelector("#minutes");
const secondsDisplay = document.querySelector("#seconds");

let minuts;
let timer;
let seconds;
let setTimer;

function contDown() {
  setTimer = setTimeout(() => {
    bntIncrement.addEventListener("click", increment);

    minuts = Number(minutsDisplay.textContent);
    seconds = Number(secondsDisplay.textContent);

    bntDecrement.addEventListener("click", decrement);

    if (seconds == 0 && minuts == 0) {
      resetDisplay();
      return;
    }

    if (minuts < 0 || seconds <= 0) {
      seconds = 60;
      minutsDisplay.textContent = String(minuts - 1).padStart(2, "0");
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");

    contDown();
  }, 1000);
}

function increment() {
  minutsDisplay.textContent = String(minuts + 5).padStart(2, "0");
}

function decrement() {
  if (minuts >= 5) {
    console.log("click", minuts, seconds);

    minutsDisplay.textContent = String(minuts - 5).padStart(2, "0");
  }
}

btnPlay.addEventListener("click", () => {
  timer = prompt("Digite um número: ");

  if (!timer) {
    timer = minutsDisplay.textContent;
  }

  minuts = timer;

  contDown();
  minutsDisplay.textContent = String(minuts).padStart(2, "0");
});

btnStop.addEventListener("click", () => {
  clearTimeout(setTimer);
  return;
});

btnStop.addEventListener("dblclick", () => {
  minutsDisplay.textContent = String(0).padStart(2, "0");
  secondsDisplay.textContent = String(0).padStart(2, "0");
  return;
});
