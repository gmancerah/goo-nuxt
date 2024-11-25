<template>
  <main id="course-details">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 lg:col-span-8 ltablet:col-span-8">
        <div>
          <div class="relative w-full overflow-hidden rounded-md pt-[56.25%] [&>div]:absolute [&>div]:start-0 [&>div]:top-0 [&>div]:!w-full">
            <div played="0" style="width: 100%; height: 100%;">
              <video preload="auto" src="/img/video/learning.mp4" style="width: 100%; height: 100%;"></video>
            </div>
            <div class="group/react-slider absolute inset-0 z-[1] flex flex-col justify-between bg-muted-900/60" style="visibility: visible;">
              <div class="hidden md:flex items-center justify-between px-8 py-6">
                <div>
                  <p class="text-sm uppercase text-white/80">Capítulo 1 - E01</p>
                  <h2 class="text-xl font-medium tracking-wide text-white">Introducción</h2>
                </div>
              </div>
              <!-- Video controls -->
              <div class="flex items-center justify-center gap-2 pt-10 md:pt-0 ptablet:relative ptablet:-top-8 ltablet:relative ltablet:-top-8 lg:relative lg:-top-8">
                <!-- Control buttons -->
                <button class="flex h-8 w-8 items-center justify-center rounded-full text-white transition-colors duration-300 hover:bg-muted-100 hover:text-muted-600 dark:hover:bg-muted-800 dark:hover:text-muted-100">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22 12c0-5.523-4.477-10-10-10a9.98 9.98 0 0 0-7.553 3.446L2 3v6h6L5.865 6.865A8 8 0 1 1 4 12H2c0 5.523 4.477 10 10 10s10-4.477 10-10m-7.5-2V8.5h-5v4.25h3.125a.625.625 0 1 1 0 1.25H9.5v1.5h3.125a2.125 2.125 0 0 0 0-4.25H11V10z"></path>
                  </svg>
                </button>
                <!-- Play button -->
                <button type="button" class="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full border-2 border-white text-white transition-colors duration-300 hover:border-danger-600 hover:bg-danger-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none h-5 w-5 md:h-6 md:w-6 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path>
                  </svg>
                </button>
                <!-- Additional controls -->
                <!-- ... Rest of the controls ... -->
              </div>
              <!-- Progress bar and time -->
              <div class="relative">
                <div class="relative">
  <!-- Progress bar container -->
  <div class="group/progress relative h-1.5 w-full bg-muted-700">
    <!-- Buffered progress -->
    <div class="absolute h-full w-[30%] bg-muted-500"></div>
    <!-- Actual progress -->
    <div class="absolute h-full w-[0%] bg-primary-600">
      <!-- Progress handle -->
      <div class="absolute -end-2 -top-1.5 h-4 w-4 scale-0 rounded-full border-2 border-primary-600 bg-white transition-transform duration-300 group-hover/progress:scale-100"></div>
    </div>
  </div>
  
  <!-- Time indicators -->
  <div class="mt-2 flex items-center justify-between px-2">
    <!-- Current time -->
    <span class="text-xs text-white">00:00</span>
    <!-- Controls -->
    <div class="flex items-center gap-2">
      <!-- Volume control -->
      <div class="group/volume relative flex items-center">
        <button class="flex h-8 w-8 items-center justify-center rounded-full text-white transition-colors duration-300 hover:bg-muted-100 hover:text-muted-600 dark:hover:bg-muted-800 dark:hover:text-muted-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 iconify iconify--ph" width="1em" height="1em" viewBox="0 0 256 256">
            <path fill="currentColor" d="M155.51 24.81a8 8 0 0 0-8.42.88L77.25 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A8 8 0 0 0 160 224V32a8 8 0 0 0-4.49-7.19M144 207.64l-59.09-45.95A7.94 7.94 0 0 0 80 160H32V96h48a7.94 7.94 0 0 0 4.91-1.69L144 48.36Zm53.92-122.29a8 8 0 0 1 0 11.31L183.31 111l14.34 14.34a8 8 0 0 1-11.31 11.31L172 122.34l-14.34 14.35a8 8 0 0 1-11.31-11.31L160.69 111l-14.34-14.34a8 8 0 0 1 11.31-11.31L172 99.66l14.34-14.35a8 8 0 0 1 11.58.04"></path>
          </svg>
        </button>
        <!-- Volume slider -->
        <div class="invisible absolute -top-14 start-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-3 py-2 opacity-0 shadow-lg transition-all duration-300 group-hover/volume:visible group-hover/volume:opacity-100 dark:bg-muted-800">
          <div class="relative h-1 w-24 bg-muted-200 dark:bg-muted-700">
            <div class="absolute h-full w-[65%] bg-primary-600">
              <div class="absolute -end-2 -top-1.5 h-4 w-4 rounded-full border-2 border-primary-600 bg-white"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Settings button -->
      <button class="flex h-8 w-8 items-center justify-center rounded-full text-white transition-colors duration-300 hover:bg-muted-100 hover:text-muted-600 dark:hover:bg-muted-800 dark:hover:text-muted-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 iconify iconify--ph" width="1em" height="1em" viewBox="0 0 256 256">
          <path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m88-29.84q.06-2.16 0-4.32l14.92-18.64a8 8 0 0 0 1.48-7.06a107.21 107.21 0 0 0-10.88-26.25a8 8 0 0 0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186 40.54a8 8 0 0 0-3.94-6a107.71 107.71 0 0 0-26.25-10.87a8 8 0 0 0-7.06 1.49L130.16 40h-4.32L107.2 25.11a8 8 0 0 0-7.06-1.49a107.71 107.71 0 0 0-26.25 10.87a8 8 0 0 0-3.94 6L67.31 64.27q-1.56 1.49-3 3l-23.72 2.64a8 8 0 0 0-6 3.93a107.21 107.21 0 0 0-10.88 26.25a8 8 0 0 0 1.48 7.06L40 125.84q-.06 2.16 0 4.32l-14.92 18.64a8 8 0 0 0-1.48 7.06a107.21 107.21 0 0 0 10.88 26.25a8 8 0 0 0 6 3.93l23.72 2.64q1.48 1.56 3 3L70 215.46a8 8 0 0 0 3.94 6a107.71 107.71 0 0 0 26.25 10.87a8 8 0 0 0 7.06-1.49L125.84 216h4.32l18.64 14.92a8 8 0 0 0 7.06 1.49a107.71 107.71 0 0 0 26.25-10.87a8 8 0 0 0 3.94-6l2.64-23.78q1.56-1.49 3-3l23.72-2.64a8 8 0 0 0 6-3.93a107.21 107.21 0 0 0 10.88-26.25a8 8 0 0 0-1.48-7.06ZM201.5 142l-22.6 2.52a8 8 0 0 0-6.76 4.35a71.88 71.88 0 0 1-6.27 9.15a8 8 0 0 0-1.36 8l8.95 22.4a92.48 92.48 0 0 1-11.34 4.73l-17.76-14.21a8 8 0 0 0-8.11-1.3a72.28 72.28 0 0 1-19.37 2.53a72.28 72.28 0 0 1-19.37-2.53a8 8 0 0 0-8.11 1.3l-17.76 14.21a92.48 92.48 0 0 1-11.34-4.73l8.95-22.4a8 8 0 0 0-1.36-8a71.88 71.88 0 0 1-6.27-9.15a8 8 0 0 0-6.76-4.35L30.5 142a91.66 91.66 0 0 1-1.89-12.17l14.21-17.76a8 8 0 0 0 1.3-8.11a72.28 72.28 0 0 1-2.53-19.37a72.28 72.28 0 0 1 2.53-19.37a8 8 0 0 0-1.3-8.11L28.61 39.34a92.48 92.48 0 0 1 4.73-11.34l22.4 8.95a8 8 0 0 0 8-1.36a71.88 71.88 0 0 1 9.15-6.27a8 8 0 0 0 4.35-6.76l2.52-22.6a91.66 91.66 0 0 1 12.17-1.89l17.76 14.21a8 8 0 0 0 8.11 1.3a72.28 72.28 0 0 1 19.37-2.53a72.28 72.28 0 0 1 19.37 2.53a8 8 0 0 0 8.11-1.3l17.76-14.21a91.66 91.66 0 0 1 12.17 1.89l2.52 22.6a8 8 0 0 0 4.35 6.76a71.88 71.88 0 0 1 9.15 6.27a8 8 0 0 0 8 1.36l22.4-8.95a92.48 92.48 0 0 1 4.73 11.34l-14.21 17.76a8 8 0 0 0-1.3 8.11a72.28 72.28 0 0 1 2.53 19.37a72.28 72.28 0 0 1-2.53 19.37a8 8 0 0 0 1.3 8.11l14.21 17.76a91.66 91.66 0 0 1-1.89 12.17"></path>
        </svg>
      </button>
      <!-- Fullscreen button -->
      <button class="flex h-8 w-8 items-center justify-center rounded-full text-white transition-colors duration-300 hover:bg-muted-100 hover:text-muted-600 dark:hover:bg-muted-800 dark:hover:text-muted-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 iconify iconify--ph" width="1em" height="1em" viewBox="0 0 256 256">
          <path fill="currentColor" d="M216 48v40a8 8 0 0 1-16 0V61.66L154.34 107.3a8 8 0 0 1-11.31-11.31L188.69 50H162a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8M107.31 148.7a8 8 0 0 0-11.31 0L50.34 194.34V168a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h40a8 8 0 0 0 0-16H55.66l45.66-45.66a8 8 0 0 0-.01-11.64M208 168a8 8 0 0 0-8 8v26.34l-45.66-45.66a8 8 0 0 0-11.31 11.31L188.69 214H162a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8M50.34 61.66V88a8 8 0 0 1-16 0V48a8 8 0 0 1 8-8h40a8 8 0 0 1 0 16H55.66l45.66 45.66a8 8 0 0 1-11.31 11.31Z"></path>
        </svg>
      </button>
    </div>
    <!-- Duration -->
    <span class="text-xs text-white">10:45</span>
  </div>
