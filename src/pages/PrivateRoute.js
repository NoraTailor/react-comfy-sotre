import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

//rest operator for get all the other data (path, exact) from the route at app js.
const PrivateRoute = ({ children, ...rest }) => {
	const { user } = useAuth0();

	//here spread operator, to copy those data.
	//if myUser exists we can access to the children, which here is the checkout component, otherwise redirect
	return (
		<Route
			{...rest}
			render={() => {
				return user ? (
					children
				) : (
					<Redirect to='/'></Redirect>
				);
			}}></Route>
	);
};
export default PrivateRoute;
