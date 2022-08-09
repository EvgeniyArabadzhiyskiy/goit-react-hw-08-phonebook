// import LoginForm from "components/LoginForm/LoginForm";
// import RegisterForm from "components/RegisterForm/RegisterForm";
// import { useSelector } from 'react-redux';
// import authSelectors from 'redux/auth/auth-selectors';

// import { Box } from 'components/Box/Box';
// import UserMenu from 'components/UserMenu/UserMenu';
// import Modal from 'components/Modal/Modal';
// import LoginForm from 'components/LoginForm/LoginForm';
// import RegisterForm from 'components/RegisterForm/RegisterForm';

import { useState } from 'react';
import { Suspense } from 'react';
import { useMedia } from 'react-use';
import { Outlet } from 'react-router-dom';
import { Header, IconButtonBurger } from './SharedLayout.styled';
import Container from 'components/Container/Container';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import DesctopMenu from 'components/DesctopMenu/DesctopMenu';
import { GiHamburgerMenu } from 'react-icons/gi';

const SharedLayout = () => {
  const isMobile = useMedia('(max-width: 479px)');
  const isDesctop = useMedia('(min-width: 480px)');

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpenMenu(prev => !prev);
  // };

  const toggleMenu = () => {
    setIsOpenMenu(true);
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

          {true && <MobileMenu closeMenu={setIsOpenMenu} active={isOpenMenu} />}
        </Container>
      </Header>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
