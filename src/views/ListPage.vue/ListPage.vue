<template>
  <section>
    <h1>{{ listStore.selectedList.DISPLAY }}</h1>
  </section>
</template>

<script setup lang="ts">
import { useListsStore } from "../../stores/listsStore";

const listStore = useListsStore();
</script>

<style scoped></style>
