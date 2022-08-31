import { useState, useEffect } from 'react';

import { Table, Container, Row, Col, Form, FormControl,Button} from 'react-bootstrap'
import './Grid.css';
import {obtenerReportes} from '../../Api/report'
import detail from '../images/detail.png'
import { useHistory } from "react-router-dom";


function Grid() {
    const history = useHistory();
    const [reporte, setReporte] = useState([{idReporte: 1, carnet: "000000000", nombre: "", cursoProyecto: "", cuerpo: "", fecha: "", procesadoPor: "0" }]); 
    const [buscar, setBuscar] = useState("");
    const [fReports, setfReports] = useState([{idReporte: 1, carnet: "000000000", nombre: "", cursoProyecto: "", cuerpo: "", fecha: "", procesadoPor: "0" }]); 
    /*const filteredReports = useMemo(() => {
        if(!buscar){
            return reporte;    //sino hay keyword retorna completo
        }
        return reporte.filter(({carnet}) => carnet.includes(buscar));
    }, [buscar]);
    */

    const Ir = (item) => {
        //console.log(item)
        history.push("/vista",item)
    }

    /* actualiza obtener reportes */
    useEffect(() => {
        obtenerReportes().then(response => {
            setReporte(response.data)
            setfReports(response.data)
            console.log("response: ", response.data)
        }).catch(error => console.log(error))
    }, [setReporte])

    /* actualiza filtrado */
    useEffect(()=>{
        if(!buscar){
            setfReports(reporte)   //sino hay keyword retorna completo
            return
        }
        var temp = reporte.filter(({carnet}) => carnet.includes(buscar));
        setfReports(temp)
    }, [buscar]);

    return (
    <>
    <Container className="contain">
        <Row>
            <Col>
            <h2>Listado de Reportes</h2>
            </Col>
            <Col>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Ingresa carnet a buscar"
                    className="mr-2"
                    aria-label="Search"
                    value={buscar}
                    onChange = {(e) => {setBuscar(e.target.value)}}
                    />
            </Form>
            </Col>
        </Row>
        <Row className="mt-5">
        <Table striped bordered hover>
        <thead>
            <tr>
            <th scope="col">Carnet</th>
            <th scope="col">Nombre</th>
            <th scope="col">Proyecto</th>
            <th scope="col">Fecha</th>
            <th scope="col">Servidor</th>
            <th scope="col">Detalles</th>
            </tr>
        </thead>
        <tbody>
            {fReports.map((item) => 
            (
              <tr  key={item.idReporte}>
                <td>{item.carnet}</td>
                <td>{item.nombre}</td>
                <td>{item.cursoProyecto}</td>
                <td>{item.fecha}</td>
                <td>{item.procesadoPor}</td>
                <td align="center"><Button onClick={()=>Ir(item)} ><img className="imgGrid" src={detail} alt="Detalle" /></Button></td>
              </tr>
            )
            ) 
            }    
        </tbody>
        </Table>    
    
        </Row>
    </Container>
    </>
  );
}

export default Grid;
