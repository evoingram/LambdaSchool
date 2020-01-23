import React from 'react';
import logo from './logo.svg';
import './App.css';
import Loader from './components/Loader';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h2>Welcome to Erica's NASA APOD React-Redux App.</h2>
				{
					// 	If API info not loaded, load loader animation
					// If API info loaded, load display page
				}

				<Loader />
			</header>
		</div>
	);
}

export default App;
