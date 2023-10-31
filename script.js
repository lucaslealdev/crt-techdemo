video.addEventListener('play', () => {
	reflexo.play();
});
video.addEventListener('pause', () => {
	reflexo.pause();
});
video.addEventListener('timeupdate', () => {
	reflexo.currentTime = video.currentTime;
});