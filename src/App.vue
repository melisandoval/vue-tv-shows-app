<template>
  <Header @onNavLinkClicked="handleShowList" />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from "./layout/Header/Header.vue";
import Footer from "./layout/Footer/Footer.vue";
import { ref } from "vue";
import { useDataStore } from "./stores/dataStore";

const dataStore = useDataStore();

const listToShow = ref({});

function handleShowList(list: object) {
  listToShow.value = list;
  dataStore.setSelectedList(listToShow.value);
}
</script>
