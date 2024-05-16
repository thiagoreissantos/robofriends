import React from "react";
import Card from "../card/Card";

const CardList = ({ robots }) =>{
    return robots.map((user, i) => cartByUser(user, i));
}

function cartByUser(user, i){
    return (
        <Card 
            key={i} 
            id={user.id} 
            name={user.name} 
            email={user.email} />)
}

export default CardList;