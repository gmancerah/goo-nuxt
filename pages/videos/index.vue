<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <VideosRelated component-title="Videos Horizontal (16:9)" elements-url="/video2"/>

  <VideosRelated component-title="Videos Vertical (3:4)" elements-url="/video"/>
   
</template>

<script setup>


const products2 = [
  {
    id: 1,
    name: 'Titulo',
    href: '/video',
    imageSrc: 'https://picsum.photos/seed/picsum5/300/450',
    imageAlt: "Texto alt de la imagen",
    price: '10 min',
    color: 'Descripción del video, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 1,
    name: 'Titulo',
    href: '/video',
    imageSrc: 'https://picsum.photos/seed/picsum6/300/450',
    imageAlt: "Texto alt de la imagen",
    price: '10 min',
    color: 'Descripción del video, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 1,
    name: 'Titulo',
    href: '/video',
    imageSrc: 'https://picsum.photos/seed/picsum7/300/450',
    imageAlt: "Texto alt de la imagen",
    price: '10 min',
    color: 'Descripción del video, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 1,
    name: 'Titulo',
    href: '/video',
    imageSrc: 'https://picsum.photos/seed/picsum8/300/450',
    imageAlt: "Texto alt de la imagen",
    price: '10 min',
    color: 'Descripción del video, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  // More products...
]
</script>