import MediaPlayer from '../MediaPlayer.js';

class AutoPause {
  private threshold: number;
  player: MediaPlayer;
  constructor() {
    this.threshold = 0.25;
    this.handleItersection = this.handleItersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleItersection, {
      threshold: this.threshold
    });
    observer.observe(this.player.media);

    // change tab
    document.addEventListener('visibilitychange', this.handleVisibilityChange)
  }

  private handleItersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= this.threshold;
    // if its visible play
    if(isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  private handleVisibilityChange() {
    const isVisible = document.visibilityState === 'visible';
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;
