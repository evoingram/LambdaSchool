import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const initialItem = {
	title: '',
	director: '',
	metascore: '',
	stars: ''
};

const UpdateForm = props => {
	const [item, setItem] = useState(initialItem);
	const { id } = useParams();

	useEffect(() => {
		const itemToUpdate = props.items.find(thing => `${thing.id}` === id);

		if (itemToUpdate) {
			setItem(itemToUpdate);
		}
	}, [props.items, id]);

	const changeHandler = ev => {
		ev.persist();
		let value = ev.target.value;
		if (ev.target.name === 'director') {
			value = parseInt(value, 10);
		}

		setItem({
			...item,
			[ev.target.name]: value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		// make a PUT request to edit the item
		axios
			.put(`http://localhost:5000/api/movies/${id}`, item)
			.then(res => {
				// res.data is the FULL array with the updated item
				// That's not always the case. Sometimes you need to build your
				// own updated array
				props.setItems(res.data);
				props.history.push(`/movies/${id}`);
			})
			.catch(err => console.log(err));
	};

	return (
		<div>
			<h2>Update Item</h2>

			<form onSubmit={handleSubmit}>
				<input type="text" name="title" onChange={changeHandler} placeholder="title" value={item.title} />
				<div className="baseline" />

				<input
					type="text"
					name="director"
					onChange={changeHandler}
					placeholder="director"
					value={item.director}
				/>
				<div className="baseline" />

				<input
					type="number"
					name="metascore"
					onChange={changeHandler}
					placeholder="metascore"
					value={item.metascore}
				/>
				<div className="baseline" />

				<input type="number" name="stars" onChange={changeHandler} placeholder="stars" value={item.stars} />
				<div className="baseline" />

				<button className="md-button form-button">Update</button>
			</form>
		</div>
	);
};

export default UpdateForm;
