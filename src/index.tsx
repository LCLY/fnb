import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import './scss/custom.scss';
import App from './App';
// 3rd party lib
import './i18n';

// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchAuth } from './store/sagas/index';

// redux-persist
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

// reducers
import authReducer from './store/reducers/auth';
import generalReducer from './store/reducers/general';

// enable browser redux extension tool
const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

// redux persist config
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'], // which reducer want to store - name of reducer
};

// combine all reducers
const rootReducer = combineReducers({
  auth: authReducer,
  general: generalReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

// set config to our rootreducer
const pReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
// use the new persistreducer in creating store
const store = createStore(pReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

const persistor = persistStore(store);

sagaMiddleware.run(watchAuth);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root') || document.createElement('div'));
