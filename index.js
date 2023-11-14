const express = require('express')
const app = express()
const connection = require('./database/connection')
const router = require('./routes/routes')

connection.authenticate().then(res => {
    console.log("Connected in database")
})

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/', router)

app.listen(8080, () => {
    console.log("Server started...")
})