import { useCallback, useState } from 'react';

import Button from '../../components/Button';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setUser } from '../../redux/slices/userSlice';
import {
  StyledLoginPageContainer,
  StyledLoginPageForm,
  StyledLoginPagePhoneInput,
  StyledLoginPagePassInput,
} from './LoginPageStyled';

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const [phoneLogin, setPhoneLogin] = useState('');
  const [passLogin, setPassLogin] = useState('');

  const handleChangePassLogin = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassLogin(e.target.value);
    },
    []
  );
  const state = useAppSelector((state) => state);
  console.log('state: ', state);

  const handleSubmitLoginForm = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const userData = { phone: phoneLogin, password: passLogin };

      dispatch(setUser({ ...userData }));
    },
    [dispatch, passLogin, phoneLogin]
  );

  return (
    <StyledLoginPageContainer>
      <StyledLoginPageForm onSubmit={handleSubmitLoginForm}>
        <div className="logo">
          <img src="../images/logo.jpg" alt="company logo"></img>
        </div>

        <StyledLoginPagePhoneInput
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

        <StyledLoginPagePassInput
          type="password"
          withLabel
          labelTitle="Введите пароль"
          onChange={handleChangePassLogin}
        />

        <div
          className="forgot-password"
          style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            marginBottom: '24px',
          }}
        >
          <p style={{ color: '#F6B52E', cursor: 'pointer' }}>Забыли пароль?</p>
        </div>
        <Button fullWidth borderRadius="5px" padding="8px 0" type="submit">
          ВОЙТИ
        </Button>
      </StyledLoginPageForm>
    </StyledLoginPageContainer>
  );
};
export default LoginPage;
