
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//initial state
const initState = 0;

const App = (props) => {
  const [selected, setSelected] = useState(initState)
  const [vote, setVote] = useState(Number)

  //ramdom num
  function ramdom(max, min){
    return Math.floor(Math.random() * (max - min + 1 ) + min )
  }
  //control anecdote
  const handleClick =()=>(setSelected(selected + ramdom(5,0)));
  console.log(selected)
  //reset
  if(selected > 5){
    return( () => setSelected(initState),
    setSelected(0)
    )
  }
  // control button
  const handleVote =()=>(setVote(vote + 1))
  // condition vote
  

  return (
    <div>
      <h3>{props.anecdotes[selected]}</h3>
      <h4>{vote}</h4>
      <div>
        <button onClick={handleClick}>
          Next anecdote
        </button>
        <button onClick={handleVote}>
          Vote
        </button>
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
