import axios from 'axios';

export const FETCHING_ACTIVITY_START = 'FETCHING_ACTIVITY_START';
export const FETCHING_ACTIVITY_SUCCESS = 'FETCHING_ACTIVITY_SUCCESS';
export const FETCHING_ACTIVITY_FAILURE = 'FETCHING_ACTIVITY_FAILURE';

export const fetchActivity = () => dispatch => {
	dispatch({ type: FETCHING_ACTIVITY_START });

	axios
		.get('http://localhost:3333/smurfs')
		.then(response => {
			console.log('done contacting smurf village');
			console.log(response.data);
			dispatch({ type: FETCHING_ACTIVITY_SUCCESS, payload: response.data });
		})
		.catch(error => {
			console.log('error contacting smurf village');
			console.log(error.response);
			dispatch({ type: FETCHING_ACTIVITY_FAILURE, payload: error.response });
			console.log(error);
		});
};

// const thunk = action => next => store => {
//   if (typeof action === 'function') {
//     action(store.dispatch);
//   } else if (typeof action === 'object') {
//     next(action);
//   }
// };
