
<template>
<div class=" py-16 sm:py-24 lg:py-32">
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
      <div class="max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
        <h2 class="inline sm:block lg:inline xl:block">Descubre el mundo con nosotros</h2>
        {{ ' ' }}
        <!-- <h3 class="text-lg inline sm:block lg:inline xl:block">Encuentra todo lo que necesitas saber para planificar el viaje perfecto para tus clientes</h3> -->
      </div>
      <form class="w-full max-w-md lg:col-span-5 lg:pt-2">
        <div class="flex gap-x-4">
          <label for="email-address" class="sr-only">Destino</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6" placeholder="Ingresa un destino, ciudad o país" />
<a href="/results">
          <button type="button" class="flex-none rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">Buscar</button>
        </a>
        </div>
        <!-- <p class="mt-4 text-xs leading-6 text-gray-900">Utiliza nuestro buscador de destinos para acceder a información detallada y actualizada sobre una amplia variedad de lugares.</p> -->
      </form>
    </div>
  </div>
</template>
