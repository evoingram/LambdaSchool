import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
  }
  
  toggleComplete = props => {
    let completed = props.completed;
      this.setState(!completed); 
    }

    
  render() {
      return (
        <li style={this.props.completed ? { textDecoration: 'line-through' } : null}
      onClick={() => this.toggleComplete(this.props.id)}>{this.props.task}</li>
    );
  }
}

export default Todo;