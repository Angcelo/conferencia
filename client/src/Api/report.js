import { handleResponse, handleError } from "./utils";

const urlBase = process.env.REACT_APP_URL_REPORT;
//Donde 'urlBase' es sigue el formato http://ip:puerto/

export function obtenerReportes() {
    console.log(urlBase)
    return fetch(urlBase + "reporte/all", {
        method: "GET",
        headers: { "content-type": "application/json" },
    })
        .then(handleResponse)
        .catch(handleError);
}

export function crearReporte(body) {
    console.log(urlBase)
    return fetch(urlBase + "reporte", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({carnet:body.carnet,nombre:body.nombre,cursoProyecto:body.cursoProyecto,cuerpo:body.cuerpo})
    })
        .then(handleResponse)
        .catch(handleError);
}


