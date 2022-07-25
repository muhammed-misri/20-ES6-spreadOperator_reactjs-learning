// spread operator

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["Lime", "Lemon", "Orange"];

/* 1 ---------------------------
const fruits = ["Apple", "Banana", "Coconut", ...citrus];
console.log(fruits);
// (6) ["Apple", "Banana", "Coconut", "Lime", "Lemon", "Orange"]
-----------------------------------------------------
*/

/* 2 --------------------------- 
const fruits = ["Apple", ...citrus, "Banana", "Coconut"];
console.log(fruits);
// (6) ["Apple", "Lime", "Lemon", "Orange", "Banana", "Coconut"]
-----------------------------------------------------
*/

// we can use the spread operator with objects
const fullName = {
  fName: "Muhammed",
  lName: "Mi"
};

// -------------------------------------------------
// then I created another object
/*
const user = {
  ...fullName,
  id: 1,
  username: "MuhammedMi02"
};
*/

// console.log(user);
/*
    fName: "Muhammed"
    lName: "Mi"
    id: 1
    username: "MuhammedMi02"
  */

// -------------------------------------------------

/*  
notice how this is not the same as if we simply just 
inserted this object full name into this user object
*/

const user = {
  fullName,
  id: 1,
  username: "MuhammedMi02"
};
console.log(user);

/*
fullName: Object
  fName: "Muhammed"
  lName: "Mi"
id: 1
username: "MuhammedMi02"
*/

// object being nested inside our user object

// -------------------------------------------------
