<template>
	
	        <div class="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
	        	<form @submit.prevent="handleSubmit" class="w-full max-w-md lg:col-span-5 lg:pt-2">
          <div class="w-full max-w-lg lg:max-w-xs">
            <label for="search" class="sr-only">Destino, ciudad o país</label>
            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input id="destination"
        v-model="destination" :class="[defaultClass, customClass]"  placeholder="Destino, ciudad o país" type="search" required @keyup.enter="handleSubmit" />
            </div>
          </div>
          </form>
        </div>
        
    </template>
<script setup>

import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

import { ref } from 'vue';
const route = useRoute();

const destination = ref(route.query.search || '');
const emit = defineEmits(['search']); // Define emit for parent communication

const handleSubmit = () => {
if (destination.value.trim().length >= 3) {
  // Emit the search value to parent component
  emit('search', destination.value);

  // Optional: Use navigateTo if you want to update URL
  navigateTo({
    path: '/results',
    query: { search: destination.value }
  });
} else {
  alert('Por favor, ingresa al menos 3 caracteres.');
}
};


defineProps({
customClass: {
  type: [String, Object, Array],
  default: ''
}
});

const defaultClass = 'block w-11/12 md:w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm/6';

</script>