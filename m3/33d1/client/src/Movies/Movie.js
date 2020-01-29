import React from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Route, NavLink } from 'react-router-dom';
export default class Movie extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: null
		};
	}

	handleUpdate = e => {
		e.preventDefault();
		this.props.history.push(`/update-movie/${this.props.movie.id}`);
	};

	handleDelete = e => {
		e.preventDefault();
		axios
			.delete(`http://localhost:3333/api/movies/${this.props.movie.id}`)
			.then(res => {
				this.props.setMovie(res.data);
				this.props.history.push('/movies');
			})
			.catch(err => console.log(err));
	};

	componentDidMount() {
		this.fetchMovie(this.props.match.params.id);
	}

	componentWillReceiveProps(newProps) {
		if (this.props.match.params.id !== newProps.match.params.id) {
			this.fetchMovie(newProps.match.params.id);
		}
	}

	fetchMovie = id => {
		axios
			.get(`http://localhost:5000/api/movies/${id}`)
			.then(res => this.setState({ movie: res.data }))
			.catch(err => console.log(err.response));
	};

	saveMovie = () => {
		const addToSavedList = this.props.addToSavedList;
		addToSavedList(this.state.movie);
	};

	render() {
		if (!this.state.movie) {
			return <div>Loading movie information...</div>;
		}

		return (
			<div className="save-wrapper">
				<Route exact path="/movies/:id" render={props => <MovieCard movie={this.state.movie} />} />
				{
					//<MovieCard movie={this.state.movie} />
				}
				<div className="save-button" onClick={this.saveMovie}>
					Save
				</div>
				<button onClick={this.handleUpdate}>Edit</button>
				<button onClick={this.handleDelete}>Delete</button>
			</div>
		);
	}
}
