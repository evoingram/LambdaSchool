import React from 'react';
import RemoveItemContext from '../contexts/RemoveItemContext';

const Item = () => {
	const removeItem = useContext(RemoveItemContext);

	return (
		<div className="shopping-cart_item">
			<img src={image} alt={`${title} book`} />

			<div>
				<h1>{title}</h1>
				<p>$ {price}</p>
				<button>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
