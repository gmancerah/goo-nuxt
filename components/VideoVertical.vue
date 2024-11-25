<template>
  
    
    <div class="relative w-full max-w-[337.5px] mx-auto">
  <div class="relative w-full" style="padding-top: 133.33%;">
    	<iframe frameborder="0" width="360" height="640" src="https://geo.dailymotion.com/player/xzity.html?video=x97c9sq&mute=false" allowfullscreen allow="autoplay; fullscreen; picture-in-picture; web-share" class="absolute top-0 left-0 w-full h-full max-h-[450px]"></iframe>
    </div>
    </div>
  
</template>
<script setup>
import { ref, onMounted } from 'vue';

const scriptContainer = ref(null);
const scriptUrl = 'https://geo.dailymotion.com/player/xzity.js'; // Reemplaza esto con la ruta real de tu script
const videoId = 'x97c9sq'; // Reemplaza esto con el ID de video real

// onMounted(() => {
//   if (scriptContainer.value) {
//     const scriptElement = document.createElement('script');
//     scriptElement.src = scriptUrl;
//     scriptElement.async = true;
//     scriptElement.setAttribute('data-video', videoId);
//     scriptContainer.value.appendChild(scriptElement);
//   }
// });
</script>

