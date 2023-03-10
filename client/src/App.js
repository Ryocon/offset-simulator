import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import Tag from './components/Tag'
import TreeMonths from "./components/TreeMonths";
import Graph from "./components/Graph";


function App() {
  //! Select country
  // sends post req to server which converts carbon amount to Kg and returns data
  let [carbonAmount, setCarbon] = useState(0);
  let [selectedCountry, setCountry] = useState();

  // api call
  const  sendData = (params) => {
    axios.post('/api/calculator', {
      params
    })
    .then(function (response) {
      setCarbon(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });

    setCarbon();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    console.log(formData);
    console.log(errors);

    let params = formData;

    setCountry(params.country)

    sendData(params);
  };

  //   DATA FOR STATE GOES HERE
  console.log(carbonAmount);
  console.log(selectedCountry)


// !Input data from tree number and months hoisted from child
 const getInput = (formValues) => {
  formValues.forEach(inputArray => console.log(inputArray))
  
  // let trees = new Array()
  // formValues.forEach(function(number, i){
  //   number[i]=trees
  // })

  // console.log(trees)

 }

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register("country")}>
        <option value="Australia">Australia</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
        <option value="India">India</option>
        <option value="Singapore">Singapore</option>
        <option value="South Africa">South Africa</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="United States">United States</option>
      </select>
      {/* <select {...register("simulationMode")}>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select> */}

      <input type="submit" />
    </form>

      <Tag
        country={selectedCountry}
        carbon={carbonAmount}
      />

      <TreeMonths 
      onSubmit={getInput}
      
      />

      <Graph />




    </div>
   
  );
}

export default App
