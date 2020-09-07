import React, {useState} from "react";
import {v4 as uuid} from "uuid";
import { Button, TextField } from "@material-ui/core";

function ThingsForm({ addThing }){

    const [thing, setThing] = useState({
        id: "",
        theThing: "",
        completed: false
    });

    function handleInputChange(e) {
        setThing({...thing, theThing : e.target.value });
    }

    function handleSubmit(e){
        e.preventDefault();
        if(thing.theThing.trim()){
            addThing({...thing, id: uuid()}); 
            // reset input
            setThing({...thing, theThing: ""});
        }
    }

    return(
        <form className="things-form" onSubmit={handleSubmit}>
            <TextField
                label="Things"
                type="text"
                name="things to get"
                value={thing.theThing}
                onChange={handleInputChange}
            />
            <Button type="submit">Add</Button>
        </form>
    );
}

export default ThingsForm;