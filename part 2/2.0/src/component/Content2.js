import React from 'react'
import Part4 from './part/Part4'
import Part5 from './part/Part5'


const Content2 =({course})=>{
    //console.log(course)
    return(
        <div>
            <h2>{course[1].name}</h2>
            <Part4 course={course[1]}/>
            <Part5 course={course[1]}/>
        </div>
    )
}

export default Content2