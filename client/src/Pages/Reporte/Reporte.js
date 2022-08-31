import React, { useState } from "react";

import './Reporte.css';
import ReusableInput from "../../Common/ReusableInput";
import ReusableTextarea from "../../Common/ReusableTextarea";
import * as api from '../../Api/report';
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Reporte() {
  const [reporte, setReporte] = useState({ carnet: "", nombre: "", cursoProyecto: "", cuerpo: "" });
  const [errores, setErrores] = useState({})

  function controlarCambio(event) {
    const { name, value } = event.target;
    setReporte((usuario) => ({
      ...usuario,
      [name]: value,
    }));
  }

  function formEsValido() {
    const { carnet, nombre, cursoProyecto, cuerpo } = reporte;
    const errores = {};

    if (!carnet) errores.carnet = "Este campo es obligatorio";
    if (!nombre) errores.nombre = "Este campo es obligatorio";
    if (!cursoProyecto) errores.cursoProyecto = "Este campo es obligatorio";
    if (!cuerpo) errores.cuerpo = "Este campo es obligatorio";
    setErrores(errores);
    return Object.keys(errores).length === 0;

  }


  function controlarFormulario(event) {
    event.preventDefault();

    if (!formEsValido()) return;
    api.crearReporte(reporte).then((response) => {
      console.log(response)
      toast("Reporte enviado :)")
      setReporte({ carnet: "", nombre: "", cursoProyecto: "", cuerpo: "" })
    }).catch((error) => {
      toast.error("Error :(")
      console.log(error);
    });

  }

  return (
    <div className="contenedor">
      <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div className="card" style={{ width: "30rem" }}>
          <div className="card-body">
            <h2 className="card-title">Ingreso de reportes de practicantes</h2>
            <hr />

            <form onSubmit={controlarFormulario}>
              <ReusableInput
                name="carnet"
                label="Carnet"
                value={reporte.carnet}
                onChange={controlarCambio}
                error={errores.carnet}
              />
              <ReusableInput
                name="nombre"
                label="Nombre"
                value={reporte.nombre}
                onChange={controlarCambio}
                error={errores.nombre}
              />
              <ReusableInput
                name="cursoProyecto"
                label="Curso/Proyecto"
                value={reporte.cursoProyecto}
                onChange={controlarCambio}
                error={errores.cursoProyecto}
              />
              <ReusableTextarea
                name="cuerpo"
                label="Cuerpo"
                value={reporte.cuerpo}
                onChange={controlarCambio}
                error={errores.cuerpo}
              />
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Reporte;