// Core
import { createStore, applyMiddleware, compose } from 'redux';
// Reducers
import { rootReducer } from './rootReducer';
// MiddleWares
import { dev, middleware } from './middlewares';
// import { dev, middleware, sagaMiddleWare } from './middlewares';
// import { rootSaga } from './rootSaga';

// Добавляем поддержку девтулзов в браузере
// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ru
// Позволяет просматривать текущее состояние store в реальном времени
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// Буквально пару слов о compose
// https://redux.js.org/api/compose
const composeEnhancers = dev && devtools ? devtools : compose;

// Инициализируем глобальный store
// https://redux.js.org/api/createstore
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

// sagaMiddleWare.run(rootSaga);

export { store };
