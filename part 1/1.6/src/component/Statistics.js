import React from 'react'


const Statistics = (props) =>{
    

    const res = props.a.all - props.a.neutral;

    const percG = props.a.good / res * 100;
    const roundG = percG.toFixed(0) + '%';
    console.log(roundG)

    const percB = props.a.bad / res * 100;
    const roundB = percB.toFixed(0) + '%';
    console.log(roundB)



    return(
        <div>
           <p>{props.text}{props.value}</p>
        </div>
    )
}

export default Statistics;