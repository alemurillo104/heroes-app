import { AppRouter } from "./routers/AppRouter"
import { AuthContext } from './auth/authContext';
import { useReducer } from "react";
import { authReducer } from "./auth/authReducer";

const init = () => {
    return {
        logged: true,
        name: 'Ale temporal'
    }
};


export const HeroesApp = () => {

    
    const [user, dispatch] = useReducer( authReducer, {}, init );
    
    return (
        <div>
            <AuthContext.Provider
                value={ {user, dispatch} }
            >
                <AppRouter />
            </AuthContext.Provider>

        </div>
    )
}
