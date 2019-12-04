// Core
import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { deleteCurrentTask, editCurrentTask, changeCurTaskStatus } from '../../api/Api';

class ListComponent extends Component {

  componentDidMount() {
    this.getTodoDataAsync();
  }

  getTodoDataAsync = () => {
    const { getTodos } = this.props;
    getTodos();
  };

  onTaskStatusChange = (id, data) => {
    changeCurTaskStatus(id, data)
      .then((data) => {
        const { id } = data;
        const { form } = this.props;

        form.setState(prevState => {
          const updatedTodos = prevState.todos.map(todo => {
            if (todo.id === id) {
              todo.isDone = !todo.isDone
            }
            return todo;
          })
          return {
            todos: updatedTodos
          }
        })
      });
  }

  onTaskEdit = (id, data) => {

    editCurrentTask(id, data)
      .then((data) => {
        const { id } = data;
        const { form } = this.props;

        form.setState(prevState => {
          const updatedTodos = prevState.todos.map(todo => {
            if (todo.id === id) {
              todo.title = data.title
            }
            return todo;
          })
          return {
            todos: updatedTodos
          }
        })
      });
  }

  onTaskDelete = id => {
    deleteCurrentTask(id)
      .then(() => {
        const { form, todos } = this.props;
        form.setState({
          todos: [...todos.filter(todo => todo.id !== id)]
        })
      });
  }

  renderTodoItems = () => {
    const { todos } = this.props;

    return todos.map(item => (
      <TodoItem
        key={item.id}
        item={item}
        onTaskStatusChange={this.onTaskStatusChange}
        onTaskEdit={this.onTaskEdit}
        onTaskDelete={this.onTaskDelete}
      />
    ));
  };

  render() {
    return (
      <div className="todo-list">
        {this.renderTodoItems()}
      </div>
    );
  }
}

export default ListComponent;