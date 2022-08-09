import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: ${p => p.theme.borders.normal};
  padding: ${p => p.theme.space[4]}px 40px;

  @media screen and (min-width: 480px) {
    padding: ${p => p.theme.space[4]}px 80px;
  }

  @media screen and (min-width: 768px) {
    padding: ${p => p.theme.space[4]}px 100px;
  }

  @media screen and (min-width: 1200px) {
    padding: ${p => p.theme.space[4]}px 180px;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 20px;
`;

export const FormInput = styled.input`
  display: block;
  border-radius: ${prop => prop.theme.radii.normal};
  border: ${prop => prop.theme.borders.normal};
  outline: none;

  &:focus {
    outline: 2px solid blue;
  }
`;
