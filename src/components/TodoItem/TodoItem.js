// Core
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import cx from 'classnames';
// Engine
import { keyCodes } from '../../engine/config/constants/keyCodes';
import { setTodoItemStateAsync, deleteTodoItem } from '../../engine/core/todos/actions';
// Styles
import './TodoItem.css';

function TodoItem(props) {
  const {
    id, isDone, taskStatusChange, title, onTaskEdit, taskDelete,
  } = props;

  const [edit, setEdit] = useState(false);

  const todoTextClassNames = cx('todo-text', {
    'task-done-style': isDone,
  });

  const ref = useRef(null);

  const changeStatusHandler = () => {
    taskStatusChange({ id, isDone: !isDone });
  };

  const editButtonHandler = () => {
    setEdit(!edit);
  };

  const editTaskHandler = () => {
    onTaskEdit(id, ref.current.value);
  };

  const deleteTaskHandler = () => {
    taskDelete(id);
  };

  const keyDownHandler = (ev) => {
    if ((ev.keyCode === keyCodes.ESC) || (ev.keyCode === keyCodes.ENTER)) {
      if (ev.keyCode === keyCodes.ESC) {
        ref.current.value = ref.current.defaultValue;
      }
      ev.target.blur();
    }
  };

  useEffect(() => {
    if (edit) {
      ref.current.focus();
    }
  }, [edit]);

  return (
    <div className="todo-item">
      <div>
        <Checkbox
          className="todo-check"
          checked={isDone}
          color="primary"
          onChange={changeStatusHandler}
        />
      </div>
      <div>
        <TextField
          inputRef={ref}
          className={todoTextClassNames}
          color="primary"
          defaultValue={title}
          disabled={!edit}
          onBlur={editTaskHandler}
          onKeyDown={keyDownHandler}
        />
      </div>
      <div className="todo-edit">
        <Button
          variant="contained"
          color="primary"
          className="todo-edit-btn"
          size="small"
          onClick={editButtonHandler}
        >
          {edit ? 'Save' : 'Edit'}
        </Button>
      </div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          className="todo-delete-btn"
          value="Del"
          onClick={deleteTaskHandler}
        >
          Del
        </Button>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  isDone: PropTypes.bool,
  taskStatusChange: PropTypes.func,
  taskDelete: PropTypes.func,
  title: PropTypes.string,
};

TodoItem.defaultProps = {
  isDone: false,
  taskStatusChange: () => {},
  taskEdit: () => {},
  taskDelete: () => {},
  title: '',
};

function mapDispatchToProps(dispatch) {
  return {
    taskStatusChange: taskStatus => dispatch(setTodoItemStateAsync(taskStatus)),
    taskDelete: id => dispatch(deleteTodoItem(id)),
  };
}

export default connect(null, mapDispatchToProps)(TodoItem);
