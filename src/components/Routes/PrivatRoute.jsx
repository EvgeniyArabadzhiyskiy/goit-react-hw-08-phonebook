import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

// import { useAuth } from '../../hooks';

const PrivatRoute = ({ children, navigateTo = '/' }) => {
   // const { isLoggedIn } = useAuth()
  const isLoggedIn = useSelector(authSelectors.getIsLOggedIn);

  return isLoggedIn ? children : <Navigate to={navigateTo} />;
};

export default PrivatRoute;













// import { Navigate, Outlet } from 'react-router-dom';

// const PrivatRoute = ({ navigateTo = '/',}) => {
//   const auth = useSelector(authSelectors.getIsLOggedIn);

//   return auth ? <Outlet /> : <Navigate to={navigateTo} />;
// };

// export default PrivatRoute;

// import { Navigate } from 'react-router-dom';

// const PrivatRoute = ({ Component }) => {
//   const auth = useSelector(authSelectors.getIsLOggedIn);

//   if (!auth) {
//     return null;
//   }

//   return <>{auth ? Component : <Navigate to="/login" />}</>;
// };

// export default PrivatRoute;
