import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
          data: [
            {
                task: 'Learn setState()',
                id: 1528817077286,
                completed: false
            },
            {
                task: 'Style my Todo List',
                id: 1528817084358,
                completed: false
            }
          ], 
          title: ''
        };
      
      
    }
  todoClear = event => {
    // clear completed tasks
    // use filter
    event.preventDefault();
    console.log('todoClear function running');
    let data = this.state.data.filter(item => !item.completed);
    this.setState({ data });
  };
  
  todoChange = event => {
    // update state while typing task title
    console.log('todoChange function running');
    this.setState({ [event.target.name]: event.target.value });
  };

  todoAdd = event => {
    // add todo to data array
    event.preventDefault();
    console.log('todoAdd function running');
    console.log(event.target.title);
    const newTodoItem = { task: this.state.title, id: Date.now(), completed: false };
    this.setState({
      data: [...this.state.data, newTodoItem],
      title: ''
    });
  };

  todoAddClick = event => {
    // add todo to data array
    event.preventDefault();
    console.log('todoAddClick function running');
    console.log(event.target.title);
    const newTodoItem = { task: this.state.title, id: Date.now(), completed: false };
    if (event.key === 'Enter') {
      this.setState({
        data: [...this.state.data, newTodoItem],
        title: ''
      });
    };
  };
  
  toggleComplete = id => {
    let data = this.state.data.slice();
    data = data.map(todoItem => {
      if (todoItem.id === id) {
        todoItem.completed = !todoItem.completed;
        return todoItem;
      } else {
        return todoItem;
      }
    });
    this.setState({ data });
  };


    render() {
      return (
        <div>
          <h2>Todo List:  MVP</h2>
          <TodoList data={this.state.data} toggleComplete={this.toggleComplete}/>
          <TodoForm value={this.state.title} todoClear={this.todoClear} todoAddClick={this.todoAddClick} todoChange={this.todoChange}/>
        </div>
      );
    }
};

export default App;
