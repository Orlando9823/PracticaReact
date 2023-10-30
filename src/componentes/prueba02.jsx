import {useState} from 'react'
import React from 'react';
import PropTypes from 'prop-types';


export const Prueba02 = ({nombre, edad, ciudad}) => {

    const [aumentar, setAumentar] = useState(edad);

    const agregar = () => {
        setAumentar(aumentar + 1);
    }
    const resetear = () => {
        setAumentar(edad);
    }
    const restar = () => {
        setAumentar(aumentar - 1);
    }

    return (
        <>
            <h1>
                Hola soy {nombre}, tengo {aumentar} y 
                soy de la ciudad de {ciudad}
            </h1>
            <button onClick={restar}>
                -
            </button>
            <button onClick={resetear}>
                Reset
            </button>
            <button onClick={agregar}>
                +
            </button>
        </>
    )
};

Prueba02.propTypes = {
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
    ciudad: PropTypes.string.isRequired
}

Prueba02.defaultProps = {
    ciudad: '< Ciudad no definido >'
}