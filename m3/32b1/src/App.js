import React, { useReducer } from 'react';
import './App.css';
import { task, Reducer } from './reducers/Reducer';
import TodoForm from './components/TodoForm.js';
import SearchForm from './components/SearchForm.js';
import styled from 'styled-components';

const Div = styled.div`
	background-color: #27474e;
	color: #c45baa;
`;

const baseTodos = [
	{
		item: 'Learn about reducers',
		completed: false,
		id: 3892987589
	}
];

function App() {
	const [state, dispatch] = useReducer(Reducer, task);

	todoChange = event => {
		// update state while typing task title
		this.setState({ addedTaskItem: event.target.value });
	};

	todoSearch = event => {
		const results = this.state.data.filter(todoItem =>
			todoItem.task.toLowerCase().includes(this.state.searchTerm.toLowerCase())
		);
		this.setState({
			searchResults: [...results]
		});
	};

	changeSearchTerm = event => {
		event.preventDefault();
		if (event.target.value !== null && event.target.value !== undefined) {
			this.setState({
				searchTerm: event.target.value
			});
		} else {
			this.setState({
				searchTerm: ''
			});
		}
		this.todoSearch();
	};

	const toggleComplete = id => {
		dispatch({
			type: 'TOGGLE_TASK_COMPLETED',
			payload: id
		});
	};
	return (
		<Div>
			<h2>Todo List: MVP</h2>
			<h2>Type to Search or Click to Complete a Todo:</h2>
			<SearchForm
				dispatch={dispatch}
				tasks={state.tasks}
				changeSearchTerm={this.changeSearchTerm}
				searchResults={this.state.searchResults}
			/>
			<TodoForm dispatch={dispatch} tasks={state.tasks} value={this.state.task} todoChange={this.todoChange} />
		</Div>
	);
}

export default App;
