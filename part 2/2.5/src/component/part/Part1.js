import React from "react";

const Part1 = ({course}) => {
  //console.log(course)
  return (
    <div> 
      <p>{course.parts[0].name} {course.parts[0].exercises}</p>
      
    </div>
  );
};

export default Part1;
