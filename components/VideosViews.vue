<template>
<div class="bg-white">
  <div class="mx-auto max-w-2xl px-4 py-18 sm:px-6 sm:py-18 lg:max-w-7xl lg:px-8 mt-6">
    <div class="max-w-3xl">
      <!-- <h2 id="features-heading" class="font-medium text-gray-500">Videos</h2> -->
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Últimos videos</p>
    </div>

    <div class="mt-6 grid grid-cols-1 items-start gap-x-6 gap-y-10 sm:mt-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
      <div v-for="video in videos" :key="video.id" class="flex flex-col-reverse">
        <div class="mt-2">
          <a :href="`/video/texto/${video.id}`">
            <h3 class="text-xl font-medium text-gray-900">{{ video.name }}</h3>
            <p class="text-xs text-gray-500">{{ video.summary }}</p>
          </a>
        </div>
        <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
          <a :href="`/video/texto/${video.id}`"><img :src="getThumbnailUrl(video)" :alt="video.name" class="object-cover object-center" /></a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const videos = ref([]);

// Placeholder image URL
const placeholderImage = 'https://via.placeholder.com/245x138.png?text=No+Image';

const fetchVideos = async () => {
try {
  const response = await fetch('https://www.goouniversity.com/api/videos');
  const data = await response.json();
  console.log('API Response:', data);

  videos.value = data.data.map(video => ({
    id: video.documentId,
    name: video.name,
    summary: video.summary,
    cover: video.cover,
    DailyMotionThumbnail: video.DailyMotionThumbnail
  }));
} catch (error) {
  console.error('Error fetching videos:', error);
}
};

// Function to get the thumbnail URL with priority for DailyMotionThumbnail
const getThumbnailUrl = (video) => {
// First check if DailyMotionThumbnail exists
if (video.DailyMotionThumbnail) {
  return video.DailyMotionThumbnail;
}

// Then check if cover formats exist and has medium URL
if (video.cover?.formats?.medium?.url) {
  return video.cover.formats.medium.url;
}

// Finally check if cover formats exist and has small URL
if (video.cover?.formats?.small?.url) {
  return video.cover.formats.small.url;
}

// Return placeholder if no valid image URL is found
return placeholderImage;
};

const limitedVideos = computed(() => videos.value.slice(0, 8));

onMounted(fetchVideos);
</script>