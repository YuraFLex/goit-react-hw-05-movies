import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-family: ${p => p.theme.fonts.body};
`;

export const GalleryItem = styled.li`
  padding-bottom: 10px;
  width: calc((100% - 100px) / 4);
  box-shadow: ${p => p.theme.shadows.normal};
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
  transition: transform ${p => p.theme.animation};

  :hover {
    transform: scale(1.03);
  }
`;

export const MovieTitle = styled.h3`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};
  text-align: center;
  margin-top: 10px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
`;
