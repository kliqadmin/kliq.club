import {getBaseURL} from './api-environments';

const CREATOR = 'creator';
const TRASACTIONS = 'transactions';
const DASHBOARD = 'dashboard';
const LOGIN = 'login';

export function getLoginEndpoint() {
  return getBaseURL() + `/${LOGIN}`;
}

export function getDashboardDataEndPoint() {
  return getBaseURL() + `/${CREATOR}/${DASHBOARD}`;
}

export function getTransactionsEndPoint() {
  return getBaseURL() + `/${CREATOR}/${TRASACTIONS}`;
}