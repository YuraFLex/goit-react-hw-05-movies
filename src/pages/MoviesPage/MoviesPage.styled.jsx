import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  font-size: 16px;
  padding: 5px 15px;

  transition: color ${p => p.theme.animation},
    background-color ${p => p.theme.animation},
    box-shadow ${p => p.theme.animation};
  &:hover {
    background-color: ${p => p.theme.colors.secondary};
    box-shadow: ${p => p.theme.shadows.normal};
  }
`;

export const Input = styled.input`
  color: ${p => p.theme.colors.darkBlue};
  background-color: ${p => p.theme.colors.lightBlue};
  &:focus {
    outline-color: ${p => p.theme.colors.violet};
  }
`;
