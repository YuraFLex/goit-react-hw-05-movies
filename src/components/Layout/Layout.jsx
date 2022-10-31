import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, MainLink, NavList, Container } from './Layout.styled';
import { MainContainer } from 'utils/GlobalStyle';
export const Layout = () => {
  return (
    <>
      <Header>
        <MainContainer>
          <nav>
            <NavList>
              <li>
                <MainLink to="/" end>
                  Home
                </MainLink>
              </li>
              <li>
                <MainLink to="movies">Movies</MainLink>
              </li>
            </NavList>
          </nav>
        </MainContainer>
      </Header>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
