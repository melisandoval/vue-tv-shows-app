<template>
  <section>
    <h1>Details Page</h1>
    <p>{{ id }}</p>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id as string;
</script>

<style scoped></style>
