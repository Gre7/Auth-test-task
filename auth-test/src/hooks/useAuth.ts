import { useAppSelector } from './useAppSelector';

export const useAuth = () => {
  const { phone, password } = useAppSelector((state) => state.user);

  return {
    isAuth: Boolean(phone),
    phone,
    password,
  };
};
