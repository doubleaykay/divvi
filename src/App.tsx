import React from 'react';
import { FormEvent } from "react";

function App() {
  function compute(e: FormEvent<HTMLFormElement>) {
    // prevent refreshing of the entire page on form submit
    e.preventDefault()

    // get data contained in form as JSON
    const form = e.currentTarget;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    console.log(formJson);

    // convert form data to BillData type object and run through processing
  }

  return (
    <div className="App">
      Hello World!

      <form onSubmit={compute} method="POST">

        {/* multiple people */}
        <hr />
        People go here...
        <button type="button">Add person</button>

        {/* tax amount */}
        <hr />
        Tax:
        <input name="taxValue" />

        {/* tip type */}
        <hr />
        Tip type:
        <select name="tipType">
          <option value="someOption">Some option</option>
          <option value="otherOption">Other option</option>
        </select>
        {/* tip value */}
        <br />
        Tip value:
        <input name="tipValue" />

        {/* compute button */}
        <hr />
        <button type="submit">Compute</button>

        {/* results view */}

      </form>
    </div>
  );
}

export default App;
