import { API_KEY } from "./config";

// APIs info:
// https://developers.themoviedb.org/3/tv/get-top-rated-tv
// https://developers.themoviedb.org/3/tv/get-popular-tv-shows
// https://developers.themoviedb.org/3/tv/get-tv-on-the-air
// https://developers.themoviedb.org/3/tv/get-tv-airing-today

const TOP_RATED_API = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en`;
const POPULAR_API = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en`;
const ON_TV_API = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en`;
const AIRING_TODAY_API = `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en`;

export async function getAPITopRatedList(): Promise<any> {
  const response = await fetch(TOP_RATED_API);
  const list = await response.json();
  return list;
}

export async function getAPIPopularList(): Promise<any> {
  const response = await fetch(POPULAR_API);
  const list = await response.json();
  return list;
}

export async function getAPIOnTVList(): Promise<any> {
  const response = await fetch(ON_TV_API);
  const list = await response.json();
  return list;
}

export async function getAPIAiringTodayList(): Promise<any> {
  const response = await fetch(AIRING_TODAY_API);
  const list = await response.json();
  return list;
}
