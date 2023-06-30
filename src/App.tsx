import React from "react";
import "./App.css";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Counter from "./components/state/Counter";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
