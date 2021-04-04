import React from "react";

const Part1 = (props) => {
  
  return (
    <div> 
      <p>{props.part[0].name}</p>
      <p>{props.part[0].exercises}</p>
    </div>
  );
};

export default Part1;
