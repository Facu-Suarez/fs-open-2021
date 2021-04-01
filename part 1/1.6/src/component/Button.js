import React from 'react'

const Botton = ({handleClick, text}) => {
    return (
            <button onClick={handleClick}>
                {text}
            </button>
    )
}

export default Botton