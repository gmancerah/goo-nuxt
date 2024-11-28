<template>
<div>
  <div v-for="item in randomItems" :key="item.id" class="flex mb-6">
    <div class="mr-4 shrink-0">
      <NuxtLink :to="`/video/${item.id}`" class="block">
        <img 
          v-if="item.cover?.formats?.thumbnail?.url" 
          :src="item.cover.formats.thumbnail.url" 
          :alt="item.name"
          class="size-16 object-cover border border-gray-300"
        >
        <svg 
          v-else 
          class="size-16 border border-gray-300 bg-white text-gray-300" 
          preserveAspectRatio="none" 
          stroke="currentColor" 
          fill="none" 
          viewBox="0 0 200 200" 
          aria-hidden="true"
        >
          <path vector-effect="non-scaling-stroke" stroke-width="1" d="M0 0l200 200M0 200L200 0" />
        </svg>
      </NuxtLink>
    </div>
    <div>
      <h4 class="text-lg font-bold">
        <NuxtLink 
          :to="`/video/${item.id}`"
          class="hover:text-blue-600 transition-colors"
        >
          {{ item.name }}
        </NuxtLink>
      </h4>
      <p class="mt-1 text-gray-600">{{ item.summary }}</p>
      <div class="mt-2 flex flex-wrap gap-2">
        <span 
          v-for="tag in getTags(item.tags)" 
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
const { data: apiResponse } = await useFetch('/api/videos')

// Function to get random items from array
const getRandomItems = (array, count) => {
const shuffled = [...array].sort(() => 0.5 - Math.random())
return shuffled.slice(0, count)
}

// Function to split tags string into array
const getTags = (tagsString) => {
if (!tagsString) return []
return tagsString.split(',').map(tag => tag.trim()).filter(tag => tag)
}

// Get 5 random items from the API response
const randomItems = computed(() => {
if (!apiResponse.value?.data) return []
return getRandomItems(apiResponse.value.data, 5)
})

// Add refresh function if needed
const refreshItems = () => {
if (apiResponse.value?.data) {
  randomItems.value = getRandomItems(apiResponse.value.data, 5)
}
}
</script>