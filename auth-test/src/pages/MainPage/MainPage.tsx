import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const MainPage = () => {
  const { isAuth } = useAuth();

  return (
    <>
      {isAuth ? (
        <>
          <h2>Welcome!</h2>
          <button>ВЫЙТИ</button>
        </>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  );
};
export default MainPage;
