import { API_KEY } from "./config";

const apiUrl = "https://api.themoviedb.org/3/tv/top_rated";

export const getData = async () => {
  try {
    const response = await fetch(
      `${apiUrl}?api_key=${API_KEY}&language=es&page=2`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
