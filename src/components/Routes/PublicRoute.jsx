import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

// import { useAuth } from '../../hooks';

const PublicRoute = ({ children, restricted = false, navigateTo = '/' }) => {
   // const { isLoggedIn } = useAuth()
  const isLoggedIn = useSelector(authSelectors.getIsLOggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return <>{shouldRedirect ? <Navigate to={navigateTo} /> : children}</>;
};

export default PublicRoute;
