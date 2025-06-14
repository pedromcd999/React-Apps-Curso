import React, { useState } from 'react'
import PropTypes from 'prop-types'


const CounterApp = ({ value = 10 }) => {

    const [counter, setCount] = useState(value);

    const handleAdd = () => {
        setCount((c) => c + 1)
    }

    const handleSubstract = () => {
        if (counter >= 1)
            setCount(counter - 1)
    }

    return (
        <>
            <div className='counter-container'>
                <h1 className='container-title'>CounterApp</h1>
                <h2 className='counter-value'>{counter}</h2>
                <div className='buttons'>
                    <button className='button button-increment' onClick={handleAdd}>Increment</button>
                    <button className="button button-restart" onClick={() => setCount(value)}>Restart</button>
                    <button className="button button-substract" onClick={handleSubstract}>Substract</button>
                </div>
            </div>

        </>
    );
}

CounterApp.propTypes = {
    valor: PropTypes.number.isRequired
}

export default CounterApp