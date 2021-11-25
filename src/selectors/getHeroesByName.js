const { heroes } = require("../data/heroes");



export const getHeroesByName = ( name = '' ) => {

    name = name.toLowerCase();
    
    return heroes.filter( heroe => heroe.superhero.toLowerCase().includes(name));

    // return [...heroes];
}
