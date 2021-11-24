import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {

    const navigate =useNavigate(); 

    const handleLogin =  () => {

        console.log('handlelogin');

        navigate('/',{
            replace: true //reemplaze la vista o historia actual
        });
    }


    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}