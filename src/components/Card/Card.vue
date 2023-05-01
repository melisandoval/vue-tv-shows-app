<template>
  <li>
    <button class="card" @click="handleCardClick">
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
import { computed, ref } from "vue";
import "./Card.scss";
import router from "../../router";

interface CardItem {
  name: string;
  poster_path: string | null;
  first_air_date: string;
  id: number;
}

const props = defineProps<{
  item: CardItem;
}>();

const POSTER_DEFAULT = "/poster-default.png";

const img = computed(function () {
  if (props.item.poster_path === null) {
    return POSTER_DEFAULT;
  }

  return `https://image.tmdb.org/t/p/w500${props.item.poster_path}`;
  // more info about image link: https://developers.themoviedb.org/3/getting-started/images
});

const title = ref(props.item.name);
const year = ref(props.item.first_air_date.slice(0, 4));

function handleCardClick() {
  const cardId = props.item.id;

  router.push(`/details-page/${cardId.toString()}`);
}
</script>

<style scoped></style>
