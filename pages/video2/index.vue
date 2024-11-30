<template>
  <div class="bg-white p-4 rounded-lg shadow-lg flex-grow">
        <div class="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
          <div class="w-full md:w-1/2 h-52 bg-gray-200 flex items-center justify-center rounded-lg">
            <span class="text-lg font-bold text-gray-500">Video Player</span>
          </div>
          <div class="flex-grow">
            <h2 class="text-lg font-semibold">English for career development</h2>
            <p class="text-sm text-gray-600 mb-4">
              In this course, you will learn about the job search, application, and interview process...
            </p>
            <div class="text-sm text-gray-500">
              <span>⭐ 4.2</span>
              <span class="ml-4">Intermediate</span>
              <span class="ml-4">12 lectures - 2 hours</span>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-md font-semibold mb-4">Course's content</h3>
          <ul class="space-y-3">
            <li class="p-3 bg-gray-50 rounded-lg flex items-center justify-between shadow-sm">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <h4 class="text-sm font-semibold">Intro</h4>
                  <p class="text-xs text-gray-500">Meet your teacher...</p>
                </div>
              </div>
              <span class="text-sm text-gray-500">3:29 mins</span>
            </li>
          </ul>
        </div>
      </div>
</template>
<script setup>
  definePageMeta({
  layout: 'courses'
});
</script>