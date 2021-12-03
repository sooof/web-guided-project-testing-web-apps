import React from "react";
import { render, screen } from '@testing-library/react';

import App from './App';

test("Test 1", () => {
    console.log("inside of test");
   
})
describe("login tests", ()=> {
    test("testing a test", ()=> {
        console.log("test is running");
    });

    test("testing a test", ()=> {
        console.log("test is running");
    });

    test("testing a test", ()=> { 
        console.log("test is running");
    });
})

test("render with errors", () => {
    render(<App/>)
    console.log("inside of test");
})

test("displays header when component mounts", ()=> {
    //Arrange: Setup our App component.
    render(<App/>);

    //Act: Find our header on the screen

    //query: if an element does not exist returns a null
    const header = screen.queryByText('Add New Animal'); 
    // const header = screen.getByText('Add New Animali');
    // const header = screen.findByText('Add New Animalin');
    console.log("header ", header);

    //get: if an element does not exist returns fails
    // const header = screen.getByText('Add Old Animal');

    //find: if an element does not exist fails. Returns a promise.
    // const header = screen.findByText('Add New Animal');

   //Assert: Confirm that the header exists
    // expect(header).toBeInTheDocument();
    // expect(header).toBeTruthy();
    expect(header).toHaveTextContent(/add new animal/i);
    // expect(header).not.toBeFalsy();

})