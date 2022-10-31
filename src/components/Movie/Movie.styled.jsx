import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Btn = styled.button`
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  border: none;
  font-size: 16px;
  padding: 5px 15px;
  margin-bottom: 15px;
  border-radius: ${p => p.theme.radii.normal};

  transition: background-color ${p => p.theme.animation},
    box-shadow ${p => p.theme.animation};
  &:hover {
    background-color: ${p => p.theme.colors.secondary};
    box-shadow: ${p => p.theme.shadows.normal};
  }
`;

export const MovieCard = styled.div`
  display: flex;
  gap: 20px;
  font-family: ${p => p.theme.fonts.body};
  padding: ${p => p.theme.space[4]}px;
  background: ${p => p.theme.colors.background};
  box-shadow: ${p => p.theme.shadows.normal};

  border-radius: ${p => p.theme.radii.normal};
`;

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const ImageWrapper = styled.div`
  width: 300px;
  height: 450px;
  flex-shrink: 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.colors.white};
`;

export const LinkList = styled.ul`
  display: flex;
  gap: 16px;

  border-bottom: 1px solid ${p => p.theme.colors.secondary};
  padding-bottom: ${p => p.theme.space[3]}px;
`;

export const LinkItem = styled.li`
  background: ${p => p.theme.colors.primary};
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};

  transition: background-color ${p => p.theme.animation},
    box-shadow ${p => p.theme.animation};
  &:hover {
    background-color: ${p => p.theme.colors.secondary};
    box-shadow: ${p => p.theme.shadows.normal};
  }
`;
