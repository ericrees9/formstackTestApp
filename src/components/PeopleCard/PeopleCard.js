import React from 'react';
import '../PeopleCard/PeopleCard.css';
import { Button, Callout, Colors, Switch, Sizes } from 'react-foundation';

const PeopleCard = (props) => {
    
    // console.log(props);

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
                <Button color={Colors.ALERT}>Delete</Button>
            </div>
        </Callout>
    );
};

export default PeopleCard;