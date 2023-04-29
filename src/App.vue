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
import { useListsStore } from "./stores/listsStore";

const listStore = useListsStore();

const listToShow = ref({});

function handleShowList(list: object) {
  listToShow.value = list;
  listStore.setSelectedList(listToShow.value);
}
</script>
