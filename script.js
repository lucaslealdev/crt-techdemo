video.addEventListener('play', () => {
	reflexo.play();
});
video.addEventListener('pause', () => {
	reflexo.pause();
});
video.addEventListener('updatetime', () => {
	reflexo.currentTime = video.currentTime;
});