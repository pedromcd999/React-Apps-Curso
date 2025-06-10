const persona = [
  {
    nombre: "Pedro",
    apellido: "Cabrera",
    edad: 23,
    direccion: {
      ciudad: "Santa Clara",
      condado: "Vigia",
      calle: 4,
      No_casa: 271,
    },
  },
  {
    nombre: "Miguel",
    apellido: "Davila",
    edad: 23,
    direccion: {
      ciudad: "Santa Clara",
      condado: "Vigia",
      calle: 4,
      No_casa: 271,
    },
  },
];

const persona2 = {...persona};
persona2[0].nombre='Melani';

// console.table(persona)
console.log(persona2);
