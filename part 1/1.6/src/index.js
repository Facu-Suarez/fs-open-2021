import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import Button from './component/Button'
import Statistics from './component/Statistics'
import './index.css'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood= () => {setGood(good + 1)};
  const handleNeutral= () => {setNeutral(neutral + 1)};
  const handleBad= () => {setBad(bad + 1)};

  const all = () => {
    const count = ()  =>{
      return(good+neutral+bad)
    }
    console.log(count)
  }

  return (
    <div>
      <h1>Give feedback</h1>
        <Button handleClick={handleGood} text='Good'/>
        <Button handleClick={handleNeutral} text='Neutral'/>
        <Button handleClick={handleBad} text='Bad'/>
      <h3>Statistics</h3>
        <Statistics text='Good: ' value={good}/>
        <Statistics text='Neutral: ' value={neutral}/>
        <Statistics text='Bad: ' value={bad}/>
        <Statistics text='All: ' value={all}/>
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
