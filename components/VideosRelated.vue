<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">{{props.componentTitle}}</h2>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="index in elementsNumber"  class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img v-bind:src="'https://picsum.photos/seed/picsum'+ index + '/450/300'" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="props.elementsUrl">
                  <span aria-hidden="true" class="absolute inset-0" />
                  Titulo {{}}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">Descripción del video, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <p class="text-sm font-medium text-gray-900">10 min</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'

  const props = defineProps({
  componentTitle: {
    type: String,
    default: 'Relacionados'
  },
  elementsNumber: {
    type: Number,
    default: 8
  },
  elementsUrl: {
    type: String,
    default: "/video"
  },
})
  const products = [
  {
    id: 1,
    name: 'Titulo',
    href: '/video?video=large',
    imageSrc: 'https://picsum.photos/seed/picsum1/450/300',
    imageAlt: "Texto alt de la imagen",
    price: '10 min',
    color: 'Descripción del video, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 1,
    name: 'Titulo',
    href: '/video?video=large',
    imageSrc: 'https://picsum.photos/seed/picsum2/450/300',
    imageAlt: "Texto alt de la imagen",
    price: '10 min',
    color: 'Descripción del video, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 1,
    name: 'Titulo',
    href: '/video?video=large',
    imageSrc: 'https://picsum.photos/seed/picsum3/450/300',
    imageAlt: "Texto alt de la imagen",
    price: '10 min',
    color: 'Descripción del video, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 1,
    name: 'Titulo',
    href: '/video?video=large',
    imageSrc: 'https://picsum.photos/seed/picsum4/450/300',
    imageAlt: "Texto alt de la imagen",
    price: '10 min',
    color: 'Descripción del video, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 1,
    name: 'Titulo',
    href: '/video?video=large',
    imageSrc: 'https://picsum.photos/seed/picsum9/450/300',
    imageAlt: "Texto alt de la imagen",
    price: '10 min',
    color: 'Descripción del video, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 1,
    name: 'Titulo',
    href: '/video?video=large',
    imageSrc: 'https://picsum.photos/seed/picsum10/450/300',
    imageAlt: "Texto alt de la imagen",
    price: '10 min',
    color: 'Descripción del video, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 1,
    name: 'Titulo',
    href: '/video?video=large',
    imageSrc: 'https://picsum.photos/seed/picsum11/450/300',
    imageAlt: "Texto alt de la imagen",
    price: '10 min',
    color: 'Descripción del video, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 1,
    name: 'Titulo',
    href: '/video?video=large',
    imageSrc: 'https://picsum.photos/seed/picsum12/450/300',
    imageAlt: "Texto alt de la imagen",
    price: '10 min',
    color: 'Descripción del video, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  // More products...
]
</script>