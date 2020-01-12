import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  todoClear = event => {
    // clear completed tasks
    // use filter
    this.setState({ Data: [..{task: title, id: new Date(), completed: false}]});
  };
  
  todoChange = event => {
    // update state while typing task title
    this.setState({ Data: [..{task: title, id: new Date(), completed: false}]});
  };

  todoAdd = event => {
    // add todo to data array
      this.setState({ Data: [..{task: title, id: new Date(), completed: false}]});
  };
  
  render() {
    return (
      <div>
        <h2>Todo List:  MVP</h2>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
