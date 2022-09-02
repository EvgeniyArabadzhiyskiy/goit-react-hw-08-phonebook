import { useSelector } from 'react-redux';
import { useState } from 'react';
import authSelectors from 'redux/auth/auth-selectors';

import { Box } from 'components/Box/Box';
import { StyledNavLink } from '../SharedLayout/SharedLayout.styled';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import UserMenu from 'components/UserMenu/UserMenu';
import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';

// import { useAuth } from '../../hooks';

const DesctopMenu = () => {
  // const { isLoggedIn } = useAuth()
  const isLoggedIn = useSelector(authSelectors.getIsLOggedIn);

  const [isOpenLogIn, setIsOpenLogIn] = useState(false);
  const [isOpenRegister, setIsOpenRegister] = useState(false);

  const toggleModalRegister = () => {
    setIsOpenRegister(prev => !prev);
  };

  const toggleModalLogIn = () => {
    setIsOpenLogIn(prev => !prev);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
        {isLoggedIn && <StyledNavLink to="/contacts">PhoneBook</StyledNavLink>}
      </nav>
      <div>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <>
            {/* <StyledNavLink to="/register">REGISTER</StyledNavLink> */}
            {/* <StyledNavLink to="/login">LOGIN</StyledNavLink> */}
            <Button type="button" onClick={toggleModalRegister}>
              Registration
            </Button>
            <Box display="inline-block" marginLeft="8px">
              <Button type="button" onClick={toggleModalLogIn}>
                Login
              </Button>
            </Box>
          </>
        )}
      </div>
      {isOpenRegister && (
        <Modal closeModal={toggleModalRegister}>
          <RegisterForm onSaveAndClose={toggleModalRegister} />
        </Modal>
      )}
      {isOpenLogIn && (
        <Modal closeModal={toggleModalLogIn}>
          <LoginForm onSaveAndClose={toggleModalLogIn} />
        </Modal>
      )}
    </Box>
  );
};

export default DesctopMenu;
