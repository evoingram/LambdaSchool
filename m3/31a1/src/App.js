import React from 'react';
// import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import SearchForm from './components/TodoComponents/SearchForm.js';

const baseTodos = [
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
];
class App extends React.Component {
    constructor() {
        super();
        this.state = {
          data: baseTodos, 
          searchTerm: '', 
          searchResults: baseTodos,
          task: '',
          addedTaskItem: ''
        };
      
      
    }
  todoClear = event => {
    // clear completed tasks
    // use filter
    event.preventDefault();
    console.log('todoClear function running');
    let data = this.state.data.filter(item => !item.completed);
    this.setState({ searchResults: data });
  };
  
  todoChange = event => {
    // update state while typing task title
    console.log('todoChange function running');
    this.setState({ addedTaskItem: event.target.value });
  };

  todoAdd = event => {
    // add todo to data array
    event.preventDefault();
    console.log('todoAdd function running');
    console.log(event.target.task);
    const newTodoItem = { task: this.state.addedTaskItem, id: Date.now(), completed: false };
    console.log(newTodoItem);
    this.setState({
      data: [...this.state.data, newTodoItem],
      searchResults: [...this.state.data, newTodoItem],
      task: ''
    });
  };

  todoSearch = event => {
      const results = this.state.data.filter(todoItem =>
        todoItem.task.toLowerCase().includes(this.state.searchTerm.toLowerCase()) 
      );
      console.log("Search Results = " + results);

      this.setState({
        searchResults: [...results]
      });
  }

  changeSearchTerm = event => {
    event.preventDefault();
      console.log("Search Term = " + event.target.value);
    if (event.target.value !== null && event.target.value !== undefined) { 
      this.setState({
        searchTerm: event.target.value
      });
    }
    else {
      this.setState({
        searchTerm: ''
      });
    }
    console.log("Search Term set = " + this.searchTerm);
    this.todoSearch();
    console.log("Search Results = " + this.props.data);
  };
  

  todoAddClick = event => {
    // add todo to data array
    event.preventDefault();
    console.log('todoAddClick function running');
    console.log(this.state.addedTaskItem);
    const newTodoItem = { task: this.state.addedTaskItem, id: Date.now(), completed: false };
    if (event.key === 'Enter') {
      this.setState({
        data: [...this.state.data, newTodoItem],
        task: ''
      });
    };
    this.todoSearch();
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
          <h2>Type to Search or Click to Complete a Todo:</h2>
          <SearchForm changeSearchTerm={this.changeSearchTerm} searchResults={this.state.searchResults} toggleComplete={this.toggleComplete}/>
          <TodoForm value={this.state.task} todoClear={this.todoClear} todoAddClick={this.todoAddClick} todoAdd={this.todoAdd} todoChange={this.todoChange} />
        </div>
      );
    }
};

export default App;
