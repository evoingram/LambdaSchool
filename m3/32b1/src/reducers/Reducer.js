// import React, { useState, useReducer } from 'react';

export const task = {
	tasks: [{ item: 'Learn about reducers', completed: false, id: 3892987589 }]
};

export const Reducer = (state, action) => {
	switch (action.type) {
		case 'TASK_CLEAR_COMPLETED':
			return {
				tasks: state.tasks.filter(todoItem => !todoItem.completed)
			};
		case 'TASK_ADD':
			const addTask = {
				title: action.payload,
				completed: false,
				id: Date.now()
			};
			console.log('TASK_ADD fired off @ case switch');
			return {
				...state,
				tasks: [...state.tasks, addTask]
			};
		case 'TASK_TOGGLE_COMPLETED':
			return {
				...state,
				tasks: state.tasks.map(task => {
					if (task.id === action.payload) {
						return { ...task, completed: !task.completed };
					} else {
						return task;
					}
				})
			};

		default:
			return state;
	}
};