</div>
              </div>
            </div>
          </div>
        </div>
        <!-- Course sections -->
        <div class="flex flex-col md:flex-row md:items-center justify-between border-b border-muted-200 py-6 dark:border-muted-800">
          <div class="flex flex-col md:flex-row md:items-center justify-between border-b border-muted-200 py-6 dark:border-muted-800">
  <div class="mb-6 md:mb-0">
    <p class="text-sm uppercase text-muted-500 dark:text-muted-100">Capitulo1 - Introducción</p>
    <h2 class="text-xl font-medium capitalize tracking-wide text-muted-800 dark:text-muted-100">Gastronomía: Sabores que Venden</h2>
  </div>
  
  <div class="flex items-center gap-2">
    <!-- Like button -->
    <div class="tooltip-wrapper">
      <div class="tooltip-children">
        <button class="cursor-pointer relative inline-flex items-center justify-center gap-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 rounded-lg h-10 w-10 [&>span>.loader]:text-danger-500 bg-danger-500/10 dark:bg-danger-500/20 text-danger-500 enabled:hover:bg-danger-500/20 dark:enabled:hover:bg-danger-500/30 active:enabled:bg-danger-500/10 dark:active:enabled:bg-danger-500/10 shrink-0  undefined">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 iconify iconify--pepicons-pencil" width="1em" height="1em" viewBox="0 0 20 20">
            <path fill="currentColor" fill-rule="evenodd" d="M10 4.543c-1.25-.98-2.965-1.245-4.432-.895C3.678 4.1 2 5.621 2 8.163c0 3.326 2.88 6.016 7.571 8.24a1 1 0 0 0 .857 0C15.12 14.18 18 11.49 18 8.164c0-2.542-1.678-4.064-3.568-4.515c-1.467-.35-3.183-.084-4.432.895"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Share button -->
    <div class="tooltip-wrapper">
      <div class="tooltip-children">
        <button class="cursor-pointer relative inline-flex items-center justify-center gap-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 rounded-lg h-10 w-10 [&>span>.loader]:text-muted-500 dark:[&>span>.loader]:text-muted-200 bg-white hover:enabled:bg-muted-50 active:enabled:bg-muted-100 hover:enabled:border-muted-300 dark:hover:enabled:border-muted-700 border border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100 dark:bg-muted-950 dark:hover:enabled:bg-muted-900 dark:active:enabled:bg-muted-950 shrink-0  undefined">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 iconify iconify--majesticons" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20 12l-6.4-7v3.5C10.4 8.5 4 10.6 4 19c0-1.167 1.92-3.5 9.6-3.5V19z"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Email button -->
    <div class="tooltip-wrapper">
      <div class="tooltip-children">
        <button class="cursor-pointer relative inline-flex items-center justify-center gap-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 rounded-lg h-10 w-10 [&>span>.loader]:text-muted-500 dark:[&>span>.loader]:text-muted-200 bg-white hover:enabled:bg-muted-50 active:enabled:bg-muted-100 hover:enabled:border-muted-300 dark:hover:enabled:border-muted-700 border border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100 dark:bg-muted-950 dark:hover:enabled:bg-muted-900 dark:active:enabled:bg-muted-950 shrink-0  undefined">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 iconify iconify--fluent" width="1em" height="1em" viewBox="0 0 20 20">
            <path fill="currentColor" d="M18 7.373V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.373l7.746 4.558a.5.5 0 0 0 .508 0zM15.5 4a2.5 2.5 0 0 1 2.485 2.223L10 10.92L2.015 6.223A2.5 2.5 0 0 1 4.5 4z"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Author section -->
