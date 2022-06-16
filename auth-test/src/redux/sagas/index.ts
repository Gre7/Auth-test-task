import { takeEvery, take, fork, call, put } from 'redux-saga/effects';
import { setUser, userAuthData } from '../slices/userSlice';
import { USER_PHONE, USER_PASSWORD } from '../../lib/constants';

export function* verifyLoginData(payload: userAuthData) {
  const { phone, password } = payload;
  console.log('payload: ', payload);

  if (phone === USER_PHONE && password === USER_PASSWORD) {
    console.log('payload: ', payload);
    yield put({ type: 'user/setUser', ...payload });
  } else {
    throw new Error();
  }
}

export function* workerSaga() {
  const { payload } = yield take(setUser);
  yield call(verifyLoginData, payload);
}

export function* watchVerifyDataLoginSaga() {
  yield takeEvery(setUser, workerSaga);
}

export default function* rootSaga() {
  yield fork(watchVerifyDataLoginSaga);
}
