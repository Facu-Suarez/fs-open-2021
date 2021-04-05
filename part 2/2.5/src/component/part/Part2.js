import React from "react";

const Part2 = ({course}) => {
  //console.log(course)
  return (
    <div> 
      <p>{course.parts[0].name} {course.parts[0].exercises}</p>
      <p>{course.parts[1].name} {course.parts[1].exercises}</p>
    </div>
  );
};

export default Part2;