import { REMOVE_FEATURE, BUY_ITEM } from '../actions';

export const reducer = (state, action) => {
	switch (action.type) {
		case BUY_ITEM:
			if (state.car.features.includes(action.payload)) {
				return state;
			}
			return {
				...state,
				car: {
					...state.car,
					price: state.car.price + action.payload.price,
					features: [...state.car.features, action.payload]
				},
				additionalPrice: state.additionalPrice + action.payload.price
			};

		case REMOVE_FEATURE:
			return {
				...state,
				car: {
					...state.car,
					price: state.car.price - action.payload.price,
					features: state.car.features.filter(car => car.id !== action.payload.id)
				},
				additionalPrice: state.additionalPrice - action.payload.price
			};

		default:
			return state;
	}
};
