const express = require('express')
const router = express.Router()
const { create } = require('../conexion/mysql')
const { getFecha } = require('../helpers/funciones')
const { uploadToBucket } = require('../helpers/s3')
const uiid = require('uuid')

router.post('/', (req, res) => {
  const { carnet, nombre, evento, idEvento, imagenb64 } = req.body
  if (carnet && nombre && evento && idEvento && imagenb64) {
    try {
      uploadToBucket(imagenb64, uiid.v4()).then((ress3) => {
        const connection = create()
        var data = [carnet, nombre, evento, idEvento, ress3.Location, getFecha()]
        connection.query(
          'INSERT INTO asistencia( carnet, nombre, evento, idEvento, urlImagen, fecha ) VALUES ( ?, ?, ?, ?, ?, ? )',
          data,
          function (err, respQ) {
            if (err) {
              console.log(err)
              res.status(400).json({ data: {}, msg: 'Error en la conexion' })
            } else {
              res.status(201).json({ data: {}, msg: 'Asistencia marcada con exito' })
            }
          }
        )
        connection.end()
      })
    } catch (err) {
      console.log(err)
      res.status(400).json({ data: {}, msg: 'Error inesperado' })
    }
  } else {
    res.status(400).json({ data: {}, msg: 'No se enviaron los valores correctos' })
  }
})

router.get('/reportes', (req, res) => {
  const connection = create();
  connection.query(
    `select * from reporte;`,
    [],
    (erro, resulta) => {
      if (erro) {
        console.log(erro)
        res.status(400).json({
          msg: erro.toString(),
          data: {}
        });
      } else {
        res.status(200).json({
          msg: 'Get all reports succesfully',
          data: resulta
        })
      }
    }
  )
  connection.end()
}

)
exports.default = router
