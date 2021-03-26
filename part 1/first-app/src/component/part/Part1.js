import React from "react";

const Part1 = (props) => {
  console.log(props.part[0])
  return (
    <div>
      <p>{props.part[0].name}</p>
      <p>{props.part[0].exercises}</p>
    </div>
  );
};

export default Part1;
