import AuthForm from '../../components/AuthForm';
import {
  StyledLoginPageContainer,
  StyledAuthFormPhoneInput,
  StyledAuthFormForgotPassLink,
} from '../LoginPage/LoginPageStyled';
import { useCallback, useEffect, useState } from 'react';
import { StyledButtonForgotPassword } from './ForgotPasswordStyled';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import {
  removeUserTemporaryPassword,
  setRecoveryPasswordLogin,
} from '../../redux/slices/userSlice';
import { useRecoveryPassword } from '../../hooks/useRecoveryPassword';

const ForgotPassword = () => {
  const dispatch = useAppDispatch();

  const { temporaryPassword, wrongUserPhone } = useRecoveryPassword();

  const [phoneLogin, setPhoneLogin] = useState('');

  useEffect(() => {
    return () => {
      dispatch(removeUserTemporaryPassword());
    };
  }, [dispatch]);

  const handleSubmitLoginForm = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      dispatch(setRecoveryPasswordLogin({ phone: phoneLogin }));
    },
    [dispatch, phoneLogin]
  );

  return (
    <StyledLoginPageContainer>
      <AuthForm handleSubmit={handleSubmitLoginForm}>
        <div className="logo">
          <img src="../images/logo.jpg" alt="company logo"></img>
        </div>

        <StyledAuthFormPhoneInput
          country={'ru'}
          value={phoneLogin}
          onChange={(phone: string) => setPhoneLogin(phone)}
          countryCodeEditable={false}
          specialLabel="Введите логин"
          inputProps={{
            name: 'phone',
            required: true,
            autoFocus: true,
          }}
        />

        {wrongUserPhone ? (
          <span style={{ color: 'red' }}>{wrongUserPhone}</span>
        ) : (
          <span>Ваш временный пароль: {temporaryPassword}</span>
        )}

        <StyledAuthFormForgotPassLink to="/login">
          Вернуться на страницу авторизации
        </StyledAuthFormForgotPassLink>

        <StyledButtonForgotPassword
          fullWidth
          borderRadius="5px"
          padding="8px 0"
          type="submit"
        >
          Сменить пароль
        </StyledButtonForgotPassword>
      </AuthForm>
    </StyledLoginPageContainer>
  );
};

export default ForgotPassword;
