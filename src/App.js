import React from "react";
import AnimalForm from "./components/AnimalForm";

import "./App.css";
const axios = (url) => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve({
        url: url,
        status: "success"
      })
    }, 3000)
  })
}
axios("www.google.com").then(resp => {
  console.log(resp);
})

function App() {
  return (
    <div className="App">
      <h1>Hello Code</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* <AnimalForm /> */}
    </div>
  );
}

export default App;
