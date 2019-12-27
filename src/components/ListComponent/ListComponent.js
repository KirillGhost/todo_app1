// Core
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Components
import TodoItem from '../TodoItem/TodoItem';
// Engine
import { getTodoItems } from '../../engine/core/todos/actions';

function ListComponent(props) {
  const {
    getTodoItemsAsync,
    getTodos,
    todos,
    changeHandler,
    editHandler,
    deleteHandler,
  } = props;

  useEffect(() => {
    getTodoItemsAsync();
    getTodos();
  }, []);

  const onTaskStatusChange = (id, data) => {
    changeHandler(id, data);
  };

  const onTaskEdit = (id, data) => {
    editHandler(id, data);
  };

  const onTaskDelete = id => {
    deleteHandler(id);
  };

  const renderTodoItems = () => {
    console.log('render ', todos);
    if (todos) {
      return todos.map(item => (
        <TodoItem
          key={item.id}
          item={item}
          onTaskStatusChange={onTaskStatusChange}
          onTaskEdit={onTaskEdit}
          onTaskDelete={onTaskDelete}
        />
      ));
    }
  };

  return (
    <div className="todo-list">
      {renderTodoItems()}
    </div>
  );
}

const mapStateToProps = state => ({
  todoItems: state.todos.items,
});

function mapDispatchToProps(dispatch) {
  return {
    getTodoItemsAsync: () => dispatch(getTodoItems()),
  };
}

ListComponent.propTypes = {
  getTodoItemsAsync: PropTypes.func,
};

ListComponent.defaultProps = {
  getTodoItemsAsync: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
