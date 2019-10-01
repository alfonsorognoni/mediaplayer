import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector('video');
const buttonPlay: HTMLElement = document.querySelector('button.play');
const buttonMute:HTMLElement = document.querySelector('button.mute');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause()] });

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error);
  })
}
