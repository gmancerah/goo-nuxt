<template>
  <div class="mt-16 sm:mt-20 hidden md:block">
    <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8"  >
      <div class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded sm:rounded  sm:w-72  dark:bg-zinc-800 rotate-2 destinos" v-for="item in destinos">
          <img alt="" loading="lazy" width="3744" height="5616" decoding="async" data-nimg="1" class="absolute inset-0 h-full w-full object-cover" :src="item.img" style="color: transparent;">
      </div>
    </div>
  </div>
</template>

<script setup>
  
  const destinos = [
  { img:"/0.png" },
  { img:"/1.png" },
  { img:"/2.png" },
  { img:"/3.png" },
  { img:"/4.png" },
]
</script>