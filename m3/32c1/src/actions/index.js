export const BUY_ITEM = 'BUY_ITEM';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const buyItem = feature => {
	console.log('buyItem action fired off');
	return {
		type: BUY_ITEM,
		payload: feature
	};
};

export const removeFeature = feature => {
	console.log('removeFeature action fired off');
	return {
		type: REMOVE_FEATURE,
		payload: feature
	};
};
