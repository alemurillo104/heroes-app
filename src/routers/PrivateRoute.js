import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext'

export const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    console.log('private routee');

    const { pathname, search} = useLocation();

    // localStorage.setItem('lastPath', location.pathname );
    
    localStorage.setItem('lastPath', pathname + search );

    // if (location.pathname.includes('/search')) {
    //     const nuevoPath = location.pathname + location.search;
    // } else {

    // }

    return user.logged 
    ? children
    : <Navigate to="/login" />
    // : <p> No esta autenticado </p>

}

//npm audit fix
