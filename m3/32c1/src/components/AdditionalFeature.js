import React from 'react';

class AdditionalFeature extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<li>
				<button className="button" onClick={this.props.buyItem}>
					Add
				</button>
				{this.props.feature.name} (+{this.props.feature.price})
			</li>
		);
	}
}

export default AdditionalFeature;
