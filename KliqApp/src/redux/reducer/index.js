

import {combineReducers} from 'redux';
import ConnectReducer from '../../screens/Connect/redux/reducer';

const appReducer = combineReducers({
  ConnectReducer: ConnectReducer,
});

export default appReducer;