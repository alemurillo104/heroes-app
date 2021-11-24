import React from 'react'

export const HeroeCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <img alt={ superhero } className="card-img" src={`/assets/${id}.jpg`} />

                </div>
            </div>
        </div>
    )
}
