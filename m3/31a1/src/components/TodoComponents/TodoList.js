import React from 'react';
import Data from '../../Data.js';

class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <h2>Todo List Will Go Here</h2>
        <ul>
            {
                Data.data.map(
                todoItem => (
                    <li>{todoItem.task} </li>
                )
                )
            }
        </ul>
      </div>
    );
  }
}

export default TodoForm;