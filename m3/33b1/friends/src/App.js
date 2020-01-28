import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import GasPrices from './components/GasPrices';
import PrivateRoute from './components/PrivateRoute';

function App() {
	return (
		<Router>
			<div className="App">
				<ul>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/protected">FriendsList</Link>
					</li>
				</ul>
				<Switch>
					<PrivateRoute path="/protected" component={FriendsList} />
					{/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
					<Route path="/login" component={Login} />
					<Route component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
