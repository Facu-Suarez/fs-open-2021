import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  console.log(persons)
  const [ newName, setNewName ] = useState('')

  
  const addPerson =(event)=>{
    event.preventDefault()
    const objectP = {
      id: persons.length + 1,
      name: newName
    }
    setPersons([...persons, objectP])
    setNewName('')
  }

  const handlePersonsChange = (event) => {
    setNewName(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonsChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((persons) => 
          <li key={persons.id}>{persons.name}</li>
        )}
      </ul>
    </div>
  )
}

export default App
