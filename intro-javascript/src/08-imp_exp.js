import heroes from './data/heroes'


const getHeroeByID = (id) => heroes.find((heroe) => heroe.id === id);
const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);


export {
    getHeroeByID,
    getHeroeByOwner,
}