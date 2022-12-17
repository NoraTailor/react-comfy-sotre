import React, {
	useEffect,
	useContext,
	useReducer,
} from 'react';
import reducer from '../reducers/filter_reducer';
import {
	LOAD_PRODUCTS,
	SET_GRIDVIEW,
	SET_LISTVIEW,
	UPDATE_SORT,
	SORT_PRODUCTS,
	UPDATE_FILTERS,
	FILTER_PRODUCTS,
	CLEAR_FILTERS,
} from '../actions';
import { useProductsContext } from './products_context';

const initialState = {
	filtered_products: [],
	all_products: [],
	grid_view: true,
	sort: 'price-lowest',
	filters: {
		text: '',
		company: 'all',
		category: 'all',
		color: 'all',
		min_price: 0,
		max_price: 0,
		price: 0,
		shipping: false,
	},
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
	const [state, dispatch] = useReducer(
		reducer,
		initialState
	);

	const { products } = useProductsContext();
	//we cannot just pass the products data we have to invoke it like one line upper, and use a useeffect, and add to the payload the products to bea available in this section
	useEffect(() => {
		dispatch({ type: LOAD_PRODUCTS, payload: products });
	}, [products]);

	useEffect(() => {
		dispatch({ type: FILTER_PRODUCTS });
		dispatch({ type: SORT_PRODUCTS });
	}, [products, state.sort, state.filters]);

	const setGridView = () => {
		dispatch({ type: SET_GRIDVIEW });
	};

	const setListView = () => {
		dispatch({ type: SET_LISTVIEW });
	};

	const updateSort = (e) => {
		const value = e.target.value;
		dispatch({ type: UPDATE_SORT, payload: value });
	};

	const updateFilters = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		//we cannot just simply access the value to the category button, we access it by the textContent
		if (name === 'category') {
			value = e.target.textContent;
		}
		//we cannot just simply access the color, we set a data attribute to the button and access to that by this
		if (name === 'color') {
			value = e.target.dataset.color;
		}
		if (name === 'price') {
			value = Number(value);
		}
		if (name === 'shipping') {
			value = e.target.checked;
		}
		dispatch({
			type: UPDATE_FILTERS,
			payload: { name, value },
		});
	};
	const clearFilters = () => {
		dispatch({ type: CLEAR_FILTERS });
	};

	return (
		<FilterContext.Provider
			value={{
				...state,
				setGridView,
				setListView,
				updateSort,
				updateFilters,
				clearFilters,
			}}>
			{children}
		</FilterContext.Provider>
	);
};
// make sure use
export const useFilterContext = () => {
	return useContext(FilterContext);
};
