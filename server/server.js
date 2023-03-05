const express = require('express')
const app = express()

// maths goes here
// return variables for frontend to pull from

const offsetCalculator = (country) => {

    // dollars
    const tree = 120
    const treePerYear = 12
    const treeLimit = 55
    // number in kg
    const offsetMax = 28.5
    // times by 6 to reach max
    const offsetOne = 4.75


    // return converted number


}

// switch statement?

const unitConverter = (carbon) => {
    // convert tonnes to kg
    console.log(carbon * 1000)
    console.log(carbon * 1000 / 12)
    return carbon * 1000 / 12
    
}



app.get("/api", (req, res) => {
  res.json({
    countries: [
      { id: 0, name: "Australia", carbon: 17.1 },
      { id: 1, name: "China", carbon: 7.38,},
      { id: 3, name: "Germany", carbon: 9.44 },
      { id: 4, name: "India", carbon: 1.91 },
      { id: 5, name: "Singapore", carbon: 8.56 },
      { id: 6, name: "South Africa", carbon: 6.95 },
      { id: 7, name: "United Kingdom", carbon: 5.55 },
      { id: 8, name: "United States", carbon: 15.52 },
    ],
  });
});


app.listen(5000, () => { console.log("Server running on port 5000!") })