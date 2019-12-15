import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-foundation';
import PeopleCard from './components/PeopleCard/PeopleCard.js';

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
        <Button className="getButton" onClick={(e) => getPeople(e)}>GET</Button>
        <Button className="addButton">ADD</Button>
        <Button className="sortUpButton">SORT UP</Button>
        <Button className="sortDownButton">SORT DOWN</Button>
      </div>
      <div className="Results">
        {people.map((person, index) => {
          return(
            <PeopleCard personData={person}></PeopleCard>
          )
        })}
      </div>
    </div>
  );
}

export default App;
