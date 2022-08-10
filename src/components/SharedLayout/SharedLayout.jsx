import { useState } from 'react';
import { Suspense } from 'react';
import { useMedia } from 'react-use';
import { Outlet } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

import { Header, IconButtonBurger } from './SharedLayout.styled';
import Modal from 'components/Modal/Modal';
import Container from 'components/Container/Container';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import DesctopMenu from 'components/DesctopMenu/DesctopMenu';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import LoginForm from 'components/LoginForm/LoginForm';

const SharedLayout = () => {
  const isMobile = useMedia('(max-width: 479px)');
  const isDesctop = useMedia('(min-width: 480px)');

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenLogIn, setIsOpenLogIn] = useState(false);
  const [isOpenRegister, setIsOpenRegister] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(true);
  };

  const toggleModalRegister = () => {
    setIsOpenRegister(prev => !prev);
    setIsOpenMenu(false);
  };

  const toggleModalLogIn = () => {
    setIsOpenLogIn(prev => !prev);
    setIsOpenMenu(false);
  };

  return (
    <>
      <Header>
        <Container>
          {isDesctop && <DesctopMenu />}

          {isMobile && (
            <IconButtonBurger type="button" onClick={toggleMenu}>
              <GiHamburgerMenu />
            </IconButtonBurger>
          )}

          {isOpenMenu && (
            <MobileMenu
              closeMenu={setIsOpenMenu}
              toggleModalRegister={toggleModalRegister}
              toggleModalLogIn={toggleModalLogIn}
            />
          )}

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
        </Container>
      </Header>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
// active={isOpenMenu}
