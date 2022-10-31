import PropTypes from 'prop-types';
import { MainContainer } from 'utils/GlobalStyle';

export const ReviewList = ({ info }) => {
  return (
    <MainContainer>
      {info.results.length > 0 ? (
        <ul>
          {info.results.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>Character: {content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </MainContainer>
  );
};

ReviewList.propTypes = {
  info: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
