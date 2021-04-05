import React from 'react'

const Part3 = ({course}) => {
    
    return(
        <div>
            <p>{course.parts[2].name} {course.parts[2].exercises}</p>
        </div>
    )
}

export default Part3; 