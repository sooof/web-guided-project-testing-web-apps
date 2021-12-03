import React from "react";
import AnimalForm from "./components/AnimalForm";

import "./App.css";

function App() {
  // var a = 123
  // // const a = 456
  // console.log("test", a)

  // function f(){
  //   console.log("function f  a = ", a)
  //   // let a
  // }
  // console.log(f())
  return (
    <div className="App">
      <h1>Add New Animal</h1>
      <AnimalForm />
    </div>
  );
}

export default App;
