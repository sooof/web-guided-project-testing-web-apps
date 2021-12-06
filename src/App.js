import React from "react";
import AnimalForm from "./components/AnimalForm";
import axios from 'axios';

import "./App.css";
// const axios = (url) => {
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve({
//         url: url,
//         status: "success"
//       })
//     }, 3000)
//   })
// }
// axios("www.google.com").then(resp => {
//   console.log(resp);
// })

// const doSomeCalls = () => {
//   axios("www.google.com/1").then((resp1) => {
//     axios("www.google.com/2").then((resp2) => {
//       axios("www.google.com/3").then((resp3) => {
//           console.log(resp1, resp2, resp3)
//       })
//     })
//     // console.log(resp1)
//   })
// }

// doSomeCalls()

const doSomeAsyncCalls = async () => {
  const resp1 =await axios("www.google.com/1")
  const resp2 =await axios("www.google.com/2")
  const resp3 =await axios("www.google.com/3")
  console.log("async", resp1, resp2, resp3);
}
// doSomeAsyncCalls()

const getDogImages = () => {
  // axios.get(`https://dog.ceo/api/breed/hound/images`).then((dogs) => {
  //   console.log(dogs);
  // })
  try{
    const dogs = axios.get(`https://dog.ceo/api/breed/hound/images`)
    console.log(dogs)
  }catch(err) {
    console.log(err)
  }

}
getDogImages()


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
