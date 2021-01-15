/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  useEffect(() => {
    if (!localStorage.getItem('jwt')) {
      props.singInDirect();
    }
  });
  return ((
    <Route>
      {localStorage.getItem('jwt') ? <Component {...props} /> : <Redirect to="/" />}
    </Route>
  ));
};

export default ProtectedRoute;
