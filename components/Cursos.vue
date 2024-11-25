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
    <section aria-labelledby="features-heading" class="relative mt-8 sm:mt-20">
      <div class="aspect-h-2 aspect-w-3 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
        <img src="/public/course01.png" alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
      </div>

      <div class="mx-auto max-w-2xl px-4 pb-24 pt-4  sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
        <div class="lg:col-start-2">
          <h2 id="features-heading" class="font-medium text-gray-500">Curso: Turismo de Playa</h2>
          <p class="mt-4 text-4xl font-bold tracking-tight text-gray-900">Creación de Experiencias Inolvidables</p>
          <p class="mt-4 text-gray-500">A través de módulos interactivos y estudios de caso reales, aprenderás a maximizar el potencial de los destinos costeros, desde la planificación de itinerarios hasta la gestión sostenible de recursos.</p>

          <dl class="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-2">
            <div v-for="feature in features" :key="feature.name">
              <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
              <dd class="mt-2 text-gray-500">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const features = [
  {
    name: 'Explora el mundo desde tu aula',
    description: 'Nuestros cursos te ofrece una experiencia inmersiva que te permite descubrir destinos globales y sus culturas sin salir de casa.',
  },
  {
    name: 'Expertos en la industria del turismo',
    description: 'Aprende de profesionales con años de experiencia en viajes, que compartirán sus secretos y consejos para convertirte en un experto',
  },
  {
    name: 'Planificación de viajes personalizada',
    description:
      'Desarrolla habilidades para crear itinerarios únicos y personalizados que impresionarán a tus clientes y harán que cada viaje sea inolvidable.',
  },
  { name: 'Contactos globales', description: ' Conéctate con una comunidad internacional de agentes de viajes y profesionales del turismo, ampliando tus oportunidades de negocio ' },
]
</script>