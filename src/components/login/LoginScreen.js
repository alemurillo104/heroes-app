import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';


export const LoginScreen = () => {

    const { dispatch } = useContext(AuthContext);

    const navigate =useNavigate(); 

    const handleLogin =  () => {

        console.log('handlelogin');

        const action = {
            type: types.login,
            payload: {
                name: 'Aleeee'
            }
        }

        dispatch( action );

        const lastPath = localStorage.getItem('lastPath') || '/marvel';

        navigate( lastPath ,{
            replace: true //reemplaze la vista o historia actual
        });
        // navigate('/',{
        //     replace: true //reemplaze la vista o historia actual
        // });
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
