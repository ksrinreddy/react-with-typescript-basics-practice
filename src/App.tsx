import React from "react";
import "./App.css";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Container styles={{ border: "1px solid #000", padding: "1rem" }} />
    </div>
  );
}

export default App;
