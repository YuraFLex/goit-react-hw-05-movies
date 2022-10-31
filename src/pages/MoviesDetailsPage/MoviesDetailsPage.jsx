import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useFetchMovieInfo } from 'hooks/useFetchMovieInfo';

import { Movie } from 'components/Movie/Movie';
import { Loader } from 'components/Loader/Loader';

const MoviesDetailsPage = () => {
  const { movieInfo, isLoading, error } = useFetchMovieInfo();

  return (
    <>
      {isLoading && <Loader />}
      {movieInfo && <Movie movie={movieInfo} />}
      {error && <p>Ooops!</p>}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetailsPage;
