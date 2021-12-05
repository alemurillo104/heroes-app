import { AppRouter } from "./routers/AppRouter"
import { AuthContext } from './auth/authContext';
import { useEffect, useReducer } from "react";
import { authReducer } from "./auth/authReducer";

const init = () => {
    return JSON.parse( localStorage.getItem('user') ) || { logged: false };
    // return {
    //     logged: true,
    //     name: 'Ale temporal'
    // }
};


export const HeroesApp = () => {

    
    const [user, dispatch] = useReducer( authReducer, {}, init );
    
    useEffect(() => {
        
        if( !user ) return;

        localStorage.setItem( 'user',JSON.stringify( user ));

      
    }, [ user] )


    return (
            <AuthContext.Provider
                value={ {user, dispatch} }
            >
                <AppRouter />
            </AuthContext.Provider>
    )
}
