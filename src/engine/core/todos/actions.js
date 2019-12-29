// Actions
import { setNotificationMessage } from '../../ui/actions';
// Helpers
import { actionCreator } from '../../../lib/helpers/actionCreator';
// Type
import * as todoTypes from './types';
// Api
import { getTodoData } from '../../../api/Api';

export function addTodo(todo) {
  return actionCreator(todoTypes.ADD_TODO, todo);
}

export function editTodo(todo) {
  return actionCreator(todoTypes.EDIT_TODO, todo);
}

export function deleteTodo(id) {
  return actionCreator(todoTypes.DELETE_TODO, id);
}

export function setLoader(isLoading) {
  return actionCreator(todoTypes.SET_LOADER, isLoading);
}

export function setTodoList(list) {
  return actionCreator(todoTypes.SET_TODO_LIST, list);
}

export function getTodoItems() {
  return (dispatch) => {
    dispatch(setLoader(true));
    getTodoData()
      .then((data) => {
        console.log('DATA ', data);
        dispatch(setTodoList(data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(setNotificationMessage(error.message));
      })
      .finally(() => {
        dispatch(setLoader(false));
      });
  };
  // return actionCreator(todoTypes.GET_TODO_ITEMS);
}
