const { heroes } = require("../data/heroes")


export const getHeroById = ( id = '' ) => {

    console.log('se llamó a getHeroById');
    return heroes.find( heroe => heroe.id === id );
}
