import {ConnectAction} from './actionTypes';

const initialState = {
  loading: true,
  accountData: undefined,
  accountDataError: '',
};

const ConnectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ConnectAction.CONNECT_ACCOUNT:
      return {
        ...state,
        loading: true,
      };
    case ConnectAction.CONNECT_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        accountData: action.payload,
        accountDataError: '',
      };
    case ConnectAction.CONNECT_ACCOUNT_ERROR:
      return {
        ...state,
        loading: false,
        accountData: undefined,
        accountDataError: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default ConnectReducer;