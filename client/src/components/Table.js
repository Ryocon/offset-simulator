import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios'

// to pull from api?
let dataSet = (Input) => {
    
}

// to grab selector variables
let selectorVariables = (Selector) => {

}

function fillTables() {

 

}

function TableOutput() {



    // useEffect(() => {
    //     apiCall()
    // }, [])


    // const [cells, setCell] = useState()

    // const apiCall = () => {
    //    axios
    //     .get('/api')
    //     .then((res) => {
    //         setCell(res.data)
    //         console.log(cells)
    //     })
    //     .catch((err) => console.error(err))
    // }

    // calls api
    // apiCall()

  return (
    <Table striped bordered hover>
        {/* {Object.cells?.map((countries) =>
        <thead key={cells.countries.id}>
            <tr>
                <th>
                    {cells.countries.name}
                </th>
                <th>
                    {countries.carbon}
                </th>
            </tr>
        </thead>
        
        )} */}
      <thead>
        <tr>
          <th>#</th>
          <th>Mike</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableOutput;
