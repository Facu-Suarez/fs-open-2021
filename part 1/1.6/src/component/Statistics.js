import React from 'react'


const Statistics = (props) =>{
    console.log(props)
    return(
        <div>
           <p>{props.text}{props.value}</p>
        </div>
    )
}

export default Statistics;