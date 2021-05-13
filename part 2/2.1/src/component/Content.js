import React from 'react'
import Part1 from './part/Part1';
import Part2 from './part/Part2';
import Total from './Total'
import Total2 from './Total2'


const Content = ({course}) => {
    //console.log(course)
    return ( 
        <div>
            <h2>{course[0].name}</h2>
            <Part1 course={course[0]}/>
            <Total course={course[0]}/>
            <h2>{course[1].name}</h2>
            <Part2 course={course[1]}/>
            <Total2 course={course[1]}/>
        </div>
    )
};

export default Content;


