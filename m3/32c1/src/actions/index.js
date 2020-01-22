export const BUY_ITEM = 'BUY_ITEM';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const buyItem = feature => {
	return {
		type: BUY_ITEM,
		payload: feature
	};
};

export const removeFeature = feature => {
	return {
		type: REMOVE_FEATURE,
		payload: feature
	};
};
