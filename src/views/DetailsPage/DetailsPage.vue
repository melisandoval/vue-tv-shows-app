<template>
  <section class="details-page-container">
    <div v-if="showPending"><Spinner /></div>
    <p v-if="showErrorMsg && !showPending">{{ ERROR_MESSAGE }}</p>

    <section v-if="!showPending && !showErrorMsg" class="details-page">
      <DetailsPageHeader :tvShowData="tvShowData" />

      <section class="more-info">
        <div class="more-info-container">
          <CardListHorizontalScrollBlock
            title="Similar shows"
            :list="similarShows"
          />
        </div>
      </section>
    </section>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { getSingleShowDetails, getSimilarTVShows } from "../../api";
import { onMounted, reactive, ref, watch, onUnmounted } from "vue";
import "./DetailsPage.scss";
import Spinner from "../../assets/Spinner.vue";
import CardListHorizontalScrollBlock from "../../components/CardListHorizontalScrollBlock/CardListHorizontalScrollBlock.vue";
import DetailsPageHeader from "./components/DetailsPageHeader/DetailsPageHeader.vue";

const route = useRoute();

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

onUnmounted(function () {
  tvShowData = reactive<TvShowData>({
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
});

const ERROR_MESSAGE =
  "Sorry, we're currently experiencing technical difficulties. Please try again later.";

const showPending = ref(false);
const showErrorMsg = ref(false);

interface SimilarShows {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

const similarShows = ref<SimilarShows[] | null>(null);

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

  if (!APIData) {
    showErrorMsg.value = true;
    showPending.value = false;
  }

  if (APIData.backdrop_path !== null) {
    tvShowData.bgImg = `https://image.tmdb.org/t/p/original${APIData.backdrop_path}`;
  } else {
    tvShowData.bgImg = "";
  }

  const POSTER_DEFAULT = "/poster-default.png";

  if (APIData.poster_path !== null) {
    tvShowData.poster = `https://image.tmdb.org/t/p/w500/${APIData.poster_path}`;
  } else tvShowData.poster = POSTER_DEFAULT;

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

  // Similar shows list:
  const similarShowsAPIData = await getSimilarTVShows(id);
  similarShows.value = similarShowsAPIData.results;

  showPending.value = false;
}
</script>

<style scoped></style>
