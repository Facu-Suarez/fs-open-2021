import React, { useState } from "react";
import Filter from "./component/Filter";



const App = () => {
  const [persons, setPerson] = useState([
    { name: "Arto Hellas", num: "040-123456", id: 1 },
    { name: "Ada Lovelace", num: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", num: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", num: "39-23-6423122", id: 4 },
  ]);
  console.log(persons);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [search, setSearch] = useState("");

  //control
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumChange = (event) => {
    setNewNum(event.target.value);
  };
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  //add person and num
  const addName = (event) => {
    event.preventDefault();
    const obj = {
      name: newName,
      num: newNum,
      id: persons.length + 1,
    };
    setPerson([...persons, obj]);
    setNewName("");
    setNewNum("");
  };

  //alert
  let c = persons.some((i) => {
    return i.name.toLowerCase() === newName.toLowerCase();
  });
  if (c === true) {
    alert(`name repeated "${newName}"`);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          filter shown with: <input onChange={handleSearchChange} />
        </div>
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
      <h2>Add new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          num: <input value={newNum} onChange={handleNumChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <Filter persons={persons} search={search} />
    </div>
  );
};

export default App;
