import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close";

function Thing({thing, toggleComplete, deleteThing}){

    function onCheckboxClick(){
        toggleComplete(thing.id)
    }

    function onButtonClick(){
        deleteThing(thing.id);
    }

    return(
        <ListItem style={{display: "flex"}}>
            <Checkbox 
                checked={thing.completed}
                onClick={onCheckboxClick} 
            />
            <Typography
                variant="body1"
                style={{
                    textDecoration: thing.completed ? "line-through" : null            
                }}
            >
                {thing.theThing}
            </Typography>
            <IconButton onClick={onButtonClick}>
                <CloseIcon />
            </IconButton>
        </ListItem>
    );
}

export default Thing;