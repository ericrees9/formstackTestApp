import React from 'react';
import '../PeopleCard/PeopleCard.css';
import { Button, Callout, Colors } from 'react-foundation';

const PeopleCard = (props) => {
    
    console.log(props);

    return(
        <Callout className="mainCard" color={Colors.SECONDARY}>
            <h4>{props.personData.name}</h4>
            <p><b>Username:</b> {props.personData.username}</p>
            <p><b>Email:</b> {props.personData.email}</p>
            <p><b>ID:</b> {props.personData.id}</p>
        </Callout>
    );
};

export default PeopleCard;