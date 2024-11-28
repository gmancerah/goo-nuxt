<template>
<div class="video-player" :class="{ 'portrait': isPortrait }">
  <div 
    class="video-container" 
    :class="{ 'portrait': isPortrait }"
    @click="togglePlay"
  >
    <!-- DailyMotion Player -->
    <div v-if="shouldUseDailyMotion" class="dailymotion-container">
      <iframe
        :src="dailymotionEmbedUrl"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
        ref="dailymotionIframe"
        class="dailymotion-iframe"
      ></iframe>
    </div>

    <!-- Regular Video Player -->
    <video
      v-else-if="videoSource"
      ref="videoRef"
      :src="videoSource"
      :poster="posterImage"
      @timeupdate="updateProgress"
      @loadedmetadata="onLoadedMetadata"
      @ended="onVideoEnded"
      :class="['video-element', { 'portrait': isPortrait }]"
      preload="metadata"
      :autoplay="autoplay"
      :muted="autoplay || isMuted" 
      :loop="loop"
      playsinline
    >
      <source :src="videoSource" :type="videoType" />
      Your browser does not support the video tag.
    </video>

    <!-- Controls only show for regular video player -->
    <template v-if="!shouldUseDailyMotion">
      <div 
        class="video-overlay"
        v-show="!isPlaying || showPlayIcon"
      >
        <div class="play-icon">
          {{ isPlaying ? '⏸️' : '▶️' }}
        </div>
      </div>

      <div class="video-controls" @click.stop>
        <button @click="togglePlay" class="control-btn">
          {{ isPlaying ? '⏸️' : '▶️' }}
        </button>

        <div class="progress-bar" @click.stop="seek">
          <div class="progress" :style="{ width: `${progress}%` }"></div>
        </div>

        <div class="time-display">
          {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
        </div>

        <div class="video-info">
          {{ videoResolution }}
        </div>

        <div class="volume-control">
          <button @click="toggleMute" class="control-btn">
            {{ isMuted ? '🔇' : '🔊' }}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            v-model="volume"
            @input="updateVolume"
          />
        </div>
      </div>
    </template>
  </div>
</div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

// Props
const props = defineProps({
videoSource: {
  type: String,
  default: ''
},
dailymotionId: {
  type: String,
  default: ''
},
posterImage: {
  type: String,
  default: ''
},
defaultAutoplay: {
  type: Boolean,
  default: true
},
defaultLoop: {
  type: Boolean,
  default: false
}
})

// Refs and state
const videoRef = ref(null)
const dailymotionIframe = ref(null)
const isPlaying = ref(false)
const duration = ref(0)
const currentTime = ref(0)
const progress = ref(0)
const volume = ref(1)
const isMuted = ref(false)
const videoWidth = ref(0)
const videoHeight = ref(0)
const showPlayIcon = ref(false)
const autoplay = ref(props.defaultAutoplay)
const loop = ref(props.defaultLoop)

// Computed
const shouldUseDailyMotion = computed(() => {
return !!props.dailymotionId && props.dailymotionId.trim() !== ''
})

const dailymotionEmbedUrl = computed(() => {
if (!props.dailymotionId) return ''

const params = new URLSearchParams({
  autoplay: autoplay.value ? '1' : '0',
  mute: (autoplay.value || isMuted.value) ? '1' : '0',
  loop: loop.value ? '1' : '0',
  'queue-enable': '0',
  'sharing-enable': '0',
  'ui-logo': '0',
  'ui-start-screen-info': '0',
  'ui-theme': 'dark'
})

return `https://www.dailymotion.com/embed/video/${props.dailymotionId}?${params.toString()}`
})

const isPortrait = computed(() => {
return videoHeight.value > videoWidth.value
})

const videoResolution = computed(() => {
return `${videoWidth.value}x${videoHeight.value}`
})

const videoType = computed(() => {
if (!props.videoSource) return 'video/mp4'

try {
  const extension = props.videoSource.split('.').pop().toLowerCase()
  const typeMap = {
    'mp4': 'video/mp4',
    'webm': 'video/webm',
    'ogg': 'video/ogg',
    'mov': 'video/quicktime',
    'm4v': 'video/mp4',
    'avi': 'video/x-msvideo'
  }
  return typeMap[extension] || 'video/mp4'
} catch (error) {
  console.warn('Error determining video type:', error)
  return 'video/mp4'
}
})

// Methods for regular video player
const togglePlay = () => {
if (shouldUseDailyMotion.value) return

if (!videoRef.value) return

if (videoRef.value.paused) {
  videoRef.value.play().catch(error => {
    console.warn('Play failed:', error)
    if (!isMuted.value) {
      isMuted.value = true
      videoRef.value.muted = true
      videoRef.value.play().catch(error => {
        console.error('Play failed even with mute:', error)
      })
    }
  })
  isPlaying.value = true
  showPlayIcon.value = true
  setTimeout(() => {
    showPlayIcon.value = false
  }, 500)
} else {
  videoRef.value.pause()
  isPlaying.value = false
}
}

const updateProgress = () => {
if (!videoRef.value) return
currentTime.value = videoRef.value.currentTime
progress.value = (currentTime.value / duration.value) * 100
}

const seek = (event) => {
if (!videoRef.value) return
const rect = event.target.getBoundingClientRect()
const pos = (event.clientX - rect.left) / rect.width
videoRef.value.currentTime = pos * duration.value
}

const formatTime = (time) => {
const minutes = Math.floor(time / 60)
const seconds = Math.floor(time % 60)
return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

const toggleMute = () => {
if (!videoRef.value) return
videoRef.value.muted = !videoRef.value.muted
isMuted.value = videoRef.value.muted
}

const updateVolume = () => {
if (!videoRef.value) return
videoRef.value.volume = volume.value
isMuted.value = volume.value === 0
}

const onVideoEnded = () => {
isPlaying.value = false
if (loop.value && videoRef.value) {
  videoRef.value.currentTime = 0
  videoRef.value.play().catch(error => {
    console.warn('Loop playback failed:', error)
  })
}
}

const onLoadedMetadata = () => {
if (!videoRef.value) return
duration.value = videoRef.value.duration
videoWidth.value = videoRef.value.videoWidth
videoHeight.value = videoRef.value.videoHeight
}

// Lifecycle
onMounted(() => {
if (!shouldUseDailyMotion.value && videoRef.value) {
  videoRef.value.volume = volume.value
  videoRef.value.loop = loop.value

  if (autoplay.value) {
    videoRef.value.muted = true
    isMuted.value = true
    videoRef.value.play().catch(error => {
      console.warn('Initial autoplay failed:', error)
    })
  }
}
})

// Watch for source changes
watch([() => props.videoSource, () => props.dailymotionId], () => {
if (!shouldUseDailyMotion.value && videoRef.value && autoplay.value) {
  nextTick(() => {
    videoRef.value.play().catch(error => {
      console.warn('Autoplay after source change failed:', error)
    })
  })
}
})
</script>

<style scoped>
/* Keep existing styles and add: */
.dailymotion-container {
position: relative;
width: 100%;
height: 100%;
background: #000;
}

.dailymotion-iframe {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
border: 0;
}

/* Ensure proper aspect ratio for both players */
.video-container {
position: relative;
background: #000;
border-radius: 8px;
overflow: hidden;
aspect-ratio: 16/9;
}

.video-container.portrait {
aspect-ratio: 9/16;
}
</style>