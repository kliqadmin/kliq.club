import {DashboardAction} from './actionTypes';

export const DashboardDataSuccess = data => ({
  type: DashboardAction.DASHBOARD_DATA_SUCCESS,
  payload: data,
});

export const DashboardDataError = error => ({
  type: DashboardAction.DASHBOARD_DATA_ERROR,
  payload: error,
});

export const GetDashboardData = ({data, onSuccess, onError}) => ({
  type: DashboardAction.DASHBOARD_DATA,
  payload: {
    data,
    onSuccess,
    onError
  },
});
