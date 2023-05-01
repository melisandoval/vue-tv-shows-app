<template>
  <section>
    <h1>Home Page</h1>
  </section>
</template>

<script setup lang="ts">
// import { useDataStore } from "../../stores/dataStore";
// import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import router from "../../router";

// const dataStore = useDataStore();
// const { listsData } = storeToRefs(dataStore);

onMounted(async function () {
  // await dataStore.getListsData();

  // temporal programmatic navigation
  router.push("/list-page/top-rated");
});
</script>

<style scoped></style>
