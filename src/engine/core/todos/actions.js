// Helpers
import { actionCreator } from '../../../lib/helpers/actionCreator';
// Type
import * as todoTypes from './types';

export function addTodo(todo) {
  return actionCreator(todoTypes.ADD_TODO, todo);
}

export function editTodo(todo) {
  return actionCreator(todoTypes.EDIT_TODO, todo);
}

export function deleteTodo(id) {
  return actionCreator(todoTypes.DELETE_TODO, id);
}

export function getTodoItems() {
  return (dispatch) => {
    dispatch({ type: 'ВКЛЮЧИТЬ_ЛОАДЕР' });
    fetch('')
      .then(() => {
        dispatch('СОХРАНИТЬ_ТУДУ');
      })
      .catch(() => {
        dispatch('ОБРАБОТАТЬ_ОШИБКУ');
      })
      .finally(() => {
        dispatch('ВЫКЛЮЧИТЬ_ЛОАДЕР');
      });
  };
  // return actionCreator(todoTypes.GET_TODO_ITEMS);
}
