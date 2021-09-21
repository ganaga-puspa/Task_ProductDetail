import React from 'react';
import { Route} from 'react-router-dom';
import {Link } from 'react-router-dom'
 

export const getToken = () => {
    return sessionStorage.getItem('token') || null;
  }

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => 
        getToken() ? <Component {...props} /> : 
        <Link to= '/login'  />}
    />
  )
}
 
export default PrivateRoute;