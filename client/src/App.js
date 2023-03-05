import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputForm from './components/Input';
import Selector from './components/Selector';
// import BootstrapTable from 'react-bootstrap-table-next';

function App() {

// // api fetch
// const [countryData, setCountryData] = useState([{}])

// useEffect(() => {
//     fetch("/api").then(
//         res => res.json()
//     ).then(
//         data => {
//         setCountryData(data)
//         console.log(data)
//         }
//     )
// }, [])

// set res as variables

// empty states for data returned on form submits




  return (
    <div>
      <Selector />
      {/* <InputForm /> */}
      {/* <BootstrapTable /> */}
    </div>
    
  )
}

export default App
