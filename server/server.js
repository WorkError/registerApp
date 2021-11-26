const express = require("express")

const app = express()

app.use(express.json()); // należy pamiętać o nagłówku w fetch-u

// app.use(express.text()) // w razie problemów z danymi użyj text()

const PORT = 4000;

let id = 1
var testData = new Date()
var users = [
    {
        id: 1,
        login: 'qq',
        password: 'qq',
        date: testData,
    }
]

app.post("/", function (req, res) {
    console.log(req.body)
    //res.send(req.body)
    res.send(users)
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})