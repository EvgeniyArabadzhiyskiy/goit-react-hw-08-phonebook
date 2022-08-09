import styled from 'styled-components';

export const Wrap = styled.div`
  height: 335px;
  background-color: #867a7a60;

  @media screen and (min-width: 500px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${p => p.bgImageSmall});
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media screen and (min-width: 768px) {
    height: 680px;
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${p => p.bgImage});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const SectionTitle = styled.h1`
  font-size: 28px;
  padding-top: 20px;
  color: #3e13fc;

  @media screen and (min-width: 480px) {
  }

  @media screen and (min-width: 768px) {
    font-size: 46px;
    padding-top: 60px;
    color: #13bafc;
  }
`;

export const SectionText = styled.p`
  font-size: 18px;
  padding: 0 10px;
  padding-top: 10px;
  color: #fff;

  @media screen and (min-width: 480px) {
  }

  @media screen and (min-width: 768px) {
    font-size: 26px;
    padding: 0 60px;
    padding-top: 20px;
    color: #ebf3f3;
  }
`;

export const StyledButton = styled.button`
  cursor: pointer;
  width: 200px;
  height: 50px;
  border: ${prop => prop.theme.borders.none};
  border-radius: ${prop => prop.theme.radii.normal};
  padding: ${prop => prop.theme.space[2]}px ${prop => prop.theme.space[3]}px;
  color: ${prop => prop.theme.colors.whtBtn};
  background-color: ${prop => prop.theme.colors.primaryBtn};
  transition: background-color 300ms linear;

  &:hover {
    background-color: ${prop => prop.theme.colors.hover};
  }
`;
