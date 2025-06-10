// Desestructuracion
// Asignacion Desestructurante

const persona ={
    nombre:'Pedro',
    edad:23,
    clave:'Zegion',
    rango:'soldado',
};

// const {nombre, edad, clave} = persona;

// console.log(nombre, edad, clave);

const returnPersona = ({nombre,edad,clave,rango = 'capitan'}) => {
    // console.log(nombre,edad,rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat:14.1232,
            lng:-12.3232,
        }
    }
}

const {nombreClave,anios,latlng:{lat,lng}} = returnPersona(persona);
console.log(nombreClave,anios);
console.log(lat,lng);
