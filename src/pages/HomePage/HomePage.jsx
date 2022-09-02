import { useState } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

import { Box } from 'components/Box/Box';
import Modal from 'components/Modal/Modal';
import Section from 'components/Section/Section';
import RegisterForm from 'components/RegisterForm/RegisterForm';

import PhoneImg from '../../images/phoneYest.jpg';
import PhoneImgSmall from '../../images/phoneYesSmall.png';
import PhoneImg2 from '../../images/phoneTomor.jpg';
import PhoneImg2Small from '../../images/phoneTmSmall.png';

// import { useAuth } from '../../hooks';

import {
  SectionText,
  SectionTitle,
  StyledButton,
  Wrap,
} from './HomePage.styled';

const HomePage = () => {
  // const { isLoggedIn } = useAuth()
  const isLoggedIn = useSelector(authSelectors.getIsLOggedIn);

  const [isOpenRegister, setIsOpenRegister] = useState(false);

  const toggleModalRegister = () => {
    setIsOpenRegister(prev => !prev);
  };

  return (
    <div>
      <Section textAlign="center">
        <Wrap bgImage={PhoneImg} bgImageSmall={PhoneImgSmall}>
          <SectionTitle>ARE YOU STILL IN THE PAST?</SectionTitle>
          <SectionText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            quisquam dolore quos sint possimus, similique ipsum adipisci magnam
            autem! Ipsum, dicta reprehenderit ut labore minus nihil sit fugit
            assumenda dolorem repellat autem eum ratione ducimus blanditiis
            distinctio, similique nesciunt recusandae libero quam accusamus est
            at! Sint dicta rerum aliquid minus voluptas expedita eaque autem
            architecto est voluptates, natus modi voluptatum!
          </SectionText>
        </Wrap>
      </Section>

      <Section>
        <Wrap bgImage={PhoneImg2} bgImageSmall={PhoneImg2Small}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            {!isLoggedIn && (
              <StyledButton type="button" onClick={toggleModalRegister}>
                REGISTRATION
              </StyledButton>
            )}
          </Box>
          {isOpenRegister && (
            <Modal closeModal={toggleModalRegister}>
              <RegisterForm onSaveAndClose={toggleModalRegister} />
            </Modal>
          )}
        </Wrap>
      </Section>
    </div>
  );
};

export default HomePage;
