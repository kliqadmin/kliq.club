import {takeLatest, call, put, all} from 'redux-saga/effects';
import {HTTP_METHODS} from '../../../utils/api-constants';
import {
  getLoginEndpoint
} from '../../../utils/api-end-points';
import * as Types from './actionTypes';
import * as Action from './actions';
import {request} from '../../../utils/services';

const {ConnectAction} = Types;

export function* ConnectAccountWatcher() {
  yield takeLatest(ConnectAction.CONNECT_ACCOUNT, getAccountData);
}

export function* getAccountData(action) {
  try {
    const result = yield call(() =>
      request(
        getLoginEndpoint(),
        HTTP_METHODS.POST,
        {},
        {},
        false,
      ),
    );
    if (result.response.status === 200) {
      action.payload.onSuccess(result.response.data);
      yield put(Action.AccountDataSuccess(result.response.data));
    }
  } catch (error) {
    action.payload.onError(error.response);
    yield put(Action.AccountDataError(error.response));
  }
}
