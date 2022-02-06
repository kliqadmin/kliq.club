import {takeLatest, call, put, all} from 'redux-saga/effects';
import {HTTP_METHODS} from '../../../utils/api-constants';
import {
  getDashboardDataEndPoint
} from '../../../utils/api-end-points';
import * as Types from './actionTypes';
import * as Action from './actions';
import {request} from '../../../utils/services';

const {DashboardAction} = Types;

export function* DashboardDataWatcher() {
  yield takeLatest(DashboardAction.DASHBOARD_DATA, getDashboardData);
}

export function* getDashboardData(action) {
  try {
    debugger
    const result = yield call(() =>
      request(
        getDashboardDataEndPoint(),
        HTTP_METHODS.GET
      ),
    );
    debugger
    if (result.response.status === 200) {
      action.payload.onSuccess(result.response.data);
      yield put(Action.DashboardDataSuccess(result.response.data));
    }
  } catch (error) {
    action.payload.onError(error.response);
    yield put(Action.DashboardDataError(error.response));
  }
}
