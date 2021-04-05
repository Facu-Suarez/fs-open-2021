import React from "react";

const Part5 = ({course}) => {
 
  return (
    <div> 
      <p>{course.parts[1].name} {course.parts[1].exercises}</p>
    </div>
  );
};

export default Part5;