import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

function Selector () {

    let [carbonAmount, setCarbon] = useState(0)
    // let [countryChoice, setCountry] = useState('None')

// api call
const sendData = (params) => {
    fetch('/api/calculator',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            params
        })
    })
    .then( console.log(params.country, params.simulationMode))
    .then(res => {
            if (res.ok) {                    
                console.log('^ Sending Receiving V')
                return res.json()
            } else {
                console.log('It not work')
            }
        })
    // .then(returnData => console.log(returnData))
    .then(returnData => setCarbon(returnData))
    // .then(res => setCarbon(res.carbon))

    .catch(error => console.log(error))

    setCarbon()
}


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    console.log(formData);
    console.log(errors);

    
    // let params = {
    //     country: formData.country,
    //     simMode: formData.simulationMode
    // }

    let params = formData

    sendData(params)
    
   

  };

//   DATA FOR STATE GOES HERE
  console.log(carbonAmount)




  return (
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
      <select {...register("simulationMode")}>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>

      <input type="submit" />
    </form>
  );
};

export default Selector