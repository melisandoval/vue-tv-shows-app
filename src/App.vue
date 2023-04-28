<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from "./layout/Header/Header.vue";
import Footer from "./layout/Footer/Footer.vue";
</script>
