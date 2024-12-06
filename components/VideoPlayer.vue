<template>
  <div class="video-player">
    <div v-if="error" class="error-message">
      <p>{{ errorMessage }}</p>
    </div>
    <div v-else>
      <!-- DailyMotion iframe -->
      <div v-if="isDailyMotion" class="video-wrapper">
        <iframe
          :src="`https://www.dailymotion.com/embed/video/${dailyMotionId}`"
          frameborder="0"
          allowfullscreen
          class="iframe-video"
        ></iframe>
      </div>

      <!-- HTML5 Video -->
      <div v-else class="video-wrapper">
        <video
          ref="video"
          :src="videoSource"
          :poster="backgroundImage"
          :autoplay="autoplay"
          controls
          class="html5-video"
          @loadedmetadata="onMetadataLoaded"
          @timeupdate="onTimeUpdate"
          @ended="onVideoEnded"
          @error="onVideoError"
        ></video>
      </div>

      <!-- Progress Bar -->
      <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    videoSource: {
      type: String,
      default: null,
    },
    dailyMotionId: {
      type: String,
      default: null,
    },
    backgroundImage: {
      type: String,
      default: null,
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      progress: 0,
      error: false,
      errorMessage: "There was a problem loading the video.",
    };
  },
  computed: {
    isDailyMotion() {
      return !!this.dailyMotionId;
    },
  },
  methods: {
    onMetadataLoaded() {
      const video = this.$refs.video;
      if (video.videoWidth < video.videoHeight) {
        this.$el.classList.add("aspect-vertical");
        this.$el.classList.remove("aspect-landscape");
      } else {
        this.$el.classList.add("aspect-landscape");
        this.$el.classList.remove("aspect-vertical");
      }
    },
    onTimeUpdate() {
      const video = this.$refs.video;
      if (video && video.duration) {
        this.progress = (video.currentTime / video.duration) * 100;
      }
    },
    onVideoEnded() {
      alert("Congrats! The video has finished playing.");
    },
    onVideoError() {
      this.error = true;
    },
  },
};
</script>

<style scoped>
/* Main container for the video player */
.video-player {
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  background-color: #000;
}

/* Wrapper for the video or iframe to maintain aspect ratio */
.video-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%; /* Default to 16:9 aspect ratio */
  background-color: #000;
}

/* Vertical aspect ratio (9:16) */
.video-player.aspect-vertical .video-wrapper {
  padding-top: 177.78%; /* 9:16 aspect ratio */
}

/* Landscape aspect ratio (16:9) */
.video-player.aspect-landscape .video-wrapper {
  padding-top: 56.25%; /* 16:9 aspect ratio */
}

/* Iframe styling */
.iframe-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* HTML5 video styling */
.html5-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Progress bar */
.progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 2px;
  background-color: #4ade80; /* Green */
  transition: width 0.2s ease;
}

/* Error message styling */
.error-message {
  color: #f87171; /* Red */
  text-align: center;
  padding: 1rem;
}
</style>