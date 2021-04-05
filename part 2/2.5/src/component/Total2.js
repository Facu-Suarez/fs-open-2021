import React from 'react'



const Total2 = ({course}) => {
    //sum 
    const sum = course.parts.reduce((a,b)=>{
        return ( a + b.exercises)
    },0)
    //console.log(sum)

    return (
        <div>
            <h4>Total of exercises {sum}</h4>
        </div>
    )
}; 

export default Total2;