import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.text};
  box-shadow: ${p => p.theme.shadows.normal};
  background-color: ${p => p.theme.colors.header};
`;

export const MainLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  font-size: 24px;
  transition: color ${p => p.theme.animation};
  :hover {
    color: ${p => p.theme.colors.primary};
  }
  &.active {
    color: ${p => p.theme.colors.secondary};
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;

      width: 100%;
      height: 2px;
      background-color: ${p => p.theme.colors.secondary};
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Container = styled.main`
  padding-top: ${p => p.theme.space[7]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
`;
