<template>
  <section class="list-page">
    <h1>{{ selectedList.DISPLAY || title }}</h1>
    <p v-if="showPending && !listToShow">Pending...</p>
    <CardList v-if="listToShow" :data="listToShow.results" />
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useDataStore } from "../../stores/dataStore";
import { watch, onMounted, Ref, ref } from "vue";
import CardList from "../../components/CardList/CardList.vue";
import { useRoute } from "vue-router";
import "./ListPage.scss";

const dataStore = useDataStore();
const { selectedList } = storeToRefs(dataStore);

interface DataItem {
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: [];
  genre_ids: [];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}

interface ListToShow {
  results: DataItem[];
}

const listToShow: Ref<null | ListToShow> = ref(null);
const showPending: Ref<boolean> = ref(false);

const route = useRoute();
const routeListName = route.params.listname;

const title = ref("");

onMounted(async function () {
  showPending.value = true;

  // fetch the data for this component:
  switch (routeListName) {
    case "top-rated":
      await dataStore.getSelectedListData("TOP_RATED");
      listToShow.value = dataStore.listsData?.topRated as ListToShow;
      title.value = "Top Rated";
      break;
    case "popular":
      await dataStore.getSelectedListData("POPULAR");
      listToShow.value = dataStore.listsData?.popular as ListToShow;
      title.value = "Popular";
      break;
    case "on-tv":
      await dataStore.getSelectedListData("ON_TV");
      listToShow.value = dataStore.listsData?.onTV as ListToShow;
      title.value = "On TV";
      break;
    case "airing-today":
      await dataStore.getSelectedListData("AIRING_TODAY");
      listToShow.value = dataStore.listsData?.airingToday as ListToShow;
      title.value = "Airing Today";
      break;
    default:
      await dataStore.getSelectedListData("TOP_RATED");
      break;
  }

  if (listToShow.value) {
    showPending.value = false;
  }
});

watch(selectedList, async function () {
  console.log("entra en el watch");
  showPending.value = true;

  switch (selectedList.value.NAME) {
    case "TOP_RATED":
      console.log("entra en el WATCH TOP RATED");
      await dataStore.getSelectedListData("TOP_RATED");
      listToShow.value = dataStore.listsData.topRated as ListToShow;
      showPending.value = false;
      break;
    case "POPULAR":
      console.log("entra en el WATCH POPULAR");
      await dataStore.getSelectedListData("POPULAR");
      listToShow.value = dataStore.listsData.popular as ListToShow;
      showPending.value = false;
      break;
    case "ON_TV":
      console.log("entra en el WATCH ON_TV");
      await dataStore.getSelectedListData("ON_TV");
      listToShow.value = dataStore.listsData.onTV as ListToShow;
      showPending.value = false;
      break;
    case "AIRING_TODAY":
      console.log("entra en el WATCH AIRING_TODAY");
      await dataStore.getSelectedListData("AIRING_TODAY");
      listToShow.value = dataStore.listsData.airingToday as ListToShow;
      showPending.value = false;
      break;
  }
});
</script>

<style scoped></style>
