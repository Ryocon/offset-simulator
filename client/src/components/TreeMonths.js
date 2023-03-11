import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function TreeMonths(props) {
  const [formValues, setFormValues] = useState([{ month: "", number: "" }]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    validate([...formValues, { month: "", number: "" }]);
    setFormValues([...formValues, { month: "", number: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formValues), formValues[0].month, formValues[0].number)
    props.onSubmit(formValues)
  };

  // ! NOT CURRENTLY WORKING
  let validate = (...formValues) => {
    if (formValues.number > 55) {
      alert("55 is the maximum number!");
      setFormValues((formValues.number = 1));
    }

    // if (number === 0) {
    //     alert('Value cannot be zero!')
    //     setFormValues(number = 1)
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formValues.map((element, index) => (
        <div className="form-inline" key={index}>
          <label>Month</label>
          <input
            type="month"
            name="month"
            required={true}
            value={element.month || ""}
            onChange={(e) => handleChange(index, e)}
          />
          <label>Tree Amount</label>
          <input
            type="number"
            name="number"
            minLength={0}
            maxLength={55}
            value={element.number || ""}
            onChange={(e) => handleChange(index, e)}
          />
          {index ? (
            <button
              type="button"
              className="button remove"
              onClick={() => removeFormFields(index)}
            >
              Remove
            </button>
          ) : null}
        </div>
      ))}
      <div className="button-section">
        <button
          className="button add"
          type="button"
          onClick={() => addFormFields()}
        >
          Add
        </button>
        <button className="button submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default TreeMonths;
