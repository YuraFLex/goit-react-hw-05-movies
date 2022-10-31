import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';

const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MoviesDetailsPage = lazy(() =>
  import('../pages/MoviesDetailsPage/MoviesDetailsPage')
);
const CastPage = lazy(() => import('../pages/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('../pages/ReviewsPage/ReviewsPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
