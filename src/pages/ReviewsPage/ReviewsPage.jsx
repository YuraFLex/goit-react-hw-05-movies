import { Loader } from 'components/Loader/Loader';
import { ReviewList } from 'components/ReviewList/ReviewList';
import { useFetchMovieInfo } from 'hooks/useFetchMovieInfo';

const ReviewsPage = () => {
  const { movieInfo, isLoading, error } = useFetchMovieInfo('/reviews');
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>We don't have any reviews for this movie</p>}
      {movieInfo && <ReviewList info={movieInfo} />}
    </>
  );
};

export default ReviewsPage;
