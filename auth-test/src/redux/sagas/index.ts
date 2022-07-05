import { put, takeLatest, fork } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { USER_PHONE, USER_PASSWORD } from '../../lib/constants';
import {
  failedLoginUser,
  successLoginUser,
  successRecoveryUserPassword,
  failedRecoveryUserPassword,
} from '../slices/userSlice';

export function* verifyLoginData(
  action: PayloadAction<{ phone: string | null; password: string | null }>
) {
  const { phone, password } = action.payload;
  if (phone === USER_PHONE && password === USER_PASSWORD) {
    yield put(successLoginUser());
  } else {
    yield put(failedLoginUser());
  }
}

export function* recoveryPassword(
  action: PayloadAction<{ phone: string | null }>
) {
  const phone = action.payload.phone;
  if (phone === USER_PHONE) {
    yield put(successRecoveryUserPassword());
  } else {
    yield put(failedRecoveryUserPassword());
  }
}

export function* watchVerifyDataLoginSaga() {
  yield takeLatest('user/setUser', verifyLoginData);
}

export function* watchRecoveryPasswordUserLoginSaga() {
  yield takeLatest('user/setRecoveryPasswordLogin', recoveryPassword);
}

export default function* rootSaga() {
  yield fork(watchVerifyDataLoginSaga);
  yield fork(watchRecoveryPasswordUserLoginSaga);
}
