// Core
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Components
import TodoItem from '../TodoItem/TodoItem';
// Engine
import { getTodoItems } from '../../engine/core/todos/actions';
import { todoListSelector } from '../../engine/config/selectors/todo';

function ListComponent(props) {
  const {
    getTodoItemsAsync,
    changeHandler,
    editHandler,
    deleteHandler,
    todoItems,
  } = props;

  useEffect(() => {
    getTodoItemsAsync();
  }, [getTodoItemsAsync]);

  const onTaskStatusChange = (id, data) => {
    changeHandler(id, data);
  };

  const onTaskEdit = (id, data) => {
    editHandler(id, data);
  };

  const onTaskDelete = id => {
    deleteHandler(id);
  };

  return (
    <div className="todo-list">
      {todoItems.map(item => (
        <TodoItem {...item} key={item.id} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  todoItems: todoListSelector(state),
});

function mapDispatchToProps(dispatch) {
  return {
    getTodoItemsAsync: () => dispatch(getTodoItems()),
  };
}

ListComponent.propTypes = {
  getTodoItemsAsync: PropTypes.func,
  todoItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isDone: PropTypes.bool,
      title: PropTypes.string,
    }),
  ),
};

ListComponent.defaultProps = {
  getTodoItemsAsync: () => {},
  todoItems: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
