import { SET_GRIDVIEW } from '../actions';

export const formatPrice = (number) => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(number / 100);
};

export const getUniqueValues = (data, type) => {
	let unique = data.map((item) => item[type]);
	//the colors already in an array, we have to get it out so it becomes just one array
	if (type === 'colors') {
		unique = unique.flat();
	}
	return ['all', ...new Set(unique)];
};
