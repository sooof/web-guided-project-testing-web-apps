import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AnimalForm from './AnimalForm';

test("render with errors", () => {
    render(<AnimalForm/>)
    console.log("inside of test");
})
test("displays header when component mounts", () => {
    render(<AnimalForm/>)
    console.log("inside of test");
})

test("Renders new species when submitting with all fields filled",  async ()=> {
    //Arrange: render my component
    render(<AnimalForm/>);

    //Act: 
    //  1. Find the species text field
    // const speciesField = screen.getByPlaceholderText("species");
    const speciesField = screen.getByLabelText(/species:/i);
    // console.log(speciesField)
    //  2. Type in our species
    userEvent.type(speciesField, "feline");
    //  3. Find the age text field.
    const ageField = screen.getByLabelText(/age:/i);
    //  4. Type in the age.
    userEvent.type(ageField, "2");
    //  5. Find the notes field.
    const noteField = screen.getByLabelText(/notes:/i);
    //  6. Type a note.
    userEvent.type(noteField, "cutest");
    //  7. Find the submit button.
    const button = screen.getByRole("button");
    //  8. Click the submit button.
    userEvent.click(button);

    //Assert: Species should be renders in our current animals list
    // M 1
    // const speciesFeedback = screen.queryByText("feline");
    // console.log(speciesFeedback) 
    // M 2 Promise Way:
    // const speciesFeedback = screen.findByText("feline");
    // speciesFeedback.then( speciesFeed => {
    //     console.log(speciesFeed)
    // })

    // M 3 Async/Await Way:
    const speciesFeedback = await screen.findByText("feline");
    expect(speciesFeedback).toBeInTheDocument();


    // expect(speciesFeedback).toBeInTheDocument();
    // expect(speciesFeedback).toBeTruthy();
    // expect(speciesFeedback).not.toBeFalsy();


})