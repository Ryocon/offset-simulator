import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputForm from './components/Input';
import Selector from './components/Selector';
import TableOutput from "./components/Table";

function App() {


// set res as variables

// empty states for data returned on form submits




  return (
    <div>
      <Selector />
      {/* <InputForm /> */}
      <TableOutput />
    </div>
    
  )
}

export default App
