const audioPlay = document.querySelector("#playSong");
const playPause = document.querySelector("#button-stop");
const volControl = document.querySelector("#vol-control");

export function Songs() {
  const audio = [
    "../src/audios/Floresta.wav",
    "../src/audios/Cafeteria.wav",
    "../src/audios/Chuva.wav",
    "../src/audios/Lareira.wav",
  ];

  function setVolume(value) {
    song.volume = value / 100;
  }

  return {
    audio,
    setVolume,
  };
}

const { audio, setVolume, isOnOff } = Songs();
const [Floresta, Cafeteria, Chuva, Lareira] = audio;

const song = new Audio(Floresta);

audioPlay.addEventListener("click", () => {
  song.play();
});

playPause.addEventListener("click", () => {
  console.log("click");
  song.pause();
});

volControl.oninput = () => {
  setVolume(volControl.value);
};

volControl.onchenge = () => {
  setVolume(volControl.value);
};
