import React, { useState} from 'react';
import { FormEvent } from "react";
import PersonComponent from './TestComponents';

function App() {

  const [formValues, setFormValues] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  function compute(e: FormEvent<HTMLFormElement>) {
    // prevent refreshing of the entire page on form submit
    e.preventDefault()

    // get data contained in form as JSON
    const form = e.currentTarget;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    console.log(formJson);
    console.log("next");
    console.log(formValues);

    // convert form data to BillData type object and run through processing
  }

  return (
    <div className="App">
      Hello World!

      <form onSubmit={compute}>

        {/* multiple people */}
        <hr />
        People go here...
        <PersonComponent />
        <button type="button">Add person</button>

        {/* tax amount */}
        <hr />
        Tax:
        <input name="taxValue" onChange={handleChange} />

        {/* tip type */}
        <hr />
        Tip type:
        <select name="tipType" onChange={handleChange}>
          <option value="someOption">Some option</option>
          <option value="otherOption">Other option</option>
        </select>
        {/* tip value */}
        <br />
        Tip value:
        <input name="tipValue" onChange={handleChange}/>

        {/* compute button */}
        <hr />
        <button type="submit">Compute</button>

        {/* results view */}

      </form>
    </div>
  );
}

export default App;
