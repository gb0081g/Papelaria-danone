const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/ola', (req, res) => {
    res.send('Olá mundo!')
})

app.listen(3000)
// http://localhost:3000/

module.exports = app