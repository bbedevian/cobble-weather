import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import thunk from 'redux-thunk'

import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import { fetchWeatherStart } from './weather/weather.sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(fetchWeatherStart)


export default store;