<template>
  <li>
    <button class="card">
      <img class="card-img" :src="img" />
      <h4>{{ props.item.name }}</h4>
    </button>
  </li>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "./Card.scss";

// const props = defineProps<Props>();

interface CardItem {
  name: string;
  poster_path: string;
}

const props = defineProps<{
  item: CardItem;
}>();

const img = ref(`https://image.tmdb.org/t/p/w500${props.item.poster_path}`);
</script>

<style scoped></style>
