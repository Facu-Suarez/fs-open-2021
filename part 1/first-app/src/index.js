import React from "react";
import ReactDOM from "react-dom";
import Content from "./component/Content";
import Header from "./component/Header";
import Total from "./component/Total";

const App = () => {
  const course = "Half Stack application development";
  const part1 = { 
    name:"Fundamentals of React",
    exercises1: 10
  }
  const part2 = { 
    name:"Using props to pass data",
    exercises2:  7
  }
  const part3 = {
    name:"State of a component",
    exercises3: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total
        
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
