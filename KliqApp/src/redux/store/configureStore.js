import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import appReducer from '../reducer/index';
import {rootSaga} from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  timeout: 0,
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware, createLogger()),
);

let persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};