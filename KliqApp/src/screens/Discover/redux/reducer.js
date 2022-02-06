import {DashboardAction} from './actionTypes';

const initialState = {
  loading: true,
  dashboardData: undefined,
  dashboardDataError: '',
};

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DashboardAction.DASHBOARD_DATA:
      return {
        ...state,
        loading: true,
      };
    case DashboardAction.DASHBOARD_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        dashboardData: action.payload,
        dashboardDataError: '',
      };
    case DashboardAction.DASHBOARD_DATA_ERROR:
      return {
        ...state,
        loading: false,
        dashboardData: undefined,
        dashboardDataError: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default DashboardReducer;