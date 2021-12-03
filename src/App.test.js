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