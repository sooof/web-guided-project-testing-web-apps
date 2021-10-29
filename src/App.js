import React from "react";
import AnimalForm from "./components/AnimalForm";

import "./App.css";
console.log("App ")

function App() {
  // const new =1;

  return (
    <div className="App">
      {/* <h1 data-testid="header">Add New Animal</h1> */}
      <h1>Add New Animal</h1>
      <AnimalForm />
    </div>
  );
}

export default App;
