import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import IconButton from 'components/IconButton/IconButton';

export const BoxMenu = styled.div`
  position: fixed;
  top: 0;
  left: -300px;
  width: 300px;
  height: 100%;
  background-color: #fff;
  z-index: 5;
  transition: transform 300ms linear;

  transform: ${p => p.active && 'translateX(300px)'};
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
  padding: 4px 8px;
  font-size: 26px;
  /* color: #30fa08; */
  /* background-color: #30fa08; */
  /* border-radius: 4px; */
  /* margin-right: 20px; */

  &:last-child {
    margin-right: 0;
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
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: #088dfaeb;
  }
`;

export const RegisterBtn = styled.button`
  display: block;
  font-size: 26px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: #088dfaeb;
  }
`;
