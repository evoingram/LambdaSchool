import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Contexts
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';
import { RemoveItemContext } from './contexts/RemoveItemContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	const removeItem = item => {
		console.log('removeItem running');
		// remove the given item from the cart
		var index = cart.indexOf(item);

		if (index > -1) {
			cart.splice(index, 1);
		}
	};

	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<RemoveItemContext.Provider value={{ cart, removeItem }}>
				<CartContext.Provider value={cart}>
					<div className="App">
						<Navigation cart={cart} />

						{/* Routes */}
						<Route exact path="/" component={Products} />

						<Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
					</div>
				</CartContext.Provider>
			</RemoveItemContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
