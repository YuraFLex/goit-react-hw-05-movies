import axios from 'axios';
import { transformMovies } from 'helpers/transformMovies';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '5d73a8055d381f7e43fa7ecaa641b6a0';

export const fetchTrendingMovies = async () => {
  const { data } = await axios('trending/movie/week', {
    params: { api_key: KEY },
  });
  return transformMovies(data.results);
};

export const fetchMoviesByQuery = async query => {
  const { data } = await axios('search/movie', {
    params: { api_key: KEY, query },
  });
  return transformMovies(data.results);
};

export const fetchMovieById = async (movieId, endpoint) => {
  const response = await axios(`movie/${movieId}${endpoint}`, {
    params: { api_key: KEY },
  });

  return response.data;
};
