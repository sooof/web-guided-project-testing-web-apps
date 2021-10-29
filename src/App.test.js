import React from "react";
import { render, screen } from '@testing-library/react';

import App from './App';

// describe("login tests", ()=> {
//     test("testing a test", ()=> {
//         console.log("test is running");
//     });

//     test("testing a test", ()=> {
//         console.log("test is running");
//     });

//     test("testing a test", ()=> {
//         console.log("test is running");
//     });
    
// });

// describe("header tests", ()=> {
//     test('testing a test', () => {
//         console.log("test is running")     
//     });


//     test('testing 2 a test', () => {
//         console.log("test  2 is running")     
//     });

//     test('testing 3 a test', () => {
//         console.log("test  3 is running")     
//     });
// });

// test("renders without errors", ()=>{
//     render(<App/>);
// });

test("when mounts header is rendered", ()=> {
    render(<App/>);

    //Act: Mount our comment. Find the header element
    // const header = screen.queryByText("Add New Animal");
    //const header = screen.queryByTestId("header");
    //const header = screen.queryByText(/add new animal/i);
    const header = screen.queryByText(/add new animal/i);
   
    // console.log(header);
    //Assert: Verify that our header element exists
    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy()
    expect(header).toHaveTextContent(/Add New Animal/i)
    console.log(header.textContent)
    // const value = 1
    // expect(value).toBe(1);
    const value = true
    expect(value).toBeTruthy();
});
