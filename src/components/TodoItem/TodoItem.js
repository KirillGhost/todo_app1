// Core
import React, { useCallback } from 'react';
import cx from 'classnames';
// Styles
import './TodoItem.css';

function TodoItem(props) {
  const {
    item, onTaskStatusChange, onTaskEdit, onTaskDelete,
  } = props;

  const { id, isDone, title } = item;

  const todoTextClassNames = cx('todo-text', {
    'task-done-style': isDone,
  });

  const ref = React.useRef(null);

  const changeStatusHandler = useCallback(() => {
    onTaskStatusChange(id, !isDone);
  }, [onTaskStatusChange, id, isDone]);

  const editButtonHandler = (ev) => {
    if (ev.target.value === 'Edit') {
      ev.target.value = 'Save';
      ref.current.focus();
    } else {
      editTaskHandler();
    }
  }

  const editTaskHandler = useCallback(() => {
    onTaskEdit(id, ref.current.value);
  }, [onTaskEdit, id]);

  const deleteTaskHandler = useCallback(() => {
    onTaskDelete(id);
  }, [onTaskDelete, id]);

  const keyDownHandler = (ev) => {
    if ((ev.keyCode === 27) || (ev.keyCode === 13)) {
      if (ev.keyCode === 27) {
        ref.current.value=ref.current.defaultValue;
      }
      ev.target.blur();
    }
  }

  return (
    <div className="todo-item">
      <input
        className="todo-check"
        type="checkbox"
        checked={isDone}
        onChange={changeStatusHandler}
      />
      <input
        ref={ref}
        className={todoTextClassNames}
        type="text"
        defaultValue={title}
        onBlur={editTaskHandler}
        onKeyDown={keyDownHandler}
      />
      <input 
        className="todo-edit"
        type="button"
        value="Edit"
        onClick={editButtonHandler}
      />
      <input
        className="todo-delete"
        type="button"
        value="Del"
        onClick={deleteTaskHandler}
      />
    </div>
  );
}

export default TodoItem;
