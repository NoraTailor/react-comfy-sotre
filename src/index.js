import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';
import { GET_PRODUCTS_SUCCESS } from './actions';
// dev-ozlc6nbslbzd5aug.us.auth0.com;
// wzgnE6kHPXdeoyr10FWmizx8SDzsvlfT;
const root = ReactDOM.createRoot(
	document.getElementById('root')
);
root.render(
	<Auth0Provider
		domain={process.env.REACT_APP_AUTH_DOMAIN}
		clientId={process.env.REACT_APP_CLIENT_ID}
		redirectUri={window.location.origin}
		//save in local storage
		cacheLocation='localstorage'>
		<UserProvider>
			<ProductsProvider>
				<FilterProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</FilterProvider>
			</ProductsProvider>
		</UserProvider>
	</Auth0Provider>
);
