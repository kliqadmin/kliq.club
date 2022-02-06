import {ConnectAction} from './actionTypes';

export const AccountDataSuccess = data => ({
  type: ConnectAction.CONNECT_ACCOUNT_SUCCESS,
  payload: data,
});

export const AccountDataError = error => ({
  type: ConnectAction.CONNECT_ACCOUNT_ERROR,
  payload: error,
});

export const GetAccountData = ({data, onSuccess, onError}) => ({
  type: ConnectAction.CONNECT_ACCOUNT,
  payload: {
    data,
    onSuccess,
    onError
  },
});
