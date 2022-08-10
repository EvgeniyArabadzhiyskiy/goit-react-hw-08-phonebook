import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import IconButton from 'components/IconButton/IconButton';

export const BoxMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0px;
  width: 300px;
  height: 100%;
  background-color: #89a3ce;
  z-index: 5;
`;

export const IconButtonCross = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;

  svg {
    width: 26px;
    height: 26px;
  }
`;

export const MobileNavLink = styled(NavLink)`
  display: block;
  padding: ${prop => prop.theme.space[2]}px ${prop => prop.theme.space[3]}px;
  font-size: 26px;

  &:last-child {
    margin-right: ${prop => prop.theme.space[0]};
  }

  &.active {
    color: #3707e6;
  }

  &:hover:not(.active) {
    color: #088dfaeb;
  }
`;

export const LoginBtn = styled.button`
  display: block;
  font-size: 26px;
  padding: ${prop => prop.theme.space[2]}px ${prop => prop.theme.space[3]}px;
  border: ${prop => prop.theme.borders.none};
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: #3707e6;
  }
`;

export const RegisterBtn = LoginBtn;
