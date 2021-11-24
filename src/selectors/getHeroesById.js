const { heroes } = require("../data/heroes")


export const getHeroesById = ( id ) => {

    return heroes.filter( heroe =>  heroe.id === id );
}
