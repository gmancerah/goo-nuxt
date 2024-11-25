<template>
<div class="relative w-full h-0" style="padding-bottom: 56.25%;"> <!-- 16:9 Aspect Ratio -->
  <video
    ref="videoPlayer"
    class="absolute top-0 left-0 w-full h-full"
    controls
    preload="auto"
    data-setup="{}"
  >
    <source src="https://res.cloudinary.com/goouniveristy/video/upload/v1726016728/assetmodulo_6_4c49b460ba.mp4" type="video/mp4" />
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a web browser that
      <a href="https://www.google.com/chrome/">supports HTML5 video</a>
    </p>
  </video>
</div>
</template>

<script>
import videojs from 'video.js';
//import 'video.js/dist/video-js.css';

export default {
name: 'VideoPlayer',
mounted() {
 // this.player = videojs(this.$refs.videoPlayer);

  this.player.on('timeupdate', () => {
    const currentTime = this.player.currentTime();
    const duration = this.player.duration();
    const percent = (currentTime / duration) * 100;

    if (percent >= 90 && !this.player.alerted) {
      this.player.alerted = true; // Prevent multiple alerts
      alert("Congrats");
    }
  });
},
beforeDestroy() {
  if (this.player) {
    this.player.dispose();
  }
}
};
</script>

<style scoped>
.video-js {
width: 100%;
height: 100%;
}
</style>