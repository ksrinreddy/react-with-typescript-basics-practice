import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Chong",
    last: "Wei",
  };

  const nameList = [
    {
      first: "Lin",
      last: "Dan",
    },
    {
      first: "Peter",
      last: "Gade",
    },
    {
      first: "Chong",
      last: "Wei",
    },
  ];
  return (
    <div className="App">
      <Greet name="Reddy" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
