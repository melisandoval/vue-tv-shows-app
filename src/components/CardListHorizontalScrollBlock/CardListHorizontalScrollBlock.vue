<template>
  <section class="horizontal-scroll-section">
    <section class="horizontal-scroll-section-container">
      <h2>{{ title }}</h2>
      <div>
        <ul class="horizontal-scroll-list">
          <Card v-for="item in list" :item="item" :key="item.id" />
        </ul>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import "./CardListHorizontalScrollBlock.scss";
import { toRefs } from "vue";
import Card from "../Card/Card.vue";

interface CardData {
  adult: boolean;
  backdrop_path: string | null;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  vote_average: number;
  vote_count: number;
}

interface Props {
  title: string;
  list: Array<CardData> | null;
}

const props = defineProps<Props>();

const { title, list } = toRefs(props);
</script>

<style scoped></style>
