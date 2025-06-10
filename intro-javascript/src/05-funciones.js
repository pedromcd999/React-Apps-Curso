// functions y Arrow-functions

const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 =(nombre)=>{
    return `Hola, ${nombre}`;
}

const saludar3 =(nombre)=>`Hola, ${nombre}`

const getUser = ()=>(
    {
        uid:'ABCDE',
        username:'Zegion'
    })

const getActiveUser = (nombre)=>(
    {
        uid:'ABCDE',
        username:nombre
    })

console.log(saludar('Pedro'));
console.log(saludar2('Pedro'));
console.log(saludar3('Pedro'));
console.log(getUser())
console.log(getActiveUser('Pedro'))