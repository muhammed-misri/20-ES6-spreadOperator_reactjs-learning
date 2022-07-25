/* 
now this code is to long ... we will use what we learn 
inside index.js file here
*/

import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      /*
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
      */
      // --------------------------------------

      /*
      we can return an object where we use the 
      spread operator to add in the previous value of 
      the object
      */

      return {
        // ...prevValue,

        // this tow type of statments ... is not work
        // ----------------------------
        // name: value
        // event.target.name: value

        /*
        ------------------------------- 
        What we have to do instead is we need to add 
        the value that we want inside and an array syntax
        */

        // ------------------------------------------------
        ...prevValue,
        [name]: value
        // ------------------------------------------------
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
