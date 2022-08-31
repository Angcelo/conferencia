require('dotenv').config()
const http = require('http')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { default: reporteRoutes } = require('./routes/reporte-routes')
const { default: asistenciaRoute } = require('./routes/asistencia-route')

const app = express()
const PORT = process.env.PORT || 5000
const carnetP = process.env.CARNET

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: "10mb" }))
app.set('PORT', PORT)

app.use('/reporte', reporteRoutes)
app.use('/asistencia', asistenciaRoute)
app.get('/', (req, res) => {
  res.status(200).json({ msj: `Bienvenido desde ${carnetP}`, estado: 1 })
})

var httpServer = http.createServer(app)

httpServer.listen(PORT,()=> {
  console.log('Servidor en el puerto',PORT)
})

