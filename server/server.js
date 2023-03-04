const express = require('express')
const app = express()


app.get("/api", (req, res) => {
    res.json({
        "countries": [{
            "Australia": {
                "carbon": 17.10
            },
            "China": {
                "carbon": 7.38
            },
            "Germany": {
                "carbon": 9.44
            },
            "India": {
                "carbon": 1.91
            },
            "Singapore": {
                "carbon": 8.56
            },
            "South Africa": {
                "carbon": 6.95
            },
            "United Kingdom": {
                "carbon": 5.55
            },
            "United States": {
                "carbon": 15.52
            }
      }]
    })
})

app.listen(5000, () => { console.log("Server running on port 5000!") })