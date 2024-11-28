<template>
<div v-if="videoData">
  <VideoBig :video="videoData.video_asset" />

  <!-- Product details -->
  <div class="mt-10">
    <h2 class="text-sm font-medium text-gray-900">Descripción</h2>
    <div class="prose prose-sm mt-4 text-gray-500" v-html="videoData.summary" />
  </div>

  <!-- Instructors section -->
  <div class="mt-8 border-t border-gray-200 pt-8" v-if="videoData.instructors?.length">
    <h2 class="text-sm font-medium text-gray-900">Instructores</h2>
    <div class="prose prose-sm mt-4 text-gray-500">
      <ul role="list">
        <li v-for="instructor in videoData.instructors" :key="instructor.id">
          {{ instructor.name }} - {{ instructor.title }}
        </li>
      </ul>
    </div>
  </div>

  <!-- Downloads section -->
  <div class="mt-8 border-t border-gray-200 pt-8" v-if="videoData.downloads?.length">
    <h2 class="text-sm font-medium text-gray-900">Materiales de estudio</h2>
    <div class="prose prose-sm mt-4 text-gray-500">
      <ul role="list">
        <li v-for="download in videoData.downloads" :key="download.id">
          {{ download.name }}
        </li>
      </ul>
    </div>
  </div>

  <!-- Navigation -->
  <section aria-labelledby="policies-heading" class="mt-10">
    <h2 id="policies-heading" class="sr-only">Navigation</h2>
    <dl class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
      <div v-for="policy in policies" :key="policy.name" class="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
        <dt>
          <component :is="policy.icon" class="mx-auto h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
          <span class="mt-4 text-sm font-medium text-gray-900">{{ policy.name }}</span>
        </dt>
        <dd class="mt-1 text-sm text-gray-500">{{ policy.description }}</dd>
      </div>
    </dl>
  </section>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'

const router = useRouter()
const route = useRoute()
const videoData = ref(null)

const policies = [
{ name: 'Video anterior', icon: ArrowLeftIcon, description: "Bienvenida" },
{ name: 'Siguiente Video', icon: ArrowRightIcon, description: 'Prepara tu venta' },
]

// Validate and fetch video data
onMounted(async () => {
const videoId = route.params.id

if (!videoId) {
  // Redirect to videos page if no ID is provided
  // return router.push('/videos')
}

try {
  // Fetch video data
  const response = await fetch(`http://localhost:api/videos/${videoId}`)

  if (!response.ok) {
    throw new Error('Video not found')
  }

  const result = await response.json()
  videoData.value = result.data
} catch (error) {
  console.error('Error fetching video:', error)
  // Redirect to videos page if there's an error
  // router.push('/videos')
}
})

definePageMeta({
layout: 'layout1',
// Add validation for the ID parameter
validate: async (route) => {
  return !!route.params.id
}
})
</script>