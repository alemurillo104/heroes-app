import React from 'react'

import { HeroeList } from '../hero/HeroeList';
import { Otro } from '../otro/otro';

export const MarvelScreen = () => {

    return (
        <div>
            <h1>MarvelScreen</h1>
            <Otro />
            <HeroeList publisher="Marvel Comics" />
        </div>
    )
}
