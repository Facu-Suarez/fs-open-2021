import React from 'react'


const Statistics = ({text, value}) =>{
    if(value === 0 ){
        return(
            <div>
                <h4>No feedback give</h4>
            </div>
        )
    }
    return(
        <div>
           <p>{text}{value}</p>
        </div>
    )

     

}

export default Statistics;