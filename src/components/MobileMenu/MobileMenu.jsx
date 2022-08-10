import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import authSelectors from 'redux/auth/auth-selectors';
import { AiOutlineFullscreen } from 'react-icons/ai';

import UserMenu from 'components/UserMenu/UserMenu';
import {
  BoxMenu,
  IconButtonCross,
  LoginBtn,
  MobileNavLink,
  RegisterBtn,
} from './MobileMunu.styled';

const MobileMenu = ({ closeMenu, toggleModalRegister, toggleModalLogIn }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLOggedIn);

  const closeOnEscape = e => {
    if (e.code === 'Escape') {
      closeMenu(false);
    }
  };

  const closeOnBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = 'unset';
    };
  });

  return (
    <BoxMenu onClick={closeOnBackdrop}>
      <IconButtonCross type="button" onClick={() => closeMenu(false)}>
        <AiOutlineFullscreen />
      </IconButtonCross>

      <nav>
        <MobileNavLink to="/" onClick={() => closeMenu(false)}>
          Home
        </MobileNavLink>
        <MobileNavLink to="/about" onClick={() => closeMenu(false)}>
          About
        </MobileNavLink>
        {isLoggedIn && (
          <MobileNavLink to="/contacts" onClick={() => closeMenu(false)}>
            PhoneBook
          </MobileNavLink>
        )}
      </nav>
      <div>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <>
            <RegisterBtn type="button" onClick={toggleModalRegister}>
              Registration
            </RegisterBtn>
            <LoginBtn type="button" onClick={toggleModalLogIn}>
              Login
            </LoginBtn>
          </>
        )}
      </div>
    </BoxMenu>
  );
};

export default MobileMenu;
