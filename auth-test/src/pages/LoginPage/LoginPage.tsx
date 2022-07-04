import { useCallback, useMemo, useState } from 'react';
import AuthForm from '../../components/AuthForm';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAuth } from '../../hooks/useAuth';
import { setUser } from '../../redux/slices/userSlice';
import { StyledLoginPageContainer } from './LoginPageStyled';
import { Navigate } from 'react-router-dom';
import {
  StyledAuthFormPhoneInput,
  StyledAuthFormPassInput,
  StyledAuthFormForgotPassLink,
} from '../../pages/LoginPage/LoginPageStyled';
import Button from '../../components/Button';
import { useAppSelector } from '../../hooks/useAppSelector';

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const { isAuth, wrongUserData } = useAuth();

  const { phone } = useAppSelector((state) => state.user);

  const [phoneLogin, setPhoneLogin] = useState(phone);
  const [passLogin, setPassLogin] = useState('');

  const handleChangePassLogin = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassLogin(e.target.value);
    },
    []
  );

  const userData = useMemo(() => {
    return { phone: phoneLogin, password: passLogin };
  }, [passLogin, phoneLogin]);

  const handleSubmitLoginForm = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      try {
        dispatch(setUser(userData));
      } catch (e) {
        console.log(e);
      }
    },
    [dispatch, userData]
  );

  return (
    <StyledLoginPageContainer>
      {isAuth ? (
        <Navigate to="/" replace />
      ) : (
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
          {wrongUserData ? (
            <span style={{ color: 'red' }}>Неверный логин или пароль</span>
          ) : (
            ''
          )}

          <StyledAuthFormPassInput
            type="password"
            withLabel
            labelTitle="Введите пароль"
            onChange={handleChangePassLogin}
          />

          {wrongUserData ? (
            <span style={{ color: 'red' }}>Неверный логин или пароль</span>
          ) : (
            ''
          )}

          <div
            className="forgot-password"
            style={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
              marginBottom: '24px',
            }}
          >
            <StyledAuthFormForgotPassLink to="/passwordRecovery">
              Забыли пароль?
            </StyledAuthFormForgotPassLink>
          </div>
          <Button fullWidth borderRadius="5px" padding="8px 0" type="submit">
            ВОЙТИ
          </Button>
        </AuthForm>
      )}
    </StyledLoginPageContainer>
  );
};
export default LoginPage;
