// Core
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';

// Логер для отслеживания actions в консоли браузера
// https://www.npmjs.com/package/redux-logger
const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => '#139BFE',
    prevState: () => '#1C5FAF',
    action: () => '#149945',
    nextState: () => '#A47104',
    error: () => '#ff0005',
  },
});

// Добавляем проверку на текущий процесс
// Если это процесс разработки включаем логгер
// https://habr.com/ru/company/ruvds/blog/345724/
// https://create-react-app.dev/docs/adding-custom-environment-variables/
const dev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'local';
// const sagaMiddleWare = createSagaMiddleware();

// Добавляем middleware
// https://redux.js.org/advanced/middleware
// https://maxfarseer.gitbooks.io/redux-course-ru/content/usiliteli_logger.html
const middleware = [thunk];
// const middleware = [sagaMiddleWare, thunk];

// Проверка на is development
// Нам не нужен логгер в production режиме
if (dev) {
  middleware.push(logger);
}

export { dev, middleware };
// export { dev, middleware, sagaMiddleWare };
