<template>
  <div class="grid grid-cols-2 gap-4">
    <div v-for="item in randomItems" :key="item?.id || index" class="flex flex-col">
      <div class="relative">
        <NuxtLink :to="`/video/${$toSlug(item.name)}/${item?.documentId}`" class="block">
          <img 
            v-if="item?.DailyMotionThumbnail || item?.attributes?.cover?.data?.attributes?.formats?.thumbnail?.url" 
            :src="item?.DailyMotionThumbnail || item?.attributes?.cover?.data?.attributes?.formats?.thumbnail?.url" 
            :alt="item?.attributes?.name || item?.name || 'Video thumbnail'"
            class="w-full aspect-video object-cover border border-gray-300 rounded-lg"
          >
          <svg 
            v-else 
            class="w-full aspect-video border border-gray-300 bg-white text-gray-300 rounded-lg" 
            preserveAspectRatio="none" 
            stroke="currentColor" 
            fill="none" 
            viewBox="0 0 200 200" 
            aria-hidden="true"
          >
            <path vector-effect="non-scaling-stroke" stroke-width="1" d="M0 0l200 200M0 200L200 0" />
          </svg>
          <!-- Play button overlay -->
          <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-50 transition-all duration-300 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </NuxtLink>
      </div>
      <div class="mt-2">
        <h4 class="text-lg font-bold">
          <NuxtLink 
            :to="`/video/${$toSlug(item.name)}/${item?.documentId}`"
            class="hover:text-blue-600 transition-colors"
          >
            {{ item?.attributes?.name || item?.name || 'Untitled Video' }}
          </NuxtLink>
        </h4>
        <div class="mt-2 flex flex-wrap gap-2">
          <span 
            v-for="tag in getTags(item?.attributes?.tags || item?.tags)" 
            :key="tag"
            class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Fetch videos data
const { data: apiResponse } = await useFetch('https://www.goouniversity.com/api/videos')

// Function to split tags string into array
const getTags = (tagsString) => {
  if (!tagsString) return []
  return tagsString.split(',').map(tag => tag.trim()).filter(tag => tag)
}

// Function to get random items
const getRandomItems = (array, count) => {
  if (!array || !array.length) return []
  const shuffled = [...array].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

// Get 4 random items from the API response
const randomItems = computed(() => {
  if (!apiResponse.value?.data) return []
  return getRandomItems(apiResponse.value.data, 4)
})
</script>