import React from 'react';
import AddedFeature from './AddedFeature';
import { removeFeature } from '../actions';
import { connect } from 'react-redux';

class AddedFeatures extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="content">
				<h6>Added features:</h6>
				{this.props.car.features.length ? (
					<ol type="1">
						{this.props.car.features.map(item => (
							<AddedFeature key={item.id} feature={item} removeFeature={this.props.removeFeature} />
						))}
					</ol>
				) : (
					<p>You can purchase items from the store.</p>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		car: state.car
	};
};
export default connect(mapStateToProps, { removeFeature })(AddedFeatures);
