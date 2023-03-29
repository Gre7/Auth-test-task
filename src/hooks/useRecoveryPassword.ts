import { useAppSelector } from './useAppSelector';

export const useRecoveryPassword = () => {
  const { temporaryPassword, wrongUserPhone } = useAppSelector(
    (state) => state.user
  );

  return {
    temporaryPassword: temporaryPassword,
    wrongUserPhone: wrongUserPhone,
  };
};
