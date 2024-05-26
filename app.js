const {dbConnection} = require('./database/configuration.js')
const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config()

const app = express()

//app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use(
    cors({
    origin: '*'})
)

dbConnection()


const tipoProyectos = require("./routes/tipoProyectoRoute.js")
const universidades = require('./routes/universidadRoute.js')
const clientes = require('./routes/clienteRoute.js')
const etapa = require('./routes/etapaRoute.js')

//middlewares

app.use('/api/tipoProyectos', tipoProyectos)
app.use('/api/universidad', universidades)
app.use('/api/clientes', clientes)
app.use('/api/etapa', etapa)



module.exports = app

