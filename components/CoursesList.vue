<script setup>
import { useFetch } from "#app";

// Placeholder image for courses without images
const placeholderImage = "https://via.placeholder.com/600x800?text=No+Image";

// Fetch courses data
const { data: courses, pending, error } = await useFetch("https://www.goouniversity.com/api/courses");

// Debugging: Check if data is being fetched
console.log("Courses data:", courses.value);
console.error("Error fetching courses:", error?.value);
</script>

<template>
  <div class="p-4">
    <!-- Show loading state -->
    <div v-if="pending" class="text-center text-gray-500">
      Cargando cursos...
    </div>

    <!-- Show error state -->
    <div v-else-if="error" class="text-center text-red-500">
      Failed to load courses. Please try again later.
    </div>

    <!-- Horizontal scrolling container -->
    <div v-else class="flex overflow-x-auto gap-4 scroll-snap-x snap-mandatory">
      <NuxtLink
        v-for="course in courses.data"
        :key="course.id"
        :to="`/curso/${course.name}/${course.documentId}`"
        class="flex-none w-48 bg-gray-800 rounded-lg overflow-hidden snap-start transform transition-transform hover:scale-105"
      >
        <!-- Image container with 3:4 aspect ratio -->
        <div class="w-full aspect-[3/4] bg-black">
          <img
            :src="course.Image?.[0]?.formats?.medium?.url || course.Image?.[0]?.url || placeholderImage"
            :alt="course.name"
            class="w-full h-full object-cover"
          />
        </div>
        <!-- Course name -->
        <div class="p-2 text-center">
          <h5 class="text-white font-bold text-sm">{{ course.name }}</h5>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>