import React from "react";
import "./App.css";
import List from "./components/generics/List";

function App() {
  return (
    <div className="App">
      {/* array of strings */}
      {/* <List
        items={["ram", "raj", "raghav"]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* array of numbers */}
      {/* <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}

      {/* array of objects */}
      <List
        items={[
          {
            id: 1,
            first: "one first",
            second: "one second",
          },
          {
            id: 2,
            first: "two first",
            second: "two second",
          },
          {
            id: 3,
            first: "three first",
            second: "three second",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
