<template>
  <header class="details-page-header">
    <section class="article">
      <article class="article-content">
        <div class="poster-container">
          <img
            :src="tvShowData.poster"
            :alt="tvShowData.title"
            class="poster"
          />
        </div>
        <div class="article-content-text">
          <h1>
            {{ tvShowData.title }}
            <span class="year">({{ tvShowData.year }})</span>
          </h1>
          <p>
            {{ tvShowData.genres }} |
            <span class="highlighted"> ★ {{ tvShowData.score }}</span>
          </p>
          <p>{{ tvShowData.summary }}</p>
          <p>
            Status:
            <span class="highlighted">{{ tvShowData.status }}</span> &nbsp; |
            &nbsp; Seasons:
            <span class="highlighted">{{ tvShowData.seasons }}</span> &nbsp; |
            &nbsp; Episodes:
            <span class="highlighted">{{ tvShowData.episodes }}</span>
          </p>
        </div>
      </article>
      <div class="article-bg-img-container">
        <img
          v-if="tvShowData.bgImg.length > 1"
          :src="tvShowData.bgImg"
          :alt="tvShowData.title"
          class="article-bg-img"
        />
      </div>
    </section>
  </header>
</template>

<script setup lang="ts">
import "./DetailsPageHeader.scss";
import { toRefs } from "vue";

interface TvShowData {
  bgImg: string;
  poster: string;
  title: string;
  summary: string;
  year: string;
  genres: string;
  score: number;
  status: string;
  seasons: string;
  episodes: string;
}

interface Props {
  tvShowData: TvShowData;
}

const props = defineProps<Props>();

const { tvShowData } = toRefs(props);
</script>

<style scoped></style>
