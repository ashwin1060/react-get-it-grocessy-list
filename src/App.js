import React, { useState, useEffect } from 'react';
import './App.css';
import ThingForm from "./components/thingsForm";
import ThingList from "./components/thingList";
import Typography from "@material-ui/core/Typography";

const LOCAL_STORAGE_KEY =  "react-get-it-list";

function App() {
  const [things, setThings] = useState([]);

  useEffect(() => {
    const storageItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageItems){
      setThings(storageItems);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(things));
  }, [things]);

  function toggleComplete(id){
    setThings(
      things.map(thing =>{
        if(thing.id === id){
          return {
            ...thing,
            completed: !thing.completed
          }
        }
        return thing;
      })
    );
  }

  function deleteThing(id){
    setThings(things.filter(thing => thing.id !== id));
  }

  function addThing(thing){
    setThings([thing, ...things]);
  }

  return (
    <div className="App">
        <Typography style={{padding: 15}} variant="h1">
          Get It
        </Typography>
        <ThingForm addThing={addThing} />
        <ThingList 
          things={things} 
          toggleComplete={toggleComplete} 
          deleteThing={deleteThing}
          />
    </div>
  );
}

export default App;
