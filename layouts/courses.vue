<template>
<div class="min-h-screen">
<div class="flex flex-col-reverse md:flex-row min-h-screen">
    <!-- Left Sidebar -->
    <aside class="w-full md:w-1/3 p-4 bg-white border-r border-gray-200">
      <div>
        <h1 class="text-2xl font-semibold mb-4">Courses</h1>
        <div class="flex items-center space-x-3 mb-4">
          <button class="px-3 py-1 rounded-full bg-gray-100 text-sm font-medium">All</button>
          <button class="px-3 py-1 rounded-full bg-gray-100 text-sm font-medium">Active</button>
          <button class="px-3 py-1 rounded-full bg-gray-100 text-sm font-medium">Completed</button>
        </div>
        <div class="flex items-center space-x-2 mb-6">
          <button class="p-2 bg-gray-100 rounded-lg"><img src="https://flagcdn.com/w40/us.png" alt="English" class="w-5 h-5"></button>
          <button class="p-2 bg-gray-100 rounded-lg"><img src="https://flagcdn.com/w40/es.png" alt="Spanish" class="w-5 h-5"></button>
          <button class="p-2 bg-gray-100 rounded-lg"><img src="https://flagcdn.com/w40/fr.png" alt="French" class="w-5 h-5"></button>
          <button class="p-2 bg-gray-100 rounded-lg"><img src="https://flagcdn.com/w40/cn.png" alt="Chinese" class="w-5 h-5"></button>
        </div>
        <div class="space-y-4">
          <div v-for="course in courses" :key="course.id" class="p-4 bg-gray-50 rounded-lg shadow-sm">
            <div class="flex space-x-4">
              <img :src="course.image" :alt="course.title" class="w-24 h-24 object-cover rounded-lg">
              <div class="flex-1">
                <h2 class="text-md font-semibold">{{ course.title }}</h2>
                <p class="text-sm text-gray-600">{{ course.description }}</p>
                <div class="mt-2 flex items-center justify-between text-sm text-gray-500">
                  <span>{{ course.level }}</span>
                  <span>⭐ {{ course.rating }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>

  <!-- Right Content -->
    <main class="w-full md:w-2/3 p-4 flex flex-col">
      <slot></slot>
    </main>

</div>
</div>
</template>

<script setup>
	const courses= [
           {
            id: 1,
            title: 'Learning strategy: how instead of what',
            description: 'This course discusses the main units...',
            level: 'All levels',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
          },
          {
            id: 2,
            title: 'English for career development',
            description: 'This course is designed for non-native speakers...',
            level: 'Intermediate',
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
          },
          {
            id: 3,
            title: 'First steps in Chinese',
            description: 'An elementary-level Korean language course...',
            level: 'Beginner',
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1555431189-0fabf2667795?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
          },
        ]

</script>