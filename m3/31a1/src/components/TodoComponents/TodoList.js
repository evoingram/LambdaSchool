import React from 'react';
import Data from '../../Data.js';
import Todo from './Todo.js';

class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <h2>Todo List Will Go Here</h2>
        <ul>
            {
                Data.data.map(
                todoItem => (
                    <Todo key={todoItem.id} todoItem={todoItem} task={todoItem.task} id={todoItem.id} completed={todoItem.completed}/>
                )
                )
            }
        </ul>
      </div>
    );
  }
}


export default TodoForm;