import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ valor }) => {



    //handleAdd
    const handleAdd = (e) => {
        console.log(e)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{valor}</h2>

            <button className='button' onClick={handleAdd}>+ 1</button>
        </>
    );
}

CounterApp.propTypes = {
    valor: PropTypes.number.isRequired
}

export default CounterApp