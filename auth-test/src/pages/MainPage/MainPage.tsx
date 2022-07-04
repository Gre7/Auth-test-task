import { useCallback, useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import Button from '../../components/Button';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAuth } from '../../hooks/useAuth';
import { removeUser } from '../../redux/slices/userSlice';
import { StyledMainPageContainer } from './MainPageStyled';

const MainPage = () => {
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();

  const handleLogOut = useCallback(() => {
    dispatch(removeUser());
  }, [dispatch]);

  const notAuthorizedUser = useMemo(() => {
    if (!isAuth) {
      return <Navigate to="/login" replace />;
    } else {
      return (
        <StyledMainPageContainer>
          <h2>Welcome!</h2>
          <Button borderRadius="5px" padding="8px 12px" onClick={handleLogOut}>
            ВЫЙТИ
          </Button>
        </StyledMainPageContainer>
      );
    }
  }, [handleLogOut, isAuth]);

  return <>{notAuthorizedUser}</>;
};
export default MainPage;
