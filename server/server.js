const express = require('express')
const app = express()


// app.get("/api", (req, res) => {
//     res.json({
//         "countries": [{
//             "Australia": {
//                 "carbon": 17.10
//             },
//             "China": {
//                 "carbon": 7.38
//             },
//             "Germany": {
//                 "carbon": 9.44
//             },
//             "India": {
//                 "carbon": 1.91
//             },
//             "Singapore": {
//                 "carbon": 8.56
//             },
//             "South Africa": {
//                 "carbon": 6.95
//             },
//             "United Kingdom": {
//                 "carbon": 5.55
//             },
//             "United States": {
//                 "carbon": 15.52
//             }
//       }]
//     })
// })

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