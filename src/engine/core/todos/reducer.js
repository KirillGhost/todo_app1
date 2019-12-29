// Core
import * as todoTypes from './types';

const initialState = {
  error: false,
  success: false,
  pending: false,
  items: [],
};

export function todosReducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case todoTypes.SET_TODO_LIST: {
      return {
        ...state,
        items: payload,
      };
    }
    case todoTypes.ADD_TODO: {
      return state;
    }
    case todoTypes.DELETE_TODO:
    case todoTypes.EDIT_TODO: {
      return state;
    }
    default: {
      return state;
    }
  }
}
