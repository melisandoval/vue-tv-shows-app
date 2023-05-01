<template>
  <section class="details-page">
    <p v-if="showPending">Pending...</p>
    <p v-if="!tvShowData && !showPending">{{ ERROR_MESSAGE }}</p>
    <section v-if="tvShowData && !showPending" class="article">
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
          :src="tvShowData.bgImg"
          :alt="tvShowData.title"
          class="article-bg-img"
        />
      </div>
    </section>

    <section class="more-info">
      <div class="more-info-container">
        <section class="more-info-list-block">
          <h2>Similar shows</h2>
          <div>
            <ul class="horizontal-list">
              <Card v-for="item in similarShows" :item="item" :key="item.id" />
            </ul>
          </div>
        </section>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { getSingleShowDetails, getSimilarTVShows } from "../../api";
import { onMounted, reactive, ref, watch } from "vue";
import "./DetailsPage.scss";

import Card from "../../components/Card/Card.vue";

const route = useRoute();

// const id = route.params.id as string;

let tvShowData = reactive({
  bgImg: "",
  poster: "",
  title: "",
  summary: "",
  year: "",
  genres: "",
  score: 0,
  status: "",
  seasons: "",
  episodes: "",
});

const ERROR_MESSAGE =
  "Sorry, we're currently experiencing technical difficulties. Please try again later.";

const showPending = ref(false);

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

const similarShows = ref<DataItem[] | null>(null);

onMounted(async function () {
  await getComponentData();
});

watch(route, async function () {
  await getComponentData();
});

async function getComponentData() {
  window.scrollTo(0, 0);

  const id = route.params.id as string;

  showPending.value = true;

  const APIData = await getSingleShowDetails(id);

  tvShowData.bgImg = `https://image.tmdb.org/t/p/original${APIData.backdrop_path}`;
  tvShowData.poster = `https://image.tmdb.org/t/p/w500/${APIData.poster_path}`;
  tvShowData.title = APIData.name;
  tvShowData.summary = APIData.overview;
  tvShowData.year = APIData?.first_air_date?.slice(0, 4);

  interface Genre {
    name: string;
  }
  tvShowData.genres = APIData.genres
    .map(function (genre: Genre) {
      return genre.name;
    })
    .join(", ");

  tvShowData.score = APIData.vote_average.toFixed(1);
  tvShowData.status = APIData.status;
  tvShowData.seasons = APIData.number_of_seasons;
  tvShowData.episodes = APIData.number_of_episodes;

  // similar shows:
  const similarShowsAPIData = await getSimilarTVShows(id);
  similarShows.value = similarShowsAPIData.results;

  showPending.value = false;
}
</script>

<style scoped></style>
