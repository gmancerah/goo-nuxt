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
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- Property Card -->
        <div v-for="property in properties" :key="property.id" class="property-card bg-white border rounded-lg p-4 shadow-sm">
          <div class="relative">
            <img :src="property.image" alt="House image" class="w-full rounded-lg mb-4">
            <span :class="['absolute top-2 left-2 text-white px-2 py-1 rounded-lg text-xs', property.bgColor]">
              {{ property.size }} 
            </span>
          </div>
          <h2 class="text-lg font-semibold min-h-[4rem]">{{ property.title }}</h2>
          <p class="text-gray-500 text-sm min-h-[3rem]">{{ property.description }} </p>
          <div class="flex items-center mt-4">
            <img :src="property.agentPhoto" alt="Agent photo" class="w-8 h-8 rounded-full mr-2">
            <div class="text-sm">
              <p class="font-medium">{{ property.agentName }}</p>

            </div>
            <!-- <button class="ml-auto px-4 py-1 text-[#76c6af] border border-[#76c6af] rounded-lg">Ver</button> -->
          </div>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Sample data for properties
const properties = ref([
  {
    id: 1,
    image: '/viaje-0.png',
    size: "Curso",
    title: 'Cruceros: Navegando hacia el Éxito',
    description: 'Maximiza ventas con experiencias marítimas.',
    address: '742 Evergreen Terrace',
    age: 6,
    bedrooms: 2,
    bathrooms: 2,
    agentPhoto: 'https://placehold.co/40',
    agentName: 'María López',
    agentContact: '(555) 555-4321',
    bgColor: 'bg-[#e4433c]'
  },
  {
    id: 2,
    image: '/viaje-1.png',
    size: "Curso",
    title: 'Asia: Descubriendo el Mercado Asiático',
    description: 'Estrategias para atraer viajeros a Asia.',
    address: '742 Evergreen Terrace',
    age: 6,
    bedrooms: 2,
    bathrooms: 2,
    agentPhoto: 'https://placehold.co/40',
    agentName: 'Carlos García',
    agentContact: '(555) 555-4322',
    bgColor: 'bg-[#e4433c]'
  },
  {
    id: 3,
    image: '/viaje-2.png',
    size: "Curso",
    title: 'Playas: Paraísos de Arena y Sol',
    description: 'Vende destinos de playa irresistibles.',
    address: '742 Evergreen Terrace',
    age: 6,
    bedrooms: 2,
    bathrooms: 2,
    agentPhoto: 'https://placehold.co/40',
    agentName: 'Ana Fernández',
    agentContact: '(555) 555-4323',
    bgColor: 'bg-[#e4433c]'
  },
  {
    id: 4,
    image: '/viaje-3.png',
    size: "Curso",
    title: 'Grandes Ciudades: El Pulso Urbano',
    description: 'Aprovecha el turismo en metrópolis.',
    address: '742 Evergreen Terrace',
    age: 6,
    bedrooms: 2,
    bathrooms: 2,
    agentPhoto: 'https://placehold.co/40',
    agentName: 'Javier Martínez',
    agentContact: '(555) 555-4324',
    bgColor: 'bg-[#e4433c]'
  },
  {
    id: 5,
    image: '/viaje-4.png',
    size: "Curso",
    title: 'Aventura: Adrenalina y Nuevos Horizontes',
    description: 'Captura el mercado de turismo aventurero.',
    address: '742 Evergreen Terrace',
    age: 6,
    bedrooms: 2,
    bathrooms: 2,
    agentPhoto: 'https://placehold.co/40',
    agentName: 'Lucía Rodríguez',
    agentContact: '(555) 555-4325',
    bgColor: 'bg-[#e4433c]'
  },
  {
    id: 6,
    image: '/viaje-5.png',
    size: "Curso",
    title: 'Gastronomía: Sabores que Venden',
    description: 'Promociona experiencias culinarias únicas.',
    address: '742 Evergreen Terrace',
    age: 6,
    bedrooms: 2,
    bathrooms: 2,
    agentPhoto: 'https://placehold.co/40',
    agentName: 'Miguel Sánchez',
    agentContact: '(555) 555-4326',
    bgColor: 'bg-[#e4433c]'
  },
  {
    id: 7,
    image: '/viaje-6.png',
    size: "Curso",
    title: 'Arqueología: Viajes al Pasado',
    description: 'Ofrece rutas arqueológicas fascinantes.',
    address: '742 Evergreen Terrace',
    age: 6,
    bedrooms: 2,
    bathrooms: 2,
    agentPhoto: 'https://placehold.co/40',
    agentName: 'Sofía Pérez',
    agentContact: '(555) 555-4327',
    bgColor: 'bg-[#e4433c]'
  },
  {
    id: 8,
    image: '/viaje-7.png',
    size: "Curso",
    title: 'Religiosos: Peregrinaciones y Espiritualidad',
    description: 'Explora nichos de turismo religioso.',
    address: '742 Evergreen Terrace',
    age: 6,
    bedrooms: 2,
    bathrooms: 2,
    agentPhoto: 'https://placehold.co/40',
    agentName: 'José Ramírez',
    agentContact: '(555) 555-4328',
    bgColor: 'bg-[#e4433c]'
  },
  {
    id: 9,
    image: '/viaje-8.png',
    size: "Curso",
    title: 'Negocios: Viajes Corporativos Rentables',
    description: 'Optimiza servicios para viajeros de negocios.',
    address: '742 Evergreen Terrace',
    age: 6,
    bedrooms: 2,
    bathrooms: 2,
    agentPhoto: 'https://placehold.co/40',
    agentName: 'Laura Torres',
    agentContact: '(555) 555-4329',
    bgColor: 'bg-[#e4433c]'
  },
  {
    id: 10,
    image: '/viaje-9.png',
    size: "Curso",
    title: 'Familia: Vacaciones para Todos',
    description: 'Diseña experiencias familiares inolvidables.',
    address: '742 Evergreen Terrace',
    age: 6,
    bedrooms: 2,
    bathrooms: 2,
    agentPhoto: 'https://placehold.co/40',
    agentName: 'Fernando Díaz',
    agentContact: '(555) 555-4330',
    bgColor: 'bg-[#e4433c]'
  },
  {
    id: 11,
    image: '/viaje-10.png',
    size: "Curso",
    title: 'Ecológico: Turismo Sostenible',
    description: 'Promueve destinos eco-amigables.',
    address: '742 Evergreen Terrace',
    age: 6,
    bedrooms: 2,
    bathrooms: 2,
    agentPhoto: 'https://placehold.co/40',
    agentName: 'Isabel Morales',
    agentContact: '(555) 555-4331',
    bgColor: 'bg-[#e4433c]'
  },
  {
    id: 12,
    image: '/viaje-11.png',
    size: "Curso",
    title: 'Románticos: Escapadas para Enamorados',
    description: 'Crea paquetes románticos irresistibles.',
    address: '742 Evergreen Terrace',
    age: 6,
    bedrooms: 2,
    bathrooms: 2,
    agentPhoto: 'https://placehold.co/40',
    agentName: 'Alejandro Castillo',
    agentContact: '(555) 555-4332',
    bgColor: 'bg-[#e4433c]'
  },
  {
    id: 13,
    image: '/viaje-12.png',
    size: "Curso",
    title: 'Meditación o Sanación: Retiros de Bienestar',
    description: 'Ofrece experiencias de sanación y paz.',
    address: '742 Evergreen Terrace',
    age: 6,
    bedrooms: 2,
    bathrooms: 2,
    agentPhoto: 'https://placehold.co/40',
    agentName: 'Valentina Herrera',
    agentContact: '(555) 555-4333',
    bgColor: 'bg-[#e4433c]'
  }
]);
</script>