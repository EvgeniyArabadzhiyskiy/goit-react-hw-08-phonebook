import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import IconButton from 'components/IconButton/IconButton';

export const Header = styled.header`
  padding: 20px 0;
  background-color: #8641a1;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const IconButtonBurger = styled(IconButton)`
  width: 40px;
  height: 40px;

  svg {
    width: 26px;
    height: 26px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 4px 8px;
  font-size: 16px;
  background-color: #30fa08;
  border-radius: 4px;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  &.active {
    background-color: #3707e6;
  }

  &:hover:not(.active) {
    background-color: #088dfaeb;
  }
`;
