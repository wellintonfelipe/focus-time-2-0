const btnPlay = document.querySelector("#button-play");
const btnStop = document.querySelector("#button-stop");
const btnPause = document.querySelector(".button-pause");

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

function startDisplay() {
  btnPlay.innerHTML = `<img src="./src/img/pause.svg" alt="button pause" />`;
  bntPaused.innerHTML = `<img src="./src/img/control-stop.svg" alt="button stop" />`;
}

function resetDisplay() {
  bntPaused.innerHTML = `<img src="./src/img/set-time.svg" alt="button pause" />`;
  btnPlay.innerHTML = `<img src="./src/img/control-play.svg" alt="button play" />`;
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
  startDisplay();

  if (!timer) {
    timer = minutsDisplay.textContent;
  }

  minuts = timer;

  contDown();
  minutsDisplay.textContent = String(minuts).padStart(2, "0");
});
