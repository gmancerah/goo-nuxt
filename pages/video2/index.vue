<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-100">
    <body class="h-full">
    ```
  -->
  <VideoBig />
  

  
    
    
    <!-- Product details -->
            <div class="mt-10">
              <h2 class="text-sm font-medium text-gray-900">Descripción</h2>

              <div class="prose prose-sm mt-4 text-gray-500" v-html="product.description" />
            </div>

            <div class="mt-8 border-t border-gray-200 pt-8">
              <h2 class="text-sm font-medium text-gray-900">Materiales de estudio</h2>

              <div class="prose prose-sm mt-4 text-gray-500">
                <ul role="list">
                  <li v-for="item in product.details" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>

            <!-- Policies -->
            <section aria-labelledby="policies-heading" class="mt-10">
              <h2 id="policies-heading" class="sr-only">Our Policies</h2>

              <dl class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div v-for="policy in policies" :key="policy.name" class="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                  <dt>
                    <component :is="policy.icon" class="mx-auto h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span class="mt-4 text-sm font-medium text-gray-900">{{ policy.name }}</span>
                  </dt>
                  <dd class="mt-1 text-sm text-gray-500">{{ policy.description }}</dd>
                </div>
              </dl>
            </section>
    
  
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/20/solid'
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
 





import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Profile', href: '#', current: false },
  { name: 'Resources', href: '#', current: false },
  { name: 'Company Directory', href: '#', current: false },
  { name: 'Openings', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

definePageMeta({
  layout: 'layout1'
});

const product = {
  name: 'Basic Tee',
  price: '$35',
  rating: 3.9,
  reviewCount: 512,
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Women', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      id: 1,
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-product-shot-01.jpg',
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-product-shot-02.jpg',
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
  ],
  colors: [
    { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
    { name: 'Heather Grey', bgColor: 'bg-gray-400', selectedColor: 'ring-gray-400' },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: false },
  ],
  description: `
    <p>Este video explora las tendencias actuales de viaje entre las nuevas generaciones, centrándose en destinos de playa. Descubre cómo los millennials y la Generación Z buscan experiencias auténticas y personalizadas, priorizando la sostenibilidad y la tecnología en sus aventuras. Desde workations hasta turismo experiencial, el video revela cómo las agencias de viajes pueden adaptar sus itinerarios para satisfacer las demandas de estos viajeros modernos, ofreciendo una mezcla perfecta de lujo asequible, actividades emocionantes y conexiones sociales significativas en entornos costeros paradisíacos.</p>
  `,
  details: [
    'Infografia',
    'Reporte de viajes Generación Z',
    'Reporte de viaje Generación Millenials',
  ],
}
const policies = [
  { name: 'Video anterior', icon: ArrowLeftIcon, description: "Bienvenida" },
  { name: 'Siguiente Video', icon: ArrowRightIcon, description: 'Prepara tu venta' },
 
]

const route = useRoute()
const video_type = route.query.video
</script>