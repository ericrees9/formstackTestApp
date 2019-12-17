import React, { useState } from 'react';
import '../PeopleCard/PeopleCard.css';
import { Button, Callout, Colors, Switch, Sizes } from 'react-foundation';

const PeopleCard = (props) => {
    // console.log(props);

    const deletePeople = () => {
        // let getPeople = props.getPeople;

        // fetch(`https://jsonplaceholder.typicode.com/users/${props.personData.id}`, {
        //     method: 'DELETE'
        // })
        // .then(getPeople(e))
        // .then(console.log('This person has been deleted.'))
        // .catch(err => console.error({ message: err }))
        console.log(`The ID number is: ${props.personData.id}`);
        props.deleteArray(props.personData.id);
    }

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