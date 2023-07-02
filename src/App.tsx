import React from "react";
import "./App.css";
import List from "./components/generics/List";
import RandomNumber from "./components/restriction/RandomNumber";

function App() {
  return (
    <div className="App">
      {/* <RandomNumber value={10} isPositive /> */}
      {/* you can also set isNegative, isZero to true which is not good. you should be able to restrict that - if isPositive is set to true, other ones should be disallowed. - 'restricted props' */}
      {/* <RandomNumber value={10} isPositive isNegative isZero /> */}
      <RandomNumber value={10} isPositive />
    </div>
  );
}

export default App;
