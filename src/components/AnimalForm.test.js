import React from "react";
import { render, screen } from '@testing-library/react';

import AnimalForm from './AnimalForm';

test("render with errors", () => {
    render(<AnimalForm/>)
    console.log("inside of test");
})
test("displays header when component mounts", () => {
    render(<AnimalForm/>)
    console.log("inside of test");
})