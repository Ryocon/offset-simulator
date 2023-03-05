import React, { useState, useEffect } from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import Input from './Input'
import Selector from "./Selector";

// to pull from api?
let dataSet = (Input) => {
    
}

// to grab selector variables
let selectorVariables = (Selector) => {

}





const columns = [{
    dataField: 'id',
    text: 'Product ID'
  }, {
    dataField: 'name',
    text: 'Product Name'
  }, {
    dataField: 'price',
    text: 'Product Price'
  }];

export default () =>
  <BootstrapTable keyField='id' data={  } columns={ columns } />
