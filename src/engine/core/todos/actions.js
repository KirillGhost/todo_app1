// Actions
import { setNotificationMessage } from '../../ui/actions';
// Helpers
import { actionCreator } from '../../../lib/helpers/actionCreator';
// Type
import * as todoTypes from './types';
// Api
import { changeCurTaskStatus, getTodoData, deleteCurrentTask } from '../../../api/Api';

export function addTodo(todo) {
  return actionCreator(todoTypes.ADD_TODO, todo);
}

export function editTodo(todo) {
  return actionCreator(todoTypes.EDIT_TODO, todo);
}

  export function deleteTodo(id) {
  return actionCreator(todoTypes.DELETE_TODO, id);
}

export function deleteTodoItem(id) {
  return (dispatch) => {
    deleteCurrentTask(id)
      .then(() => {
        dispatch(deleteTodo({ id }));
      })
      .catch((error) =>  {
        dispatch(setNotificationMessage(error.message));
      });
  };
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
        dispatch(setTodoList(data));
      })
      .catch((error) => {
        dispatch(setNotificationMessage(error.message));
      })
      .finally(() => {
        dispatch(setLoader(false));
      });
  };
}

export function setTodoItemState(todoItemState) {
  return actionCreator(todoTypes.SET_TODO_ITEM_STATE, todoItemState);
}

export function setTodoItemStateAsync(todoItemState) {
  return (dispatch) => {
    const { id, isDone} = todoItemState;
    changeCurTaskStatus(id, isDone)
      .then(() => {
        dispatch(setTodoItemState(todoItemState));
      })
      .catch((error) => {
        dispatch(setNotificationMessage(error.message));
      });
  };
}
