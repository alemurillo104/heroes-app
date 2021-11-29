import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroeCard } from '../hero/HeroeCard';

import queryString from 'query-string';
import { useMemo } from 'react';

export const SearchScreen = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const { q = ''} = queryString.parse( location.search );

    const [ formValues , handleInputChange ] = useForm( {
        searchText: q
    });

    const { searchText } = formValues;

    const heroesFiltrados = useMemo(() =>  getHeroesByName( q ), [ q ]);

    const handleSearch = (e) => {
        e.preventDefault();
         
        navigate(`?q=${ searchText }`);
        console.log( searchText );
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
                        ( q === '')
                         ? <div className="alert alert-info animate__animated animate__fadeIn" >Busca un héroe</div>
                         : ( heroesFiltrados.length === 0)
                            && <div className="alert alert-danger animate__animated animate__fadeIn"> No hay resultados: { q } </div>
                    }

                    {
                        heroesFiltrados.map( heroe => (
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
