import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

const PublicRoute = ({ children, restricted = false, navigateTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLOggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return <>{shouldRedirect ? <Navigate to={navigateTo} /> : children}</>;
};

export default PublicRoute;
