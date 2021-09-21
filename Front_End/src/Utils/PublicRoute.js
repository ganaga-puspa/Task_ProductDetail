import React from 'react';
import { Route } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

export const getToken = () => {
    return sessionStorage.getItem('token') || null;
  }


function PublicRoute({ component: Component, ...rest }) {

    const nav = useNavigate();

  return (
    <Route
      {...rest}
      render={(props) =>
         !getToken() ? <Component {...props} /> : nav('/admin') }
    />
  )
}
 
export default PublicRoute;