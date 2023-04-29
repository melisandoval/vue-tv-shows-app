<template>
  <section>
    <h1>Home Page</h1>
  </section>
</template>

<script setup lang="ts">
import { useDataStore } from "../../stores/dataStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const dataStore = useDataStore();
const { listsData } = storeToRefs(dataStore);

onMounted(async function () {
  await dataStore.getListsData();
  console.log(listsData.value.topRated);
  console.log(listsData.value.popular);
  console.log(listsData.value.onTV);
  console.log(listsData.value.airingToday);
});
</script>

<style scoped></style>
