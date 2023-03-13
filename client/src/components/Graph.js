import React, { useState, useEffect, PureComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Graph(props) {

    // For the return of the API offest response
    // to then be passed to the chart
    let [setRes, res] = useState()

    let sendPropData = (props) => {
        axios.post('/api/offset', {
            props
        })
        .then(function (response) {
            setRes(response.data)
        })
        .catch(function (error) {
            console.log(error);
          });
    }

  console.log(props.carbon);
//   crashes if changed to dot notation to pull year and number
  console.log(props.data);

// operator not working?
if (props.carbon && props.data !== 'undefined') {
    console.log(props)
    sendPropData(props)
    return (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={200}
            height={60}
            data={props.data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          > 
          <XAxis dataKey={props[0].year} />
          <YAxis />
            <Area type="monotone" dataKey={props[0].number} stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      );
}

 

//   return (
//     <ResponsiveContainer width="100%" height="100%">
//       <AreaChart
//         width={200}
//         height={60}
//         data={graphData}
//         margin={{
//           top: 5,
//           right: 0,
//           left: 0,
//           bottom: 5,
//         }}
//       > 
//       <XAxis dataKey={props.year} />
//       <YAxis />
//         <Area type="monotone" dataKey={props.carbon} stroke="#8884d8" fill="#8884d8" />
//       </AreaChart>
//     </ResponsiveContainer>
//   );
}

export default Graph;
