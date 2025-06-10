import { getHeroeByID } from "./08-imp_exp";


const getHeroByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const p1 = getHeroeByID(id);

            if (p1 === undefined) reject('Hero not found');
            else resolve(p1);

        }, 2000)

    });

}

getHeroByIdAsync(1)
    .then(console.log)
    .catch(console.warn);
