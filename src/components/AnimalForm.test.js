import React from 'react';
import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AnimalForm from './AnimalForm';

test("renders without errors", ()=> {
    render(<AnimalForm/>);

})

test("Displays species when user fills in all fields and submits", ()=> {
    //Arrange: render AnimalForm
    render(<AnimalForm/>);
    //Act:
    // 1. Find the species field.
    //const species = screen.queryByPlaceholderText("species");
    // const species = screen.queryByLabelText("Species:");
    const species = screen.getByLabelText(/Species:/i);
    userEvent.type(species, "feline");
    //console.log(species);
    //userEvent.type(species, "feline")
    // 2. Type a species into the field.
    // 3. Find the age field.
    // const age = screen.queryByLabelText("Age:")
    const age = screen.getByLabelText(/Age:/i);
    userEvent.type(age, "3")
    // console.log(age);
    // 4. Type an age into the field.
    // 5. Find Notes field
    // const notes = screen.queryByLabelText("Notes:")
    const notes = screen.getByLabelText(/Notes:/i);
    userEvent.type(notes, "notes")
    //console.log(notes);
    // 6. Type notes into the field.
    // 7. Find our button.
    const button = screen.queryByRole("button")
    userEvent.click(button)
    // console.log(button);
    // 8. Click our button.

    //Assert:
    const output = screen.queryByText(/feline/i);
    //  Displays species typed

    expect(output).toBeInTheDocument();
    expect(output).toHaveTextContent("feline");
    expect(output).not.toBeFalsy();
});