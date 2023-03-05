import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const Selector = () => {
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
    let countryParam = params.country

    // let countryChoice = formData.country
    
    // const request = ( url, params, method ) => {
    //     // All logic is here.
    // };

    // post data to server via get
    // let sendData = async () => {
    //     const result = await fetch(`/api/calculator`, {
    //         method: "GET",
    //     })
    //     const returnData = await result.json()
    //     console.log(returnData)
    //     return returnData
    // }

    // const sendData = async () => {
    //     const request = await fetch("/api/calculator", {
    //      method: "POST",
    //      body: JSON.stringify({
    //        params
    //      }),
    //     });
    //     const data = await request.json();
    //     console.log(data); 
    //    };

    // sendData()
    
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
        .then(returnData => console.log(returnData))
        .catch(error => console.log(error))
    }

    sendData(params)
   

  };

  // api fetch
// const [countryData, setCountryData] = useState([{}])

// useEffect(() => {
//     fetch("/api").then(
//         res => res.json()
//     ).then(
//         countryData => {
//         setCountryData(countryData)
//         console.log(countryData)
//         }
//     )
// }, [])



  //   incremental logic
  let state = {
    count: 0,
  };

  // handleIncrement increments this.state.count by 1
  let handleOffsetIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

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