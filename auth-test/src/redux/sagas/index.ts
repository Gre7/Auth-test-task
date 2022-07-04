import { put, takeLatest, fork } from 'redux-saga/effects';
import {
  failedLoginUser,
  successLoginUser,
  successRecoveryUserPassword,
  failedRecoveryUserPassword,
} from '../slices/userSlice';
import { USER_PHONE, USER_PASSWORD } from '../../lib/constants';

//TODO типизировать
export function* verifyLoginData(action: any) {
  const { phone, password } = action.payload;
  if (phone === USER_PHONE && password === USER_PASSWORD) {
    yield put(successLoginUser());
  } else {
    yield put(failedLoginUser());
  }
}

//TODO типизировать
export function* recoveryPassword(action: any) {
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
