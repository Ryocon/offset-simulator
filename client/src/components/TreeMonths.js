import React, { useState } from "react";

function TreeMonths(props) {
  const [formValues, setFormValues] = useState([{ year: "", number: 0 }]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    validate([...formValues, { year: "", number: 0 }]);
    setFormValues([...formValues, { year: "", number: 0 }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formValues), formValues[0].year, formValues[0].number)
    props.onSubmit(formValues)
    // if (parseInt(formValues.forEach.number)&& parseInt(formValues.forEach.year) > 55) {
    //     alert('Nope')
    // }

    formValues.forEach((lemon) => console.log(lemon))

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
          <label>Year</label>
          <input
            type="number"
            name="year"
            placeholder="YYYY"
            min="2023"
            max="2999"
            required={true}
            value={element.year || ""}
            onChange={(e) => handleChange(index, e)}
          />
          <label>Tree Amount</label>
          <input
            type="number"
            name="number"
            placeholder="1-55"
            min="1"
            max="55"
            value={element.number || 0}
            onChange={(e) => handleChange(index, e)}
          />
          {}
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
