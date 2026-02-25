require("dotenv").config();
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const authRoutes = require("./routes/auth.routes");
const produtoRoutes = require("./routes/produtos.routes")

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/ola', (req, res) => {
    res.send('Olá mundo!')
})

app.use("/auth", authRoutes);
app.use("/produto", produtoRoutes)

app.listen(3000)
// http://localhost:3000/

module.exports = app