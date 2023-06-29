import React from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      {/* <Button
        handleClick={() => {
          console.log("Button clicked");
        }}
      /> */}
      {/* <Button
        handleClick={(event) => {
          console.log("Button clicked", event);
        }}
      /> */}
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      {/* <Input value="" handleChange={(event) => console.log(event)} /> */}
      <Input value="" />
    </div>
  );
}

export default App;
