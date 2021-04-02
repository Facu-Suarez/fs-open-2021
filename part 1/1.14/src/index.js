
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//initial state
const initState = 0;
const initVote = 0;
const initCount = [0,0,0,0,0,0];

const App = (props) => {
  const [selected, setSelected] = useState(initState)
  const [vote, setVote] = useState(initVote)
  const [count, setCount] = useState(initCount)

  //ramdom num
  function ramdom(max, min){
    return Math.floor(Math.random() * (max - min + 1 ) + min )
  }
  //switch anecdote
  const handleClick =()=>{
    return( setSelected(selected + ramdom(2,0)),
    setVote(initVote)
    )
  }
  console.log(selected)
  //reset anecdote
  if(selected > 5){
    return( 
      () => setSelected(initState),
      setSelected(0)
    )
  }
  //vote and count
  const handleVote =()=>{
    return (
      setVote(vote + 1),
      setCount(count.fill(vote + 1 ,[selected], [selected + 1]))
    ) 
  }
  console.log(count)

  //num max of vote
  let max = Math.max(...count);
  
  //index of anecdotes max
  let index = count.findIndex((m)=> m === max);
  

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <h4>{props.anecdotes[selected]}</h4>
      <h4> has {vote} votes</h4>
      <div>
        <button onClick={handleClick}>
          Next anecdote
        </button>
        <button onClick={handleVote}>
          Vote
        </button>
      </div>
      <div>
        <h3>Anecdore with most votes</h3>
        <p>{props.anecdotes[index]} </p> 
        <p> Has {max} votes</p>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
