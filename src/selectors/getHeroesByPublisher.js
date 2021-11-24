
const { heroes } = require("../data/heroes")


export const getHeroesByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)) {
        // return [];
        throw new Error( `${ publisher } is not a valid publisher `);
    }

    return heroes.filter( heroe =>  heroe.publisher === publisher );
}


