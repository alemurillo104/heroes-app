import React, { useContext, useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { getHeroById } from '../../selectors/getHeroById';

import { heroImages } from '../../helpers/heroImages';
// import batman from '../../assets/dc-batman.jpg'; //recurso estatico

export const HeroScreen = () => {
    
    const datos = useContext(AuthContext);
    console.log( datos, 'recuperando con el useContext' );

    
    const { heroeId } = useParams(); //leer argumentos por URL

    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

    const navigate = useNavigate();
    
    const handleReturn = () => {
        navigate( -1 );
    }

    if ( !hero ) {
        return <Navigate to="/" />;
    }

    const { 
        id,
        superhero,
        alter_ego,
        characters,
        first_appearance,
        publisher
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    // src={ imagePath } //desde public assets
                    // src={ batman } // import
                    src={   heroImages(`./${ id }.jpg`).default }
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego: </b> { alter_ego } </li>
                    <li className="list-group-item"> <b>First Appearance: </b> { first_appearance } </li>
                    <li className="list-group-item"> <b>Publisher: </b> { publisher } </li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{characters}</p>

                <button
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Regresar 
                </button>
            </div>         
        </div>
    )
}
