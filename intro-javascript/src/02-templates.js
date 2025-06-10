const nombre = 'Pedro';
const apellido = 'Cabrera';
const apellido2 = 'Davila';


const fullName = `${nombre} ${apellido} ${apellido2}`

// console.log(fullName);

const getSaludo = (fullName) => console.log(`Hola ${fullName}`);
getSaludo(fullName);