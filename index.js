const express = require('express')
const app = express()
const connection = require('./database/connection')
const router = require('./routes/routes')
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require('./swagger.json')
const cors = require('cors')

app.use(cors())

connection.authenticate().then(res => {
    console.log("Connected in database")
})

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/', router)

app.listen(8080, () => {
    console.log("Server started...")
})