import React from "react";
import "./App.css";
import Button from "./components/html/Button";

function App() {
  return (
    <div className="App">
      <Button variant="primary" onClick={() => console.log("clicked")}>
        Primary Button
      </Button>
    </div>
  );
}

export default App;
