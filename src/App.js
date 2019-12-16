import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-foundation';
import PeopleCard from './components/PeopleCard/PeopleCard.js';

function App() {
  const [people, setPeople] = useState([]);
  const [count, setCount] = useState(0)
  
  const getPeople = (e) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => setPeople(json))
      .catch(err => console.error({ message: err }))
  }

  const addPeople = (e) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        name: 'foo',
        username: 'bar',
        email: 'erees1@gmail.com',
        id: `${people.length + 1}`
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
  }

  const sortPeopleUp = (e) => {
    e.preventDefault();
    let numerical = people.sort(function(a, b){return a.id-b.id});
    setPeople(numerical);
    setCount(count + 1);
    console.log(people);
  }

  const sortPeopleDown = (e) => {
    e.preventDefault();
    let reversed = people.sort(function(a, b){return b.id-a.id});
    setPeople(reversed);
    setCount(count - 1);
    console.log(people);
  }
  
  return (
    <div className="App">
      <div className="Sidebar">
        <Button className="getButton" onClick={(e) => getPeople(e)}>GET</Button>
        <Button className="addButton">ADD</Button>
        <Button className="sortUpButton" onClick={(e) => sortPeopleUp(e)}>SORT UP</Button>
        <Button className="sortDownButton" onClick={(e) => sortPeopleDown(e)}>SORT DOWN</Button>
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
