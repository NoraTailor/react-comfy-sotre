//if you want to import a lot of files from a folder, you have to make az index js into the file and make this setup into it so you dont have to import all the files into that page where you want to use them. index js is the entry point
import Home from './HomePage';
import Products from './ProductsPage';
import SingleProduct from './SingleProductPage';
import About from './AboutPage';
import Cart from './CartPage';
import Error from './ErrorPage';
import Checkout from './CheckoutPage';
import PrivateRoute from './PrivateRoute';
import AuthWrapper from './AuthWrapper';

export {
	Home,
	Products,
	SingleProduct,
	About,
	Cart,
	Error,
	Checkout,
	PrivateRoute,
	AuthWrapper,
};
