import { Loader } from 'components/Loader/Loader';
import { useFetchMovieInfo } from 'hooks/useFetchMovieInfo';
import { CastList } from 'components/CastList/CastList';
const CastPage = () => {
  const { movieInfo, isLoading, error } = useFetchMovieInfo('/credits');
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>We have no more details</p>}
      {movieInfo && <CastList info={movieInfo} />}
    </>
  );
};

export default CastPage;
