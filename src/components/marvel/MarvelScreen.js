import React from 'react'

import { HeroeList } from '../hero/HeroeList';

export const MarvelScreen = () => {

    // const data = getHeroesById('dc-superman');


    return (
        <div>
            <h1>MarvelScreen</h1>
            <HeroeList publisher="Marvel Comics" />
        </div>
    )
}
