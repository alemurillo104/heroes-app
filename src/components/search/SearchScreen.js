import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroeCard } from '../hero/HeroeCard';

import queryString from 'query-string';

export const SearchScreen = () => {


    const location = useLocation();
    const navigate = useNavigate();

    const { q = ''} = queryString.parse( location.search );

    const [ formValues , handleInputChange ] = useForm( {
        searchText: q
    });

    const { searchText } = formValues;

    const heroesFiltrados = getHeroesByName( q );
    // const heroesFiltrados = useMemo( () => getHeroesByName( q ), [q] ) ;
    // const heroesFiltrados = useMemo( () => getHeroesByName( searchText ), [searchText] ) ;
    console.log( 'heroes filtrados : ', heroesFiltrados );
    

    const handleSearch = (e) => {
        e.preventDefault();
         
        navigate(`?q=${ searchText }`);
        console.log( searchText );
        // reset();
    };

    return (
        <div>
            <h1>Busquedas</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={ (e) => handleSearch(e) }>
                        <input 
                            type="text"
                            placeholder="Buscar un heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={handleInputChange}
                            />

                        <button
                            className="btn btn-outline-primary mt-1 btn-block"
                            type="submit"
                            >
                            Buscar...
                        </button>
                    </form>
                </div>


                <div className="col-7">
                    <h4>Resultados</h4>

                    {
                        ( searchText === '')
                        ? <p>No hay ningun resultado</p>
                        
                        : heroesFiltrados.map( heroe => (
                            <HeroeCard 
                                key={ heroe.id }
                                {...heroe}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
