import { types } from "../types/types";

// const state = {
//     name: 'Alejandra',
//     logged: true
// };

// const loginAction = {
//   type: types.login,
//   payload: {
//     name: 'Alejandra',
//     email: 'ale@gmail.com',
//     logged: true
//   }
// };



export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {

        case types.login :
            
            return {
                // name : action.payload.name, //la linea de abajo hace lo mismo con todos los atributos que le mande
                ...action.payload,
                logged: true //se autenticó
            };

        case types.logout :
            
            return {
                logged: false
            };
    
        default:
            return state; //devuelve el mismo para que no haga ningun cambio
    }

}
