<template>
<div class="">
  <div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-20 lg:px-8">
    <div class="sm:flex sm:items-baseline sm:justify-between">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Videos más populares</h2>
      <a href="#" class="hidden text-sm font-semibold text-gray-600 hover:text-gray-500 sm:block">
        Ver todos
        <span aria-hidden="true"> &rarr;</span>
      </a>
    </div>

    <div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
      <div v-if="videos[0]" class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
        <img :src="videos[0].cover.formats.medium.url" :alt="videos[0].name" class="object-cover object-center group-hover:opacity-75" />
        <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50" />
        <div class="flex items-end p-6">
          <div>
            <h3 class="font-semibold text-white text-3xl">
              <a :href="`/videos/${videos[0].documentId}`">
                <span class="absolute inset-0 " />
                {{ videos[0].name }}
              </a>
            </h3>
            <p aria-hidden="true" class="mt-1 text-sm text-white">{{ videos[0].summary }}</p>
          </div>
        </div>
      </div>

      <div v-if="videos[1]" class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
        <img :src="videos[1].cover.formats.medium.url" :alt="videos[1].name" class="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full" />
        <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
        <div class="flex items-end p-6 sm:absolute sm:inset-0">
          <div>
            <h3 class="font-semibold text-white text-3xl">
              <a :href="`/videos/${videos[1].documentId}`">
                <span class="absolute inset-0 " />
                {{ videos[1].name }}
              </a>
            </h3>
            <p aria-hidden="true" class="mt-1 text-sm text-white">{{ videos[1].summary }}</p>
          </div>
        </div>
      </div>

      <div v-if="videos[2]" class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
        <img :src="videos[2].cover.formats.medium.url" :alt="videos[2].name" class="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full" />
        <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
        <div class="flex items-end p-6 sm:absolute sm:inset-0">
          <div>
            <h3 class="font-semibold text-white text-3xl">
              <a :href="`/videos/${videos[2].documentId}`">
                <span class="absolute inset-0" />
                {{ videos[2].name }}
              </a>
            </h3>
            <p aria-hidden="true" class="mt-1 text-sm text-white">{{ videos[2].summary }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 sm:hidden">
      <a href="#" class="block text-sm font-semibold text-right text-gray-600 hover:text-gray-500">
        Ver todos
        <span aria-hidden="true"> &rarr;</span>
      </a>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const videos = ref([]);

const fetchVideos = async () => {
try {
  const response = await fetch('https://www.goouniversity.com/api/videos');
  const data = await response.json();

  // Access the 'data' property from the response
  if (data && Array.isArray(data.data)) {
    // Shuffle the videos and take the first 3
    videos.value = data.data.sort(() => 0.5 - Math.random()).slice(0, 3);
  } else {
    console.error('Expected an array but got:', data);
  }
} catch (error) {
  console.error('Error fetching videos:', error);
}
};

onMounted(() => {
fetchVideos();
});
</script>

<style scoped>
/* Add any additional styles here */
</style>