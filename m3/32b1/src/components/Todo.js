import React from 'react';

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<li
				style={this.props.completed ? { textDecoration: 'line-through', color: 'white' } : { color: 'white' }}
				onClick={() => this.props.toggleComplete(this.props.id)}
			>
				{this.props.item}
			</li>
		);
	}
}

export default Todo;
