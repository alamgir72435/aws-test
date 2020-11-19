const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send(`<h1 style='text-align:center;font-size:45px;color:coral;font-family:Arial, Helvetica, sans-serif;'>Hello baby</h1>`)
})


const port = process.env.port || 5000


app.listen(port, console.log('Server Running on port '+port))