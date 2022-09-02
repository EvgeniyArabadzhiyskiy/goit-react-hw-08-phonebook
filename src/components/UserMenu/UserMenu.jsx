import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import userOperations from 'redux/auth/auth-operations';

// import { useAuth } from '../../hooks';

import { LoguotBtn, UserName } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getName);

  // const { isLoggedIn } = useAuth()
  const isLoggedIn = useSelector(authSelectors.getIsLOggedIn);
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(userOperations.logOut());

    if (!isLoggedIn) {
      navigate('/', { replace: true });
    }
  };

  return (
    <>
      <div>
        <LoguotBtn type="button" onClick={logOut}>
          Logout
        </LoguotBtn>
        <UserName>Hi, {name}</UserName>
      </div>
    </>
  );
};

export default UserMenu;
