export const transformMovies = movies =>
  movies.map(({ id, title, poster_path }) => ({ id, title, url: poster_path }));
