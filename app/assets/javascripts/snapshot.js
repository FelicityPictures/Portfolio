let videoPlayer = document.querySelector("#snapshotvideo");
let playPauseButton = document.querySelector("#playPauseButton");
let progressBar = document.querySelector("#progressBar");
let volume = document.querySelector("#volume");
let muteButton = document.querySelector("#muteButton");

function changeButtonType(btn, value) {
	btn.title     = value;
	btn.innerHTML = value;
}

function playPauseVideo() {
	if (videoPlayer.paused || videoPlayer.ended) {
		// Change the button to a pause button
		changeButtonType(playPauseButton, 'pause');
		videoPlayer.play();
	}
	else {
		// Change the button to a play button
		changeButtonType(playPauseButton, 'play');
		videoPlayer.pause();
	}
}

function changeVolume(e){
  videoPlayer.volume = e.target.value;
  if(e.target.value == 0){
    changeButtonType(muteButton, 'unmute');
  }else{
    changeButtonType(muteButton, 'mute');
  }
}

function muteVolume() {
	if (videoPlayer.muted) {
		// Change the button to a mute button
		changeButtonType(muteButton, 'mute');
		videoPlayer.muted = false;
	}
	else {
		// Change the button to an unmute button
		changeButtonType(muteButton, 'unmute');
		videoPlayer.muted = true;
	}
}

function updateProgressBar() {
	// Work out how much of the media has played via the duration and currentTime parameters
	var percentage = Math.floor((100 / videoPlayer.duration) * videoPlayer.currentTime);
	// Update the progress bar's value
	progressBar.value = percentage;
	// Update the progress bar's text (for browsers that don't support the progress element)
	progressBar.innerHTML = percentage + '% played';
  if(percentage == 100){
		changeButtonType(playPauseButton, 'play');
  }
}
function seek(e) {
  var percent = e.offsetX / this.offsetWidth;
  videoPlayer.currentTime = percent * videoPlayer.duration;
  e.target.value = Math.floor(percent / 100);
  e.target.innerHTML = progressBar.value + '% played';
}

window.addEventListener('load', () => {
  playPauseButton.addEventListener('click', playPauseVideo);
  volume.addEventListener("change", changeVolume);
  muteButton.addEventListener('click', muteVolume);
	videoPlayer.addEventListener('timeupdate', updateProgressBar, false);
  progressBar.addEventListener("click", seek);
});
