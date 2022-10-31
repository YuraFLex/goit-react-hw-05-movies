import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Gallery,
  GalleryItem,
  MovieTitle,
  MovieLink,
} from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const noInage =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoiEg5RfmS0fd3YtmigKUmpnOJLADj5b_Hd1-Ek6WV0YT9zQV-slUKmbdT1WvDklge3RU&usqp=CAU';
  return (
    <Gallery>
      {movies.map(({ id, title, url }) => (
        <GalleryItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={
                url ? `https://image.tmdb.org/t/p/w500/${url}` : `${noInage}`
              }
              alt={title}
              width="300"
            />
            <MovieTitle>{title}</MovieTitle>
          </MovieLink>
        </GalleryItem>
      ))}
    </Gallery>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string,
    })
  ).isRequired,
};
