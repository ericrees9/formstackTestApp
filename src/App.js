import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-foundation';
import PeopleCard from './components/PeopleCard/PeopleCard.js';
import { nextTick } from 'q';

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
    .catch(err => console.error({ message: err }))
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

  const deleteArray = (id) => {
    // console.log(`Running in deleteArray function. The id is: ${id}`);

    // let minusOne = people.splice(id-1,1);
    // setPeople(people);
    // setCount(count + 1);
    // console.log(people);
    
    // console.log(`The arrayID is: ${id-1}`);

    // for( let i = 0; i < people.length; i++ ){ 
    //   if (people[i] === id-1) {
    //     console.log(`the loop is running.`);
    //     people.splice(i, 1);
    //     i--;
    //     setPeople(people);
    //     setCount(count + 1); 
    //     console.log(people);
    //   }
    // }

    // people.forEach((e) => {
    //   // console.log(e);
    //   // console.log(id);
    //   if (e.id == id) {
    //     console.log(`success!`)
    //     let minus = people.splice(id-1, 1);
    //     setPeople(people);
    //     setCount(count + 1); 
    //   }
    // });

    let minus = people.splice(people.findIndex(e => e.id === id),1);
    setPeople(people);
    setCount(count + 1);
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
            // passing the individual person data as props to the component for data to render
            // passing in the getPeople function so that the deletePeople function in the component can refresh the array
            <PeopleCard personData={person} deleteArray={deleteArray}></PeopleCard>
          )
        })}
      </div>
    </div>
  );
}

export default App;
