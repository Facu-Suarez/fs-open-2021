import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import Button from './component/Button'
import Statistics from './component/Statistics'



const App = (props) => {

    const [a,setA] = useState({ 
      good: 0,
      neutral: 0,
      bad: 0,
      all: 0
    })
  
    const handleClickGood = () => {
      const newClick = {
        good: a.good + 1,
        neutral: a.neutral,
        bad: a.bad,
        all: a.all + 1
      }
      setA(newClick)
    }
    const handleClickNeutral = () => {
      const newClick = {
        good: a.good,
        neutral: a.neutral + 1,
        bad: a.bad,
        all: a.all + 1
      }
      setA(newClick)
    }
    const handleClickBad = () => {
      const newClick = {
        good: a.good,
        neutral: a.neutral,
        bad: a.bad + 1,
        all: a.all + 1
      }
      setA(newClick)
    }
    

  return (
    <div>
      <h1>Give feedback</h1>
        <Button handleClick={handleClickGood} text='Good'/>
        <Button handleClick={handleClickNeutral} text='Neutral'/>
        <Button handleClick={handleClickBad} text='Bad'/>
      <h3>Statistics</h3>
        <Statistics value={a.good} text='Good: ' />
        <Statistics value={a.neutral} text='Neutral: ' />
        <Statistics value={a.bad} text='Bad: ' />
        <Statistics value={props.percG} text='Percentage Good: ' />
        <Statistics value={props.percB} text='Percentage Bad: ' />
       
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

