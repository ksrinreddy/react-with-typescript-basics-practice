import React from "react";
import "./App.css";
import CustomComponent from "./components/html/CustomComponent";

function App() {
  return (
    <div className="App">
      <CustomComponent name="ram" isLoggedIn={true} />
    </div>
  );
}

export default App;
