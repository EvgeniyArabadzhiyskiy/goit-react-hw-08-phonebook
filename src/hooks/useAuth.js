import { useSelector } from 'react-redux';
import authSelectors from "../redux/auth/auth-selectors";

export const useAuth = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLOggedIn);
    const isFetchCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

    return {
        isLoggedIn,
        isFetchCurrentUser,
    }
}

