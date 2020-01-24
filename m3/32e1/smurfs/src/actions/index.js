import axios from 'axios';

export const FETCHING_ACTIVITY_START = 'FETCHING_ACTIVITY_START';
export const FETCHING_ACTIVITY_SUCCESS = 'FETCHING_ACTIVITY_SUCCESS';
export const FETCHING_ACTIVITY_FAILURE = 'FETCHING_ACTIVITY_FAILURE';
export const FORM_SUBMIT = 'FORM_SUBMIT';
export const ADD_SMURF = 'ADD_SMURF';

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
export const addSmurf = newSmurf => dispatch => {
	console.log(newSmurf);
	axios({
		method: 'post',
		url: 'http://localhost:3333/smurfs',
		data: newSmurf,
		headers: { 'Content-Type': 'multipart/form-data' }
	})
		.then(function(response) {
			//handle success
			console.log(response);
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
		})
		.catch(function(response) {
			//handle error
			console.log(response);
		});
};
/*
export const fetchActivity = () => dispatch => {
	console.log('dispatch type = ' + dispatch);
	switch (dispatch.type) {
		case FETCHING_ACTIVITY_START:
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
		case FORM_SUBMIT:
			dispatch({ type: FORM_SUBMIT });
			axios({
				method: 'post',
				url: 'http://localhost:3333/smurfs',
				data: {
					name: 'Grumpy',
					age: '200',
					height: '5cm'
				},
				headers: { 'Content-Type': 'multipart/form-data' }
			})
				.then(function(response) {
					//handle success
					console.log(response);
				})
				.catch(function(response) {
					//handle error
					console.log(response);
				});
	}
};
*/

/*
export const submitFormValues = values => dispatch => {
	dispatch({ type: FORM_SUBMIT });

	console.log('action values = ' + values);
	getData('submitApproveForm', values)
		.then(response => {
			dispatch(formSubmissionError(response));
		})
		.catch(error => {
			throw error;
		});

};
		*/
// const thunk = action => next => store => {
//   if (typeof action === 'function') {
//     action(store.dispatch);
//   } else if (typeof action === 'object') {
//     next(action);
//   }
// };
