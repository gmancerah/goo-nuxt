<template>
  <div class="relative ">
    <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 ">
      <div class="px-6 pt-10  lg:col-span-7 lg:px-0 lg:pb-4 lg:pt-40 xl:col-span-6">
        <div class="mx-auto max-w-lg lg:mx-0">
          <!-- <img class="h-11" src="/goo_univ.png" alt="Your Company" /> -->
          
          <h1 class="mt-20 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:mt-10 sm:text-5xl">Descubre el mundo con nosotros</h1>
          <br>
          <SearchInput :customClass="componentClass" />
         <!--  <input type='text' placeholder='Destino, Ciudad o País'
          class="px-4 py-2.5 text-lg rounded-md bg-white border border-gray-400 w-full outline-[#79CAB9]" />
          <div class="mt-6 flex items-center gap-x-6 justify-end mb-1">
            <a href="/results" class="rounded-md text-xl bg-[#79CAB9] px-3.5 py-2.5  font-semibold text-white shadow-sm hover:bg-[#79CAB9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#79CAB9]">Buscar</a>
            
          </div> -->
        </div>
      </div>
      <div class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0 lg:inset-x-0 lg:bottom-0 ">
        <picture>
  <source srcset="/travel-mobile.png" media="(max-width: 1023px)">
  <img src="/travel2.png" class="aspect-[3/2] w-full  object-cover lg:absolute lg:inset-0  lg:aspect-auto lg:h-full">
</picture>
        <!-- <img class="aspect-[3/2] w-full  object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" src="/travel.png" alt="" /> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const componentClass = ref('px-4 py-2.5 text-lg rounded-md bg-white border border-gray-400 w-full outline-[#79CAB9] mb-20');
</script>