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

    case todoTypes.SET_TODO_ITEM_STATE: {
      const { id, isDone } = payload;
      const index = state.items.findIndex(el => el.id === id);

      if (index !== -1) {
        const itemsCopy = [...state.items];
        const item = itemsCopy[index];

        item.isDone = isDone;

        return {
          ...state,
          items: itemsCopy,
        };
      }

      return state;
    }

    case todoTypes.ADD_TODO: {
      return state;
    }

    case todoTypes.DELETE_TODO: {
      const { id } = payload;
      const itemsCopy = state.items.filter(el => el.id !== id);

      return {
        ...state,
        items: itemsCopy,
      };
    }
    case todoTypes.EDIT_TODO: {
      return state;
    }
    default: {
      return state;
    }
  }
}
