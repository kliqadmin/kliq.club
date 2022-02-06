import {getBaseURL, getImageURL} from './api-environments';

const CREATOR = 'creator';
const TRASACTIONS = 'transactions';
const DASHBOARD = 'dashboard';
const LOGIN = 'login';

export function getLoginEndpoint() {
  return getBaseURL() + `/${LOGIN}`;
}

export function getDashboardDataEndPoint() {
  return getImageURL() + `/${CREATOR}/${DASHBOARD}`;
}

export function getTransactionsEndPoint() {
  return getImageURL() + `/${CREATOR}/${TRASACTIONS}`;
}