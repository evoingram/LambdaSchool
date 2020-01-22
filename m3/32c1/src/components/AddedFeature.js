import React from 'react';

class AddedFeature extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<li>
				<button className="button" onClick={this.props.removeFeature}>
					X
				</button>
				{this.props.feature.name}
			</li>
		);
	}
}

export default AddedFeature;
