import React from 'react';
import '../PeopleCard/PeopleCard.css';
import { Button, Callout, Colors, Switch } from 'react-foundation';

const PeopleCard = (props) => {

    // delete function that is called when button is clicked. deleteArray is a function passed in from the parent component so that it can dynamically know which ID number is being clicked.
    const deletePeople = () => {
        // this is the fetch that I was originally using to delete data, but the webservice doesn't actually delete any data so it was causing problems.

        // fetch(`https://jsonplaceholder.typicode.com/users/${props.personData.id}`, {
        //     method: 'DELETE'
        // })
        // .then(getPeople(e))
        // .then(console.log('This person has been deleted.'))
        // .catch(err => console.error({ message: err }))
        console.log(`The ID number is: ${props.personData.id}`);
        props.deleteArray(props.personData.id);
    }

    // this card relies heavily on props being passed in during the people.map on the parent component.
    // this set-up allows for all of this data to be generated dynamically for each individual card.
    return(
        <Callout className="mainCard" color={Colors.SECONDARY}>
            <div className="infoArea">
                <h4>{props.personData.name}</h4>
                <p><b>Username:</b> {props.personData.username}</p>
                <p><b>Email:</b> {props.personData.email}</p>
                <p><b>ID:</b> {props.personData.id}</p>
            </div>
            <div className="actionArea">
                <Switch></Switch>
                <Button color={Colors.ALERT} onClick={(e) => deletePeople(e)}>Delete</Button>
            </div>
        </Callout>
    );
};

export default PeopleCard;