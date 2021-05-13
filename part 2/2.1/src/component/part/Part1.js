import React from "react";

const Part1 = ({course}) => {
  //console.log(course)
  return (
    <div> 
      <p>{course.parts[0].name} {course.parts[0].exercises}</p>
      <p>{course.parts[1].name} {course.parts[1].exercises}</p>
      <p>{course.parts[2].name} {course.parts[2].exercises}</p>
    </div>
  );
};

export default Part1;
