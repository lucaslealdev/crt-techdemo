video.addEventListener('play', () => {
	reflexo.play();
  whiteNoise.play();
});
video.addEventListener('pause', () => {
	reflexo.pause();
  whiteNoise.pause();
});
video.addEventListener('timeupdate', () => {
	reflexo.currentTime = video.currentTime;
});