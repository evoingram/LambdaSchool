import React from 'react';

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<li
				style={this.props.completed ? { textDecoration: 'line-through' } : null}
				onClick={() => this.props.toggleComplete(this.props.id)}
			>
				{this.props.title}
			</li>
		);
	}
}

export default Todo;
