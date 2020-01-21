import React, { useState, useReducer } from 'react';

const task = {
	tasks: [{ item: 'Learn about reducers', completed: false, id: 3892987589 }]
};

export const Reducer = (state, action) => {
	switch (action.type) {
		case 'TASK_CLEAR_COMPLETED':
			return {
				// todo: clear completed
				...state,
				editing: !state.editing
			};
		case 'TASK_ADD':
			const addTask = {
				title: action.payload,
				completed: false,
				id: Date.now()
			};
			return {
				...state,
				tasks: [...state.tasks, newTask]
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
