import React from "react";
import Thing from "./thing";
import { List } from "@material-ui/core";

function ThingList({things, toggleComplete, deleteThing}){

    return(
        <List>
            {
                things.map(thing =>( <Thing 
                    key={thing.id} 
                    thing={thing} 
                    toggleComplete={toggleComplete} 
                    deleteThing={deleteThing}/>  
            ))}
        </List>
    );
}

export default ThingList;