import React from 'react'
import Part1 from './part/Part1';
import Part2 from './part/Part2';
import Part3 from './part/Part3';



const Content = ({course}) => {
    //console.log(course)
    return ( 
        <div>
            <h2>{course[0].name}</h2>
            <Part1 course={course[0]}/>
            <Part2 course={course[0]}/>
            <Part3 course={course[0]}/>
        </div>
    )
};

export default Content;

