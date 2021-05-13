import React from "react";
import ReactDOM from "react-dom"; 
import Content from "./component/Content";
import Header from "./component/Header";
import Total from "./component/Total";

const App = () => {
  const course ={ 
    name: "Half Stack application development",
    part:[
      {
        name:"Fundamentals of React",
        exercises: 10
      },
      { 
        name:"Using props to pass data",
        exercises:  7
      },
      { 
        name:"State of a component",
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content part={course.part}/>
      <Total part={course.part}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

