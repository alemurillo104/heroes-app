import React from 'react'

import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroeCard } from './HeroeCard';

export const HeroeList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            { 
                heroes.map( (heroe) => ( 
                    <HeroeCard 
                        key= { heroe.id }
                        {...heroe}
                        // id={ heroe.id } 
                        // superhero={ heroe.superhero } 
                    />
                    // <li key={heroe.id} > { heroe.superhero } </li> 
                ))
            } 
        </div>
    )
}
