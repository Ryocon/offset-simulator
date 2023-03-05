const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended : true}));

app.use(express.static('public'));
// app.use(require('connect').bodyParser())

// maths goes here
// return variables for frontend to pull from

// post route
app.post('/api/calculator', (req, res) => {
    countryData = req.body.params.country
    simulationData = req.body.params.simulationMode
    console.log('Calc route hit')
    console.log(req.body)
    console.log(simulationData)
    console.log(countryData)
    
    let carbon = []

    // switch(countryData, carbon) {
    //     case 'Australia':
    //         countryData === 'Australia'
    //         console.log(countryData + ' in switch')
    //         let carbon = 17.1
    //         break
    //     case 'China':
    //         return countries[1].carbon
            
        
    // }

    if (countryData === 'Australia') {
        carbon = 17.1
    }

    
    console.log(carbon)


    const unitConverter = (carbon) => {
        // convert tonnes to kg
        console.log(carbon * 1000 + ' times 1000')
        console.log(carbon * 1000 / 12 + ' times 1000 divided by 12')
        return carbon * 1000 / 12
    }

    unitConverter(carbon)

    





    returnData = 'hello'

    return res.json(returnData)

    
})


const offsetCalculator = (countryData) => {

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