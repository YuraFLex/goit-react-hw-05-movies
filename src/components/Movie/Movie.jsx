import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MovieCard,
  ImageWrapper,
  Text,
  Btn,
  StyledLink,
  LinkList,
  LinkItem,
} from './Movie.styled';
import { MainContainer } from 'utils/GlobalStyle';

export const Movie = ({ movie }) => {
  const { title, release_date, overview, poster_path, vote_average, genres } =
    movie;
  const location = useLocation();
  const navigation = useNavigate();
  const onBtnClick = () => {
    navigation(location?.state?.from ?? '/');
  };

  return (
    <MainContainer>
      <Btn type="button" onClick={onBtnClick}>
        Go back
      </Btn>
      <MovieCard>
        <ImageWrapper>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        </ImageWrapper>
        <div>
          <h2>
            {title} ({new Date(release_date).getFullYear()})
          </h2>
          <Text>User score: {Math.round(vote_average * 10)} %</Text>
          <h3>Genres</h3>
          <p>{genres.map(({ name }) => name).join(', ')}</p>
          <h3>Overview</h3>
          <Text>{overview}</Text>
        </div>
      </MovieCard>
      <h3>Additional information</h3>
      <LinkList>
        <LinkItem>
          <StyledLink to="cast" state={location.state}>
            Cast
          </StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink to="reviews" state={location.state}>
            Reviews
          </StyledLink>
        </LinkItem>
      </LinkList>
    </MainContainer>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
  }).isRequired,
};
