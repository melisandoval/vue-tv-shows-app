const API_KEY = import.meta.env.VITE_API_KEY;
// El valor de API_KEY está siendo aquí importado del archivo .env, el cual no fue subido a GitHub. Por eso,
// es necesario reemplazar el valor de API_KEY con tu API key de The Movie Database (TMDB) API
// (info sobre cómo obtener la API key en: https://developers.themoviedb.org/3/getting-started/introduction ).
// Luego crea un archivo .env en el root de este proyecto y guárdala allí con el formato VITE_API_KEY=aquí tu key sin comillas.
// Más info sobre variables de entorno con Vite en: https://vitejs.dev/guide/env-and-mode.html

const TOP_RATED_API = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en`;
// API info: https://developers.themoviedb.org/3/tv/get-top-rated-tv

const POPULAR_API = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en`;
// API info: https://developers.themoviedb.org/3/tv/get-popular-tv-shows

const ON_TV_API = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en`;
// API info: https://developers.themoviedb.org/3/tv/get-tv-on-the-air

const AIRING_TODAY_API = `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en`;
// API info: https://developers.themoviedb.org/3/tv/get-tv-airing-today

export async function getAPITopRatedList(): Promise<any> {
  try {
    const response = await fetch(TOP_RATED_API);
    const list = await response.json();

    return list;
  } catch (error) {
    console.log(error);
  }
}

export async function getAPIPopularList(): Promise<any> {
  try {
    const response = await fetch(POPULAR_API);
    const list = await response.json();

    return list;
  } catch (error) {
    console.log(error);
  }
}

export async function getAPIOnTVList(): Promise<any> {
  try {
    const response = await fetch(ON_TV_API);
    const list = await response.json();

    return list;
  } catch (error) {
    console.log(error);
  }
}

export async function getAPIAiringTodayList(): Promise<any> {
  try {
    const response = await fetch(AIRING_TODAY_API);
    const list = await response.json();

    return list;
  } catch (error) {
    console.log(error);
  }
}

export async function getSingleShowDetails(id: string): Promise<any> {
  const API = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`;
  try {
    const response = await fetch(API);
    const list = await response.json();

    return list;
  } catch (error) {
    console.log(error);
  }
}

export async function getSimilarTVShows(id: string) {
  const API = `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${API_KEY}&language=en-US`;

  try {
    const response = await fetch(API);
    const list = await response.json();

    return list;
  } catch (error) {
    console.log(error);
  }
}
