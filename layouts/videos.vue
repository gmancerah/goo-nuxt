<template>
  <div id="contenedor01">
    <Header />
    <div class="min-h-full">
    <main class="mt-8 pb-8">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        
        <!-- Main 3 column grid -->
        <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8 ">
          
          <!-- Right column -->
          <div class="grid grid-cols-1 gap-4 hidden lg:block">
            <section aria-labelledby="section-2-title">
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-6">
                  <VerticalNav />
                </div>
              </div>
            </section>
          </div>
          
          <!-- Left column -->
          <div class="grid grid-cols-1 gap-4 lg:col-span-2  ">
            <section aria-labelledby="section-1-title">
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-6">
                  <slot />
                </div>
              </div>
            </section>
          </div>

          


        </div>
        <VideosRelated component-title="Te podria interesar" elements-url="/video"/>
      </div>
    </main>
  </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>