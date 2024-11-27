<script setup lang="ts">
import { ref, watch } from 'vue';
const route = useRoute();
const { result, search } = useAlgoliaSearch('goouniversity');
const pending = ref(true);
const error = ref(null);

const handleSearch = async (searchQuery: string) => {
await fetchData(searchQuery);
};

const fetchData = async (query: string) => {
try {
  pending.value = true;
  error.value = null;

  await search({ query });

  // Store data in local storage
  localStorage.setItem('searchResult', JSON.stringify(result.value));
} catch (e) {
  error.value = e;
} finally {
  pending.value = false;
}
};

// Load data from local storage if available
const loadFromLocalStorage = () => {
const storedData = localStorage.getItem('searchResult');
if (storedData) {
  result.value = JSON.parse(storedData);
}
};

// Watch for route query changes
watch(() => route.query.search, (newSearch) => {
if (newSearch) {
  fetchData(newSearch as string);
}
}, { immediate: true });

onMounted(() => {
loadFromLocalStorage();

// Get initial search query from URL
const searchQuery = route.query.search as string || 'reno';
if (searchQuery) {
  fetchData(searchQuery);
}
});
</script>


<template>
  <!-- Container -->
  <div class="flex flex-col-reverse lg:flex-row gap-6 max-w-7xl mx-auto mt-8">


    <!-- Sidebar -->
    <aside class="w-full lg:w-1/4 hidden lg:block">
      <!-- Filter Section -->
      <div class="bg-white p-4 rounded-lg shadow-sm mb-4">
        <h3 class="text-lg font-semibold mb-4">Filtrar</h3>
        <div class="flex items-center justify-between mb-2">
          <span>Cursos</span>
          <input  type="checkbox" class="h-4 w-4 rounded border-gray-300 text-[#f29c35] focus:ring-[#f6da09]" checked />
        </div>
        <div class="flex items-center justify-between mb-2">
          <span>Videos</span>
          <input  type="checkbox" class="h-4 w-4 rounded border-gray-300 text-[#f29c35] focus:ring-[#f6da09]" checked />
        </div>
        <div class="flex items-center justify-between mb-2">
          <span>Infografias</span>
          <input  type="checkbox" class="h-4 w-4 rounded border-gray-300 text-[#f29c35] focus:ring-[#f6da09]" checked />
        </div>
        <div class="flex items-center justify-between mb-2">
          <span>Articulos</span>
          <input  type="checkbox" class="h-4 w-4 rounded border-gray-300 text-[#f29c35] focus:ring-[#f6da09]" checked />
        </div>
      </div>

      <!-- Help Section -->
      <div class="bg-white p-4 rounded-lg shadow-sm">
        <h3 class="text-lg font-semibold mb-2">¿Hay algun curso que te interese?</h3>
        <p class="text-gray-600 text-sm mb-4">Si no encuentras algun curso o te gustaría ver algun tema, puedes solicitarlo.</p>
        <button class="w-full bg-[#76c6af] text-white py-2 rounded-lg">Contacto / Sugerencias</button>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1">
      <!-- Top Controls -->
<!--       <div class="flex justify-between items-center mb-4">
        <select class="border border-gray-300 rounded-lg p-2 text-gray-700">
          <option>12 per page</option>
          <option>24 per page</option>
          <option>48 per page</option>
        </select>
        <div class="flex items-center space-x-2">
          <button class="p-2 text-gray-500 rounded-lg hover:bg-gray-200">&lt;</button>
          <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg">1</span>
          <button class="p-2 text-gray-500 rounded-lg hover:bg-gray-200">&gt;</button>
        </div>
        <select class="border border-gray-300 rounded-lg p-2 text-gray-700">
          <option>Greater than 50 m²</option>
          <option>Greater than 100 m²</option>
        </select>
      </div>
 -->
      <!-- Property Listings -->
      <div v-if="pending">Loading...</div>
        <div v-if="error">{{ error.message }}</div>
        <div v-if="!pending && !error">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" v-if="result.hits && result.hits.length > 0">
        

        <!-- Property Card -->
        
        <div v-for="item in result.hits" :key="item.id" class="property-card bg-white border rounded-lg p-4 shadow-sm">
          <div class="relative">
             <img :src="item.image || 'https://placehold.co/598x315'" alt="Image for {{ item.title }}" />
            <span class="absolute top-2 left-2 text-white px-2 py-1 rounded-lg text-xs">
              {{ item.content_type }} 
            </span>
          </div>
          <h2 class="text-lg font-semibold min-h-[4rem] line-clamp-2">{{ item.title }}</h2>
          <p class="text-gray-500 text-sm min-h-[3rem] line-clamp-3">{{ item.summary }} </p>
          
        </div>
        </div>
        <div v-else>
        <div class="bg-white">
    <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
        <h2 class="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">Aún no tenemos algo relacionado con tu busqueda</h2>
        <p class="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-300">No te preocupes cada semana agregamos nuevo contenido, puedes intentar con otra busqueda.</p>

        <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
          <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7" />
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stop-color="#7775D6" />
              <stop offset="1" stop-color="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
      </div>
      </div>
    </div>

    
  </div>
</template>


