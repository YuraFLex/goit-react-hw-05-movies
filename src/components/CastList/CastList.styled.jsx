import styled from 'styled-components';

export const ActorList = styled.ul`
  margin-top: ${p => p.theme.space[4]}px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const CastItem = styled.li`
  width: calc((100% - 30px) / 4);
  display: flex;
  align-items: center;

  background-color: ${p => p.theme.colors.background};
  gap: 5px;
  box-shadow: ${p => p.theme.shadows.normal};
  font-size: 12px;
`;

export const Wrapper = styled.div`
  flex-shrink: 0;
  width: 80px;
  height: 100px;
  overflow: hidden;
  border: ${p => p.theme.borders.noram} ${p => p.theme.colors.bordreColor};
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
