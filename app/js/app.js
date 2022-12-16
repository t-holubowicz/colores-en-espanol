const play = (name) => {
  const path = `assets/mp3/${name}.mp3`;
  const audio = new Audio(path);
  audio.play();
};
