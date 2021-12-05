import React from 'react'
import { Link } from 'react-router-dom';

export const HeroeCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const imagePath = `/assets/${id}.jpg`;

    return (
        <div className="col animate__animated animate__fadeIn ">
            <div className="card ">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img alt={ superhero } className="card-img" src={ imagePath } />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{ alter_ego }</p>

                            {
                                (characters !== alter_ego) &&
                                    <p className="text-muted"><strong>Intérpretes: </strong>{characters}</p>
                            }

                            <p className="card-text">
                                <small className="text-muted"> {first_appearance} </small>
                            </p>

                            {/* //aqui llamo al HeroScreen con el hero id */}
                            <Link to={`/hero/${id}`}> 
                                Más...
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