<div class="flex items-center justify-between border-b border-muted-200 py-6 dark:border-muted-800">
  <div class="flex items-center gap-2">
    <div class="h-12 w-12 relative shrink-0 block text-[.8rem] rounded-full bg-muted-100 text-muted-500 dark:bg-muted-700/60 dark:text-muted-200">
      <img alt="" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" class="block w-full rounded-full" src="/img/avatars/2.svg" style="color: transparent;">
    </div>
    <div>
      <p class="text-xs text-muted-500 dark:text-muted-100">Instructor</p>
      <h2 class="text-base font-medium tracking-wide text-muted-800 dark:text-muted-100">Marco Hernandez</h2>
    </div>
  </div>
  
  <!-- Next Capítulo button -->
  <div>
    <button class="cursor-pointer relative inline-flex items-center justify-center gap-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 rounded-lg h-10 px-4 py-2 [&>span>.loader]:text-muted-500 dark:[&>span>.loader]:text-muted-200 bg-muted-300/30 dark:bg-muted-300/10 text-muted-500 dark:text-muted-400 enabled:hover:bg-muted-300/60 dark:enabled:hover:bg-muted-300/20 active:enabled:bg-muted-300/30 dark:active:enabled:bg-muted-300/10 inline-flex items-center gap-1 whitespace-nowrap text-center text-sm  undefined">
      <span>Siguiente modulo</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" fill-rule="evenodd" d="M17.5 9.402c2 1.155 2 4.041 0 5.196l-9 5.196c-2 1.155-4.5-.288-4.5-2.598V6.804c0-2.31 2.5-3.753 4.5-2.598zM21 5a1 1 0 1 0-2 0v14a1 1 0 1 0 2 0z" clip-rule="evenodd"></path>
      </svg>
    </button>
  </div>


