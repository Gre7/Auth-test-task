import { useAppSelector } from './useAppSelector';

export const useAuth = () => {
  const { isAuth, wrongUserData } = useAppSelector((state) => state.user);

  return {
    isAuth: isAuth,
    wrongUserData: wrongUserData,
  };
};
