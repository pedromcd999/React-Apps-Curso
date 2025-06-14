import React from 'react';
// import React, { Fragment } from 'react';


//Functional components
const PrimeraApp = ({saludo = 'Hola mundo'}) => {

    return (
        <>
            <h1>{saludo}</h1>
        </>
    );

}

export default PrimeraApp;