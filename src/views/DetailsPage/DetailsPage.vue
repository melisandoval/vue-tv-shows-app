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
  </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { getSingleShowDetails } from "../../api";
import { onMounted, reactive, ref } from "vue";
import "./DetailsPage.scss";

const route = useRoute();
const id = route.params.id as string;

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

onMounted(async function () {
  window.scrollTo(0, 0);

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

  showPending.value = false;
});
</script>

<style scoped></style>
