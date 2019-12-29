// Core
import { createSelector } from 'reselect';

export const todoSelector = state => state.todos;

export const todoListSelector = createSelector(
  todoSelector,
  todos => todos.items,
);
