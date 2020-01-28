import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
	state = {
		FriendsList: []
	};

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		// fetch initial data - but it's protected! Use axiosWithAuth to send the token on the header of the request
		axiosWithAuth()
			.get('/api/data')
			.then(res => {
				// res.data.data
				this.setState({
					FriendsList: res.data.data.filter().filter()
				});
			})
			.catch(err => console.log(err));
	};

	formatData = () => {
		const formattedData = [];
		console.log(this.state.FriendsList);
		this.state.FriendsList.forEach((price, index, arr) => {
			if (price.location === 'US') {
				formattedData.push({
					USPrice: price.price,
					HawaiiPrice: arr[index + 1].price
				});
			}
		});
		return formattedData;
	};

	render() {
		const FriendsList = this.formatData();
		console.log(FriendsList);
		return (
			<div className="gas-prices">
				<div className="title-wrapper">
					<div className="title">
						<div className="inner-wrapper">
							<div className="top-title">Gas Comparison</div>
							<div className="bottom-title">Continental US vs Hawaii</div>
						</div>
					</div>
				</div>
				<div className="key">
					<div className="US-key" />
					<p className="US-key-text">Continental US Prices</p>
					<div className="Hawaii-key" />
					<p className="Hawaii-key-text">Hawaii Prices</p>
				</div>
				{this.props.fetchingData && (
					<div className="key spinner">
						<p>Loading Data</p>
					</div>
				)}
				{FriendsList.length > 0 && (
					<div className="gas-wrapper">
						<div className="columns">
							<div className="months">
								<div className="year">2006</div>
								<div className="year">2007</div>
								<div className="year">2008</div>
								<div className="year">2009</div>
								<div className="year">2010</div>
								<div className="year">2011</div>
								<div className="year">2012</div>
							</div>
							<div>
								{FriendsList.map(price => (
									<div className="price-graph">
										<div className="date">
											<p>{price.date}</p>
										</div>
										<div className="hawaii-graph">
											<div
												className="hawaii-line"
												style={{
													width: `${(Number(price.HawaiiPrice) / 5) * 100}%`
												}}
											/>
											<p>${price.HawaiiPrice}</p>
										</div>
										<div className="us-graph">
											<div
												className="us-line"
												style={{
													width: `${(Number(price.USPrice) / 5) * 100}%`
												}}
											>
												<p>${price.USPrice}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default FriendsList;
