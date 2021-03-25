import React from 'react'


const Total = (props) => {
    return (
        <div>
            <p> Number of exercises {props.part1.exercises1 + props.part2.exercises2 + props.part3.exercises3} </p>
        </div>
    )
};

export default Total;