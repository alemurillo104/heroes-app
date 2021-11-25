const { heroes } = require("../data/heroes");



export const getHeroesByName = ( name = '' ) => {

    console.log( 'dentro de getheroesbyname' );
    if ( name.length === 0 ) {
        return [];
    }

    name = name.toLowerCase();
    
    return heroes.filter( heroe => heroe.superhero.toLowerCase().includes(name));

    // return [...heroes];
}
