

import {combineReducers} from 'redux';
import ConnectReducer from '../../screens/Connect/redux/reducer';
import DashboardReducer from '../../screens/Discover/redux/reducer';

const appReducer = combineReducers({
  ConnectReducer: ConnectReducer,
  DashboardReducer: DashboardReducer,
});

export default appReducer;