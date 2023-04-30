<template>
  <section class="list-page">
    <h1>{{ title }}</h1>
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

const route = useRoute();
const routeListName = route.params.listname as string;

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
const title = ref("TV Shows");

const TITLES = {
  topRatedListTitle: "Top Rated TV Shows",
  popularListTitle: "Popular TV Shows",
  onTVListTitle: "Currently Airing TV Shows",
  airingTodayListTitle: "TV Shows Airing Today",
};

// constants for setComponentData():
const LISTS = {
  topRated: { name: "TOP_RATED", urlParam: "top-rated" },
  popular: { name: "POPULAR", urlParam: "POPULAR" },
  onTV: { name: "ON_TV", urlParam: "on-tv" },
  airingToday: { name: "AIRING_TODAY", urlParam: "airing-today" },
};

async function setComponentData(listName: string) {
  showPending.value = true;

  const listIsTopRated =
    listName === LISTS.topRated.name || listName === LISTS.topRated.urlParam;
  const listIsPopular =
    listName === LISTS.popular.name || listName === LISTS.popular.urlParam;
  const listIsOnTV =
    listName === LISTS.onTV.name || listName === LISTS.onTV.urlParam;
  const listIsAiringToday =
    listName === LISTS.airingToday.name ||
    listName === LISTS.airingToday.urlParam;

  if (listIsTopRated) {
    await dataStore.getSelectedListData(LISTS.topRated.name);
    listToShow.value = dataStore.listsData?.topRated as ListToShow;
    title.value = TITLES.topRatedListTitle;
    showPending.value = false;
    return;
  }

  if (listIsPopular) {
    await dataStore.getSelectedListData(LISTS.popular.name);
    listToShow.value = dataStore.listsData?.popular as ListToShow;
    title.value = TITLES.popularListTitle;
    showPending.value = false;
    return;
  }

  if (listIsOnTV) {
    await dataStore.getSelectedListData(LISTS.onTV.name);
    listToShow.value = dataStore.listsData?.onTV as ListToShow;
    title.value = TITLES.onTVListTitle;
    showPending.value = false;
    return;
  }

  if (listIsAiringToday) {
    await dataStore.getSelectedListData(LISTS.airingToday.name);
    listToShow.value = dataStore.listsData?.airingToday as ListToShow;
    title.value = TITLES.airingTodayListTitle;
    showPending.value = false;
    return;
  }

  // default:
  await dataStore.getSelectedListData(LISTS.topRated.name);
  listToShow.value = dataStore.listsData?.topRated as ListToShow;
  title.value = TITLES.topRatedListTitle;
  showPending.value = false;
  return;
}

onMounted(async function () {
  await setComponentData(routeListName);
});

watch(selectedList, async function () {
  setComponentData(selectedList.value.NAME);
});
</script>

<style scoped></style>
