<template>
  <ul class="card-list">
    <Card v-for="item in data" :item="item" :key="item.id" />
  </ul>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import Card from "../Card/Card.vue";
import "./CardList.scss";

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

interface Props {
  data: Array<DataItem>;
}

const props = defineProps<Props>();

const { data } = toRefs(props);
</script>

<style scoped></style>
