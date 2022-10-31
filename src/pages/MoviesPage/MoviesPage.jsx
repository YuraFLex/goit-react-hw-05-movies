import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchMoviesByQuery } from 'fetchAPI/fetchAPI';
import { MainContainer } from 'utils/GlobalStyle';
import { Form, Button, Input } from './MoviesPage.styled';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('searchQuery') ?? '';

  const onFormSubmit = event => {
    event.preventDefault();
    setSearchParams({ searchQuery });
    setMovies([]);
    setError(null);
  };

  const onInput = e => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const getMovies = async query => {
      setIsLoading(true);
      try {
        const movies = await fetchMoviesByQuery(query);
        if (!movies.length) {
          throw new Error('Oops!');
        }
        setMovies(movies);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (query) {
      getMovies(query);
    }
  }, [query]);

  return (
    <MainContainer>
      <Form onSubmit={onFormSubmit}>
        <Input
          type="text"
          name="search"
          value={searchQuery}
          onChange={onInput}
        />
        <Button>Search</Button>
      </Form>
      {isLoading && <Loader />}
      {error && (
        <p>
          Sorry! We didn't find anything on your query! Change search params and
          try again!
        </p>
      )}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </MainContainer>
  );
};

export default MoviesPage;
