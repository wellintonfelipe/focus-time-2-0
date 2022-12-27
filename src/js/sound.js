// const sound = new Audio({
//   url: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
//   volume: 5.0,
//   onend: () => {
//     alert("We finished with the setup!");
//   },
// });

// sound.play();
const src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
const btnAudio = document.querySelector("#audio");

export function Audios() {
  const ledZeppelim = new Audio(src);
  const bgAudio = new Audio(src);

  bgAudio.loop = true;

  function play() {
    ledZeppelim.play();
  }

  return { play, bgAudio };
}
