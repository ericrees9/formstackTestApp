import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-foundation';
import PeopleCard from './components/PeopleCard/PeopleCard.js';

function App() {
  // setting a state for holding my people results
  const [people, setPeople] = useState([]);
  // setting a dummy state to re-render the page when necessary
  const [count, setCount] = useState(0)
  // using state for form fills!
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  
  const getPeople = (e) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => setPeople(json))
      .catch(err => console.error({ message: err }))
  }

  const addPeople = (e) => {
    e.preventDefault();
  
    fetch('https://jsonplaceholder.typicode.com/users/', {
      method: 'POST',
      body: JSON.stringify({
        name: `${name}`,
        username: `${username}`,
        email: `${email}`,
        id: `${people.length + 1}`
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => people.push(json), setCount(count + 1))
    .catch(err => console.error({ message: err }))
  }

  // function to sort my results array by the ID number
  const sortPeopleUp = (e) => {
    e.preventDefault();
    let numerical = people.sort(function(a, b){return a.id-b.id});
    setPeople(numerical);
    setCount(count + 1);
    console.log(people);
  }

  // function to sort my results array inversely by the ID number
  const sortPeopleDown = (e) => {
    e.preventDefault();
    let reversed = people.sort(function(a, b){return b.id-a.id});
    setPeople(reversed);
    setCount(count - 1);
    console.log(people);
  }

  // a function that is called in my child component when the delete button is clicked. 
  // the function uses findIndex to match the object's ID with the ID given from the child component to then splice the result out of the larger array.
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
        <Button className="getButton" onClick={(e) => getPeople(e)}>Get people</Button>
        <div className="addPeople">
          <input placeholder="First Name, Last Name" onChange={(e) => setName(e.target.value)} />
          <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} /> 
          <input placeholder="email@address.com" onChange={(e) => setEmail(e.target.value)} />
          <Button onClick={(e) => addPeople(e)}>Add person</Button>
        </div>
        <Button className="sortUpButton" onClick={(e) => sortPeopleUp(e)}>Sort IDs numerically</Button>
        <Button className="sortDownButton" onClick={(e) => sortPeopleDown(e)}>Reverse ID sorting</Button>
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
