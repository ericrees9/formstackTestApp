import React, { useState } from 'react';
import './App.css';

function App() {
  const [people, setPeople] = useState([]);
  
  const getPeople = (e) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => setPeople(json))
      .then(console.log(people))
      .catch(err => console.error({ message: err }))
  }

  
  return (
    <div className="App">
      <div className="Sidebar">
        <button className="getButton" onClick={(e) => getPeople(e)}>GET</button>
        <button className="addButton">ADD</button>
        <button className="sortUpButton">SORT UP</button>
        <button className="sortDownButton">SORT DOWN</button>
      </div>
      <div className="Results">
        {people.map((person, index) => {
          return(
            `${person.id} , ${person.name} , ${person.username} `
             
          )
        })}
      </div>
    </div>
  );
}

export default App;
