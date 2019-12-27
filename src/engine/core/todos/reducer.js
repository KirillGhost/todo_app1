// Core
import * as todosTypes from './types';

const initialState = {
  error: false,
  success: false,
  pending: false,
  items: [],
};

export function todosReducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case todosTypes.ADD_TODO: {
      return state;
    }
    case todosTypes.DELETE_TODO:
    case todosTypes.EDIT_TODO: {
      return state;
    }
    default: {
      return state;
    }
  }
}
