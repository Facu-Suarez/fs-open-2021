import React from 'react'
import Part1 from './part/Part1';
import Part2 from './part/Part2';
import Part3 from './part/Part3';



const Content = (props) => {
    console.log(props)
    return ( 
        <div>
            <Part1 part={props.part}/>
            <Part2 part={props.part}/>
            <Part3 part={props.part}/>
        </div>
    )
};

export default Content;

