import {all} from 'redux-saga/effects';
import { ConnectAccountWatcher } from '../../screens/Connect/redux/saga';

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([
    ConnectAccountWatcher(),
  ]);
}