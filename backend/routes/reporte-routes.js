const express = require('express')
const router = express.Router()
const { create } = require('../conexion/mysql')
const { getFecha } = require('../helpers/funciones')

router.post('/', (req, res) => {
  const connection = create()
  const { carnet, nombre, cursoProyecto, cuerpo } = req.body
  if (carnet && nombre && cursoProyecto && cuerpo) {
    try {
      var data = [carnet, nombre, cursoProyecto, cuerpo, getFecha()]
      connection.query(
        'INSERT INTO reporte( carnet, nombre, cursoProyecto, cuerpo, fecha ) VALUES ( ?, ?, ?, ?, ? )',
        data,
        function (err, respQ) {
          if (err) {
            console.log(err)
            res.status(400).json({data:{}, msg: 'Error en la conexion'})
          } else {
            res.status(201).json({data:{}, msg: 'Reporte ingresado con exito'})
          }
        }
      )
    } catch (err) {
      console.log(err)
      res.status(400).json({data:{}, msg: 'Error inesperado' })
    }
  } else {
    res.status(400).json({data:{}, msg: 'No se enviaron los valores correctos'})
  }
  connection.end()
})

router.get( '/all', (req, res) => {
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
