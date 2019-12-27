// Core
import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
// Reducers
import { todosReducer } from '../engine/core/todos/reducer';

// Инициализируем главный редюсер
// Сюда добавляем все редюсеры нашего приложения
// https://redux.js.org/api/combinereducers
const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  // form: formReducer, // <-- add redux-form
  todos: todosReducer,
});

export { rootReducer };
