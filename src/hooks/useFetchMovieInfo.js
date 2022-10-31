import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieById } from 'fetchAPI/fetchAPI';

export const useFetchMovieInfo = (endpoint = '') => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getMovie = async movieId => {
      setIsLoading(true);
      try {
        const movieDetails = await fetchMovieById(movieId, endpoint);
        setMovieInfo(movieDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getMovie(id);
  }, [id, endpoint]);

  return { movieInfo, isLoading, error };
};
