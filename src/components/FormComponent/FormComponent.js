// Core
import React, { Component } from 'react';
import ListComponent from '../ListComponent/ListComponent';
import { addNewTask, getTodoData } from '../../api/Api';
// Styles
import './FormComponent.css';

class FormComponent extends Component {
  state = {
    todos: [],
    value: '',
    editedValue: '',
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    // TODO: add form submit handler
  };

  onInputTextChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  onAddTaskClick = () => {
    const { value } = this.state;
    this.setState({
      value: '',
    });
    addNewTask(value)
      .then((data) => {
        this.setState(prevState => ({
          todos: [...prevState.todos, data],
        }));
      });
  };

  getTodoDataAsync = () => {
    getTodoData()
      .then((data) => {
        this.setState({ todos: data });
      });
  };

  render() {
    const { todos } = this.state;
    return (
      <form className="todo-form" onSubmit={this.onFormSubmit}>
        <div className="todo-header">
          <input
            className="todo-add-input"
            type="text"
            value={this.state.value}
            onChange={this.onInputTextChange}
          />
          <input
            className="todo-add-button"
            type="button"
            value="Add"
            onClick={this.onAddTaskClick}
          />
        </div>
        <ListComponent
          getTodos={this.getTodoDataAsync}
          todos={todos}
          form={this}
        />
      </form>
    );
  }
}

export default FormComponent;