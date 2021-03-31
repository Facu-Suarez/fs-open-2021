import React from 'react'

const Botton = (props) => {
    return (
            <button onClick={props.handleClick}>
                {props.text}
            </button>
    )
}

export default Botton