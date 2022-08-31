import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import './Reporte.css';
import ReusableInput from "../../Common/ReusableInput";
import ReusableTextarea from "../../Common/ReusableTextarea";

function Vista(args) {

    const history = useHistory();
    const [reporte, setReporte] = useState({ carnet: "", nombre: "", cursoProyecto: "", cuerpo: "", procesadoPor: "", fecha: "" });

    useEffect(() => {
        console.log(args)
        setReporte(args.location.state)
    }, [setReporte])

    const regresar = () => {
        history.push('/grid')
    }

    return (
        <div className="contenedor" style={{marginTop:"3em"}}>
            <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <div className="card" style={{ width: "30rem" }}>
                    <div className="card-body">
                        <h2 className="card-title">Resumen de reporte de practicantes</h2>
                        <hr />
                        <form>
                            <ReusableInput
                                label="Carnet"
                                value={reporte.carnet}
                                disabled={true}
                                required={false}
                            />
                            <ReusableInput
                                label="Nombre"
                                value={reporte.nombre}
                                disabled={true}
                                required={false}
                            />
                            <ReusableInput
                                label="Curso/Proyecto"
                                value={reporte.cursoProyecto}
                                disabled={true}
                                required={false}
                            />
                            <ReusableInput
                                label="Procesado por"
                                value={reporte.procesadoPor}
                                disabled={true}
                                required={false}
                            />
                            <ReusableInput
                                label="Fecha"
                                value={reporte.fecha}
                                disabled={true}
                                required={false}
                            />
                            <ReusableTextarea
                                label="Cuerpo"
                                value={reporte.cuerpo}
                                disabled={true}
                                required={false}
                            />
                            <button className="btn btn-primary" onClick={regresar}> Volver</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Vista;