<template>
  <li>
    <button class="card">
      <img class="card-img" :src="img" />
      <h4 class="card-title">
        <span>{{ title }}</span>
        &nbsp;
        <span>({{ year }})</span>
      </h4>
    </button>
  </li>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "./Card.scss";

interface CardItem {
  name: string;
  poster_path: string;
  first_air_date: string;
}

const props = defineProps<{
  item: CardItem;
}>();

const img = ref(`https://image.tmdb.org/t/p/w500${props.item.poster_path}`);
// more info about image link: https://developers.themoviedb.org/3/getting-started/images
const title = ref(props.item.name);
const year = ref(props.item.first_air_date.slice(0, 4));
</script>

<style scoped></style>
