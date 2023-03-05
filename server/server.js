const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended : true}));

app.use(express.static('public'));
// app.use(require('connect').bodyParser())

let params = []
console.log(params)
// maths goes here
// return variables for frontend to pull from

// post route
app.post('/api/calculator', (req, res) => {
    testData = req.body.params.country
    // req.body.country
    // res.json(params)
    // console.log(req.params)
    console.log(req.body)
    console.log(testData)
    console.log('Calc route hit')
    
})

// app.post('/api/calculator', (req, res) => {
//     req.body = params
//     console.log(params)
//     console.log('Calc route hit')

// })

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
switch(params.country) {
    case 'Australia':
        return carbon = 17.1
    case 'China':
        return countries[1].carbon
        

}

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