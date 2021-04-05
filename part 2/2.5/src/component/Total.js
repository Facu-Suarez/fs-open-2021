import React from 'react'



const Total = ({course}) => {
    //console.log(course)
    const sum = course.parts.reduce((a,b)=>{
        return ( a + b.exercises)
    },0)
    console.log(sum)

    return (
        <div>
            <h4>Total of exercises {sum}</h4>
        </div>
    )
}; 

export default Total;