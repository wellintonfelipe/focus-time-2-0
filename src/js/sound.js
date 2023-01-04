const inputRangeCoffe = document.querySelector("#coffe");
const inputRangeFirePlace = document.querySelector("#fireplace");
const inputRangeDrizzly = document.querySelector("#drizzly");
const inputRangeFlorest = document.querySelector("#florest");

/**
 * separar as variaves, de acordo com o nome
 *
 *
 */
const florest = document.querySelector(".florest");
const drizzly = document.querySelector(".drizzly");
const coffe = document.querySelector(".coffe");
const fireplace = document.querySelector(".fireplace");

export function Songs() {
  const Chuva = new Audio("../src/audios/Chuva.wav");
  const Floresta = new Audio("../src/audios/Floresta.wav");
  const Lareira = new Audio("../src/audios/Lareira.wav");
  const Cafeteria = new Audio("../src/audios/Cafeteria.wav");

  function playSong(value) {
    value.play();
    value.loop = true;
  }

  const pressButton = (value) => {
    value.classList.add("pressButton");
  };
  const pressButtonRemove = (value) => {
    value.classList.remove("pressButton");
  };

  function setVolume(value, song) {
    song.volume = value / 100;
  }

  return {
    pressButtonRemove,
    pressButton,
    setVolume,
    playSong,
    Chuva,
    Floresta,
    Lareira,
    Cafeteria,
  };
}

const {
  pressButtonRemove,
  pressButton,
  setVolume,
  playSong,
  Chuva,
  Floresta,
  Lareira,
  Cafeteria,
} = Songs();

florest.addEventListener("click", () => {
  playSong(Floresta);
  pressButton(florest);

  florest.addEventListener("dblclick", () => {
    pressButtonRemove(florest);
    Floresta.pause();
  });
});

drizzly.addEventListener("click", () => {
  playSong(Chuva);
  pressButton(drizzly);

  drizzly.addEventListener("dblclick", () => {
    pressButtonRemove(drizzly);
    Chuva.pause();
  });
});

coffe.addEventListener("click", () => {
  playSong(Cafeteria);
  pressButton(coffe);

  coffe.addEventListener("dblclick", () => {
    pressButtonRemove(coffe);
    Cafeteria.pause();
  });
});

fireplace.addEventListener("click", () => {
  playSong(Lareira);
  pressButton(fireplace);

  fireplace.addEventListener("dblclick", () => {
    pressButtonRemove(fireplace);
    Lareira.pause();
  });
});

inputRangeFirePlace.oninput = () => {
  setVolume(inputRangeFirePlace.value, Lareira);

  inputRangeFirePlace.onchenge = () => {
    setVolume(inputRangeFirePlace.value, Lareira);
  };
};
