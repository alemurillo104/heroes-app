import React from 'react'
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroeCard } from '../hero/HeroeCard';

export const SearchScreen = () => {

    const [ { searchText }, handleInputChange, reset ] = useForm( {
        searchText: ''
    });

    const heroesFiltrados = getHeroesByName( searchText );
    console.log( heroesFiltrados );
    

    const handleSearch = (e) => {
        e.preventDefault();
        
        console.log( searchText );
        reset();
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
