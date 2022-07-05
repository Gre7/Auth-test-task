import { createSlice } from '@reduxjs/toolkit';

export interface userAuthData {
  phone: string | null;
  password: string | null;
  isAuth: boolean;
  wrongUserData: string;
  temporaryPassword: string;
  wrongUserPhone: string;
}

const initialState: userAuthData = {
  phone: null,
  password: null,
  isAuth: false,
  wrongUserData: '',
  temporaryPassword: '',
  wrongUserPhone: '',
};

//NOTE возможно, лучше вынести экшены в отдельный файл
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.phone = action.payload.phone;
      state.password = action.payload.password;
    },
    successLoginUser: (state) => {
      state.isAuth = true;
      state.wrongUserData = '';
    },
    failedLoginUser: (state) => {
      state.isAuth = false;
      state.wrongUserData = 'Неверный логин или пароль';
    },
    removeUser: (state) => {
      state.phone = null;
      state.password = null;
      state.isAuth = false;
      state.wrongUserData = '';
    },
    setRecoveryPasswordLogin: (state, action) => {
      state.phone = action.payload.phone;
    },
    successRecoveryUserPassword: (state) => {
      state.temporaryPassword = '123456';
      state.wrongUserPhone = '';
    },
    failedRecoveryUserPassword: (state) => {
      state.temporaryPassword = '';
      state.wrongUserPhone = 'Неверный логин';
    },
    removeUserTemporaryPassword: (state) => {
      state.temporaryPassword = '';
      state.wrongUserPhone = '';
    },
  },
});

export const {
  setUser,
  removeUser,
  failedLoginUser,
  successLoginUser,
  successRecoveryUserPassword,
  failedRecoveryUserPassword,
  setRecoveryPasswordLogin,
  removeUserTemporaryPassword,
} = userSlice.actions;

export default userSlice.reducer;
