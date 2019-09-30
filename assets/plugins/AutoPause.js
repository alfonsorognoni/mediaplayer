class AutoPause {
  constructor() {
    this.threshold = 0.25;
    this.handleItersection = this.handleItersection.bind(this);
  }
  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleItersection, {
      threshold: this.threshold
    });
    observer.observe(this.player.media)
  }
  handleItersection(entries) {
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= this.threshold;
    // if its visible play
    if(isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;
