import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

//rest operator for get all the other data (path, exact) from the route at app js.
const PrivateRoute = ({ children, ...rest }) => {
	const { user } = useAuth0();

	//here spread operator, to copy those data.
	//if myUser exists we can access to the children, which here is the checkout component, otherwise redirect
	if (!user) {
		return <Navigate to='/'></Navigate>;
	}
	return children;
};
export default PrivateRoute;
