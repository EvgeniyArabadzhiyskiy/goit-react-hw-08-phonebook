import { useSelector } from 'react-redux';
import { useState } from 'react';
import authSelectors from 'redux/auth/auth-selectors';

import LoginForm from 'components/LoginForm/LoginForm';
import Modal from 'components/Modal/Modal';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import UserMenu from 'components/UserMenu/UserMenu';
import {
  BoxMenu,
  IconButtonCross,
  LoginBtn,
  MobileNavLink,
  RegisterBtn,
} from './MobileMunu.styled';
import { AiOutlineFullscreen } from 'react-icons/ai';

const MobileMenu = ({ closeMenu, active }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLOggedIn);

  const [isOpenRegister, setIsOpenRegister] = useState(false);
  const [isOpenLogIn, setIsOpenLogIn] = useState(false);

  const isActiveScrollWithModalOpen = e => {
    active
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  };

  isActiveScrollWithModalOpen();

  // const ddd = (e) => {

  //   if(e.code === 'Escape') {
  //     console.log('Escape');
  //     closeMenu(false)
  //   }
  // };

  const closeOnBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeMenu(false);
    }
  };

  // useEffect(() => {
  //   window.addEventListener('keydown', ddd)
  //   // document.body.style.overflow = 'hidden';

  //   return () => {
  //     console.log('return');
  //     window.removeEventListener('keydown', ddd)
  //     // document.body.style.overflow = 'unset';
  //   }
  // })

  const toggleModalRegister = () => {
    closeMenu(false);
    setIsOpenRegister(prev => !prev);
  };

  const toggleModalLogIn = () => {
    setIsOpenLogIn(prev => !prev);
    closeMenu(false);
  };

  return (
    <BoxMenu active={active} onClick={closeOnBackdrop}>
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
    </BoxMenu>
  );
};

export default MobileMenu;
