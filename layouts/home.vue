<template>
  <div id="contenedor01">
    <Header2  component-home="1"/>
    <!-- <Header /> -->
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>