</div>
        </div>
        <!-- Downloads section -->
        <div class="border-b border-muted-200 py-6 dark:border-muted-800"><div><h2 class="mb-3 text-base font-medium capitalize tracking-wide text-muted-800 dark:text-muted-100">Descripción</h2><p class="max-w-2xl text-sm leading-snug text-muted-500 dark:text-muted-100">En este capítulo inicial, los agentes de viajes comprenderán cómo la gastronomía se ha convertido en uno de los principales motivadores de viaje en la actualidad. Se analizará el creciente fenómeno del turismo gastronómico y su impacto en la industria de viajes, así como las características específicas del viajero que busca experiencias culinarias. Los participantes aprenderán a identificar oportunidades de venta basadas en intereses gastronómicos y a comprender el valor agregado que la gastronomía aporta a cualquier itinerario turístico.</p></div></div>
        <div class="border-b border-muted-200 py-6 dark:border-muted-800">
          <!-- ... Downloads content ... -->

        </div>
      </div>
      <!-- Sidebar -->
      <div class="col-span-12 lg:col-span-4 ltablet:col-span-4">
        <div class="col-span-12 lg:col-span-4 ltablet:col-span-4">
  <!-- Course info card -->
  <div class="sticky top-6">
    <div class="border border-muted-200 rounded-xl bg-white dark:bg-muted-900 dark:border-muted-800">
      <!-- Card header -->
      <div class="p-6">
        <div class="mb-2 flex items-center justify-between">
          <h4 class="font-heading text-xl text-muted-800 dark:text-white">Detalles del curso</h4>
          <span class="flex h-7 min-w-[46px] items-center justify-center rounded-full border border-success-200 bg-success-100 px-2 text-xs font-medium leading-none text-success-600 dark:border-success-500/20 dark:bg-success-500/10 dark:text-success-400">
            Repetición
          </span>
        </div>
        <p class="text-sm text-muted-400">Promociona experiencias culinarias únicas.</p>
      </div>

      <!-- Course stats -->
      <div class="grid grid-cols-3 border-y border-muted-200 dark:border-muted-800">
        <!-- Duration -->
        <div class="p-4 text-center">
          <span class="block font-heading text-sm text-muted-800 dark:text-white">Duración</span>
          <span class="block text-xs text-muted-400">2h 45m</span>
        </div>
        <!-- Videos -->
        <div class="border-x border-muted-200 p-4 text-center dark:border-muted-800">
          <span class="block font-heading text-sm text-muted-800 dark:text-white">Videos</span>
          <span class="block text-xs text-muted-400">10 videos</span>
        </div>
        <!-- Resources -->
        <div class="p-4 text-center">
          <span class="block font-heading text-sm text-muted-800 dark:text-white">Recursos</span>
          <span class="block text-xs text-muted-400">32 archivos</span>
        </div>
      </div>

      <!-- Course features -->
      <div class="space-y-4 p-6">
        <div class="flex items-center gap-2">
          <div class="flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-primary-500 dark:bg-primary-500/10 dark:text-primary-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 iconify iconify--ph" width="1em" height="1em" viewBox="0 0 256 256">
              <path fill="currentColor" d="M224 152v56a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0M92 124l32 32a8 8 0 0 0 11.3 0l32-32a8 8 0 0 0-11.3-11.3L136 132.7V40a8 8 0 0 0-16 0v92.7l-20-20a8 8 0 0 0-11.3 11.3Z"></path>
            </svg>
          </div>
          <div class="flex-1">
            <span class="block font-heading text-sm text-muted-800 dark:text-white">Descarga de recursos</span>
            <span class="block text-xs text-muted-400">Descarga todos los archivos</span>
          </div>
        </div>

       
        <div class="flex items-center gap-2">
          <div class="flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-primary-500 dark:bg-primary-500/10 dark:text-primary-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 iconify iconify--ph" width="1em" height="1em" viewBox="0 0 256 256">
              <path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m48-88a8 8 0 0 1-8 8h-40a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v48h32a8 8 0 0 1 8 8"></path>
            </svg>
          </div>
          <div class="flex-1">
            <span class="block font-heading text-sm text-muted-800 dark:text-white">Acceso por siempre</span>
            <span class="block text-xs text-muted-400">Aprende a tu propio ritmo</span>
          </div>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="space-y-3 p-6">
        <button type="button" class="relative w-full rounded-xl bg-primary-500 px-4 py-3 text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:ring-offset-muted-900">
          Continuar aprendiendo
        </button>
        <button type="button" class="relative w-full rounded-xl border border-muted-200 bg-white px-4 py-3 text-sm font-medium text-muted-600 hover:border-muted-300 hover:text-muted-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:border-muted-700 dark:bg-muted-800 dark:text-muted-200 dark:hover:border-muted-600 dark:hover:text-muted-100 dark:ring-offset-muted-900">
          Descarga recursos
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-6"><div class="relative w-full transition-all duration-300 bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800 rounded-lg p-6"><div class="mb-2 flex items-center justify-between"><span class="relative inline-flex h-7 items-center justify-center font-sans whitespace-nowrap px-3 text-center text-xs gap-1 leading-10 transition-all duration-300 rounded-lg bg-success-500/10 dark:bg-success-500/20 text-success-500 capitalize">Para todo publico</span><a class="group flex items-center gap-2 text-muted-400 underline-offset-4 transition-colors duration-300 hover:text-primary-500 hover:underline" href="##"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1 iconify iconify--lucide" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 19l-7-7l7-7m7 7H5"></path></svg><span class="text-sm">Back</span></a></div><h2 class="mb-4 text-xl text-muted-800 dark:text-muted-100">Introducción a la Gastronomía como Producto Turístico</h2><p class="text-sm text-muted-500 dark:text-muted-100">Va dirigido tanto a agentes independientes como a asesores de viajes de agencias establecidas que deseen expandir su portafolio de servicios y capitalizar el creciente mercado del turismo gastronómico.</p><div class="mt-4 flex items-center justify-between"><div><span class="text-xs font-medium uppercase leading-none text-muted-400">5 Capítulos</span><span class="px-2">·</span><span class="text-sm font-medium text-primary-500">2h 33m</span></div><div><button class=" bg-amber-500 cursor-pointer relative inline-flex items-center justify-center gap-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 rounded-lg h-10 px-4 py-2 [&amp;>span>.loader]:text-muted-100 border border-primary-500 bg-primary-500 text-white enabled:hover:bg-primary-600 active:enabled:bg-primary-400 inline-flex items-center gap-1 whitespace-nowrap text-center text-sm  undefined">Adquierelo por <span class="ps-2 text-base font-semibold">$890.00 MX</span></button></div></div></div><div class="relative w-full transition-all duration-300 bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800 rounded-lg shadow-xl shadow-muted-300/30 dark:shadow-muted-800/20  
        
        p-6
      "><div role="button" class="flex items-center justify-between  "><div><div><p class="text-xs uppercase leading-none text-muted-500 dark:text-muted-100">Capítulo 1</p><h2 class="text-base font-medium capitalize tracking-wide text-muted-800 dark:text-muted-100">Introducción</h2></div></div><div class="pointer-events-none transition-all duration-300 rotate-90 "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="text-muted-400 iconify iconify--lucide" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 18l6-6l-6-6"></path></svg></div></div><div class="grid grid-cols-1 gap-4 overflow-hidden transition-all duration-300 ease-in-out mt-3" style="max-height: 228px;"><div class="flex items-center justify-between"><div><span class="relative inline-flex h-7 items-center justify-center font-sans whitespace-nowrap px-3 text-center text-xs gap-1 leading-10 transition-all duration-300 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 text-primary-500 capitalize">Gratis</span></div><div class="flex items-center gap-1 text-muted-400"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="h-4 w-4 iconify iconify--mdi" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m19.03 7.39l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c5 0 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61M13 14h-2V7h2zm2-13H9v2h6z"></path></svg><span class="text-sm">18:56</span></div></div><div class="mt-4"><ul class="space-y-4 pb-4 ps-2"><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500 bg-primary-500 text-white hover:enabled:bg-primary-600
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg><span class="pointer-events-none absolute start-1/2 top-1/2 z-10 block -translate-x-1/2 -translate-y-1/2"><svg role="progressbar" aria-valuenow="0" aria-valuemax="100" class="block -rotate-90 undefined" viewBox="0 0 45 45" width="65" height="65"><circle class="text-muted-200 stroke-current 
          dark:text-muted-700
          
        " stroke-width="1" fill="none" cx="50%" cy="50%" r="15.91549431"></circle><circle class="stroke-current transition-all duration-500
          text-primary-500
          
          
          
          
        " stroke-width="1" stroke-dasharray="0,100" stroke-linecap="round" fill="none" cx="50%" cy="50%" r="15.91549431"></circle></svg></span></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            font-semibold text-primary-500
                          ">Objetivos del curso</button><div class="ms-auto"><span class="text-xs text-muted-400">6:12</span></div></li><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">Requisitos</button><div class="ms-auto"><span class="text-xs text-muted-400">5:31</span></div></li><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">Ejercicios</button><div class="ms-auto"><span class="text-xs text-muted-400">7:11</span></div></li></ul></div></div></div><div class="relative w-full transition-all duration-300 bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800 rounded-lg  
        
        p-6
      "><div role="button" class="flex items-center justify-between  "><div><div><p class="text-xs uppercase leading-none text-muted-500 dark:text-muted-100">Capítulo 2</p><h2 class="text-base font-medium capitalize tracking-wide text-muted-800 dark:text-muted-100">Principales destinos gastronomicos</h2></div></div><div class="pointer-events-none transition-all duration-300  hover:rotate-90 "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="text-muted-400 iconify iconify--lucide" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 18l6-6l-6-6"></path></svg></div></div><div class="grid grid-cols-1 gap-4 overflow-hidden transition-all duration-300 ease-in-out  mt-0" style="max-height: 0px;"><div class="flex items-center justify-between"><div><span class="relative inline-flex h-7 items-center justify-center font-sans whitespace-nowrap px-3 text-center text-xs gap-1 leading-10 transition-all duration-300 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 text-primary-500 capitalize">Gratis</span></div><div class="flex items-center gap-1 text-muted-400"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="h-4 w-4 iconify iconify--mdi" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m19.03 7.39l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c5 0 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61M13 14h-2V7h2zm2-13H9v2h6z"></path></svg><span class="text-sm">28:56</span></div></div><div class="mt-4"><ul class="space-y-4 pb-4 ps-2"><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">Scripting overview</button><div class="ms-auto"><span class="text-xs text-muted-400">7:21</span></div></li><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">What can Javascript do</button><div class="ms-auto"><span class="text-xs text-muted-400">3:19</span></div></li><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">Browser compatibility</button><div class="ms-auto"><span class="text-xs text-muted-400">5:07</span></div></li><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">Javascript-based languages</button><div class="ms-auto"><span class="text-xs text-muted-400">4:32</span></div></li><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">Web-based languages</button><div class="ms-auto"><span class="text-xs text-muted-400">8:46</span></div></li></ul></div></div></div><div class="relative w-full transition-all duration-300 bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800 rounded-lg  
        
        p-6
      "><div role="button" class="flex items-center justify-between  "><div><div><p class="text-xs uppercase leading-none text-muted-500 dark:text-muted-100">Capítulo 3</p><h2 class="text-base font-medium capitalize tracking-wide text-muted-800 dark:text-muted-100">Mitos y realidades gastronomicos</h2></div></div><div class="pointer-events-none transition-all duration-300  hover:rotate-90 "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="text-muted-400 iconify iconify--lucide" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 18l6-6l-6-6"></path></svg></div></div><div class="grid grid-cols-1 gap-4 overflow-hidden transition-all duration-300 ease-in-out  mt-0" style="max-height: 0px;"><div class="flex items-center justify-between"><div><span class="relative inline-flex h-7 items-center justify-center font-sans whitespace-nowrap px-3 text-center text-xs gap-1 leading-10 transition-all duration-300 rounded-lg bg-warning-500/10 dark:bg-warning-500/20 text-warning-500 capitalize">Premium</span></div><div class="flex items-center gap-1 text-muted-400"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="h-4 w-4 iconify iconify--mdi" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m19.03 7.39l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c5 0 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61M13 14h-2V7h2zm2-13H9v2h6z"></path></svg><span class="text-sm">26:25</span></div></div><div class="mt-4"><ul class="space-y-4 pb-4 ps-2"><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">Writing Hello World to the screen</button><div class="ms-auto"><span class="text-xs text-muted-400">3:21</span></div></li><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">Adding Javascript to an HTML page</button><div class="ms-auto"><span class="text-xs text-muted-400">6:42</span></div></li><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">Using Javascript in the head tag</button><div class="ms-auto"><span class="text-xs text-muted-400">5:28</span></div></li><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">Using Javascript with an HTML element</button><div class="ms-auto"><span class="text-xs text-muted-400">3:12</span></div></li><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">Linking to an external script</button><div class="ms-auto"><span class="text-xs text-muted-400">7:42</span></div></li></ul></div></div></div><div class="relative w-full transition-all duration-300 bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800 rounded-lg  
        
        p-6
      "><div role="button" class="flex items-center justify-between  "><div><div><p class="text-xs uppercase leading-none text-muted-500 dark:text-muted-100">Capítulo 4</p><h2 class="text-base font-medium capitalize tracking-wide text-muted-800 dark:text-muted-100">Gastronomía para todos los presupuestos</h2></div></div><div class="pointer-events-none transition-all duration-300  hover:rotate-90 "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="text-muted-400 iconify iconify--lucide" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 18l6-6l-6-6"></path></svg></div></div><div class="grid grid-cols-1 gap-4 overflow-hidden transition-all duration-300 ease-in-out  mt-0" style="max-height: 0px;"><div class="flex items-center justify-between"><div><span class="relative inline-flex h-7 items-center justify-center font-sans whitespace-nowrap px-3 text-center text-xs gap-1 leading-10 transition-all duration-300 rounded-lg bg-warning-500/10 dark:bg-warning-500/20 text-warning-500 capitalize">Premium</span></div><div class="flex items-center gap-1 text-muted-400"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="h-4 w-4 iconify iconify--mdi" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m19.03 7.39l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c5 0 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61M13 14h-2V7h2zm2-13H9v2h6z"></path></svg><span class="text-sm">40:34</span></div></div><div class="mt-4"><ul class="space-y-4 pb-4 ps-2"><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">Understanding Javascript</button><div class="ms-auto"><span class="text-xs text-muted-400">3:11</span></div></li><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">Writing Javascript</button><div class="ms-auto"><span class="text-xs text-muted-400">4:34</span></div></li><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">Adding comments</button><div class="ms-auto"><span class="text-xs text-muted-400">4:56</span></div></li><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">Javascript statements</button><div class="ms-auto"><span class="text-xs text-muted-400">7:49</span></div></li><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">Javascript objects and properties</button><div class="ms-auto"><span class="text-xs text-muted-400">4:11</span></div></li><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">Javascript methods</button><div class="ms-auto"><span class="text-xs text-muted-400">5:28</span></div></li><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">Javascript functions</button><div class="ms-auto"><span class="text-xs text-muted-400">4:14</span></div></li><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">Javascript operators</button><div class="ms-auto"><span class="text-xs text-muted-400">6:11</span></div></li></ul></div></div></div><div class="relative w-full transition-all duration-300 bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800 rounded-lg  
        
        p-6
      "><div role="button" class="flex items-center justify-between  "><div><div><p class="text-xs uppercase leading-none text-muted-500 dark:text-muted-100">Capítulo 5</p><h2 class="text-base font-medium capitalize tracking-wide text-muted-800 dark:text-muted-100">Gastronomía Molecular</h2></div></div><div class="pointer-events-none transition-all duration-300  hover:rotate-90 "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="text-muted-400 iconify iconify--lucide" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 18l6-6l-6-6"></path></svg></div></div><div class="grid grid-cols-1 gap-4 overflow-hidden transition-all duration-300 ease-in-out  mt-0" style="max-height: 0px;"><div class="flex items-center justify-between"><div><span class="relative inline-flex h-7 items-center justify-center font-sans whitespace-nowrap px-3 text-center text-xs gap-1 leading-10 transition-all duration-300 rounded-lg bg-warning-500/10 dark:bg-warning-500/20 text-warning-500 capitalize">Premium</span></div><div class="flex items-center gap-1 text-muted-400"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="h-4 w-4 iconify iconify--mdi" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m19.03 7.39l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c5 0 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61M13 14h-2V7h2zm2-13H9v2h6z"></path></svg><span class="text-sm">37:06</span></div></div><div class="mt-4"><ul class="space-y-4 pb-4 ps-2"><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">Parameters and the this keyword</button><div class="ms-auto"><span class="text-xs text-muted-400">6:56</span></div></li><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">Page load events</button><div class="ms-auto"><span class="text-xs text-muted-400">6:23</span></div></li><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">Form events</button><div class="ms-auto"><span class="text-xs text-muted-400">5:49</span></div></li><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">Mouse events</button><div class="ms-auto"><span class="text-xs text-muted-400">8:17</span></div></li><li class="flex items-center gap-3"><div class="relative"><button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
                            border-primary-500/10 bg-primary-500/10 text-primary-500
                          "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="pointer-events-none h-4 w-4 iconify iconify--iconamoon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z" clip-rule="evenodd"></path></svg></button></div><button type="button" class="block text-start text-sm transition-colors duration-300
                            text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-100
                          ">Common events and event handlers</button><div class="ms-auto"><span class="text-xs text-muted-400">9:41</span></div></li></ul></div></div></div></div>
  </div>
</div>
      </div>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  layout: 'layout2'
});
</script>