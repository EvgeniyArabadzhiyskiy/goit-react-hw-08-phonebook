import styled from 'styled-components';

export const UserName = styled.p`
  margin-top: 20px;
  padding: 6px;
  font-size: 30px;

  @media screen and (min-width: 480px) {
    display: inline-block;
    margin-top: 0;
    font-size: 20px;
  }
`;

export const LoguotBtn = styled.button`
  font-size: 26px;
  border: none;
  background-color: transparent;

  @media screen and (min-width: 480px) {
    cursor: pointer;
    font-size: 18px;
    border: ${prop => prop.theme.borders.none};
    border-radius: ${prop => prop.theme.radii.normal};
    width: ${prop => (prop.width ? `${prop.width}px` : null)};
    padding: ${prop => prop.theme.space[2]}px ${prop => prop.theme.space[3]}px;
    background-color: #3707e6;
    transition: background-color 300ms linear;
  }

  &:hover {
    background-color: #088dfaeb;
  }
`;
