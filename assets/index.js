const video = document.querySelector('video');
const button = document.querySelector('button');

function MediaPlayer(config) {
  this.video = config.el
}

MediaPlayer.prototype.play = function () {
  if(this.video.paused) {
    this.video.play();
  } else {
    this.video.pause();
  }
}

const player = new MediaPlayer({ el: video });

button.onclick = () => player.play();
