import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'


// ! old fetch post
    // fetch("/api/calculator", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     params,
    //   }),
    // })
    //   .then(console.log(params.country, params.simulationMode))
    //   .then((res) => {
    //     if (res.ok) {
    //       console.log("^ Sending Receiving V");
    //       return res.json();
    //     } else {
    //       console.log("It not work");
    //     }
    //   })
    //   // .then(returnData => console.log(returnData))
    //   .then((returnData) => setCarbon(returnData))
    //   // .then(res => setCarbon(res.carbon))

    //   .catch((error) => console.log(error));
