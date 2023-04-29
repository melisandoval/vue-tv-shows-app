<template>
  <section>
    <h1>{{ selectedList.DISPLAY }}</h1>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useDataStore } from "../../stores/dataStore";
import { watch, onMounted } from "vue";

const dataStore = useDataStore();
const { selectedList } = storeToRefs(dataStore);

onMounted(async function () {
  await dataStore.getSelectedListData();
});

watch(selectedList, async function () {
  dataStore.getSelectedListData();
});
</script>

<style scoped></style>
