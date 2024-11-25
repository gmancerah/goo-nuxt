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
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Elige la capacitación que te interese</h2>
        <p class="mt-4 text-gray-500">Nuestro objetivo es equiparte con el conocimiento y las herramientas necesarias para que puedas ofrecer a tus clientes experiencias de viaje inolvidables.</p>
      </div>

      <div class="mt-16 space-y-16">
        <div v-for="(feature, featureIdx) in features" :key="feature.name" class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
          <div :class="[featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9', 'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4']">
            <h3 class="text-lg font-medium text-gray-900">{{ feature.name }}</h3>
            <p class="mt-2 text-sm text-gray-500">{{ feature.description }}</p>
          </div>
          <div :class="[featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1', 'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8']">
            <div class="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
              <img :src="feature.imageSrc" :alt="feature.imageAlt" class="object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    name: 'Destinos Exóticos del Sudeste Asiático',
    description:
      'Este curso sumerge a los agentes en la rica cultura y paisajes impresionantes de países como Tailandia, Vietnam y Camboya. Los participantes aprenderán sobre los principales atractivos turísticos, gastronomía local, costumbres y consejos prácticos para viajeros. Se hará énfasis en cómo vender estos destinos a diferentes perfiles de clientes, desde mochileros hasta viajeros de lujo.',
    imageSrc: 'https://picsum.photos/seed/picsum13/800/320',
    imageAlt: 'Destinos Exóticos del Sudeste Asiático',
  },
  {
    name: 'Cruceros por el Mediterráneo: De la Historia a la Modernidad',
    description:
      'Enfocado en uno de los productos turísticos más populares, este curso abarca los principales puertos y rutas de cruceros por el Mediterráneo. Los agentes aprenderán sobre las diferentes líneas de cruceros, sus ofertas únicas, y cómo combinar la experiencia en el barco con excursiones en tierra. Se cubrirán destinos icónicos como Venecia, Santorini y Barcelona, proporcionando información histórica y consejos actuales.',
    imageSrc: 'https://picsum.photos/seed/picsum14/800/320',
    imageAlt: 'Cruceros por el Mediterráneo: De la Historia a la Modernidad.',
  },
  {
    name: 'Aventuras en Patagonia: Entre Glaciares y Pampas',
    description:
      'Este curso se centra en la región de la Patagonia, abarcando tanto el lado argentino como el chileno. Los participantes explorarán virtualmente los parques nacionales, aprenderán sobre actividades de aventura como trekking y kayak, y conocerán la fauna local. Se incluirá información sobre alojamientos únicos, desde estancias rurales hasta hoteles de lujo con vista a los glaciares.',
    imageSrc: 'https://picsum.photos/seed/picsum15/800/320',
    imageAlt: 'Aventuras en Patagonia: Entre Glaciares y Pampas',
  },
    {name: 'Safaris Africanos: De la Sabana a la Selva',
    description:
      'Un viaje virtual por los mejores destinos de safari en África, incluyendo Kenia, Tanzania, Sudáfrica y Botsuana. El curso cubrirá los diferentes tipos de safaris, desde los clásicos en vehículo hasta los safaris a pie o en globo. Los agentes aprenderán sobre la vida silvestre, los mejores momentos para visitar cada región y cómo crear itinerarios que combinen aventura con lujo.',
    imageSrc: 'https://picsum.photos/seed/picsum16/800/320',
    imageAlt: 'Safaris Africanos: De la Sabana a la Selva',
  },
    {name: 'Japón: Tradición y Tecnología',
    description:
      'Este curso ofrece una inmersión en la fascinante cultura japonesa, equilibrando lo tradicional con lo moderno. Los agentes aprenderán sobre las principales ciudades como Tokio y Kioto, pero también sobre destinos menos conocidos. Se cubrirán temas como el sistema de transporte, etiqueta local, festivales tradicionales y experiencias únicas como estadías en ryokans o visitas a onsen. El curso también incluirá información sobre la mejor época para ver los cerezos en flor y cómo navegar por el país si no se habla japonés.',
    imageSrc: 'https://picsum.photos/seed/picsum17/800/320',
    imageAlt: 'Japón: Tradición y Tecnología',
  },
]
</script>