import { FETCHING_ACTIVITY_START, FETCHING_ACTIVITY_SUCCESS, FETCHING_ACTIVITY_FAILURE } from '../actions';

const initialState = {
	isLoading: false,
	activity: null,
	error: '',
	name: '',
	age: '',
	height: ''
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_ACTIVITY_START:
			return {
				...state,
				isLoading: true
			};
		case FETCHING_ACTIVITY_SUCCESS:
			return {
				...state,
				isLoading: false,
				activity: action.payload,
				name: action.payload.name,
				age: action.payload.age,
				height: action.payload.height
			};
		default:
			return state;
	}
};
