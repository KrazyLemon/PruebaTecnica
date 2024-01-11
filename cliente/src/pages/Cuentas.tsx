import axios from "axios"
import { MouseEventHandler, useEffect, useState } from "react"
import Header from "../components/Header"
import TablaCuentas from "../components/TablaCuentas"
import { Icon } from "@iconify/react";

import { Modal, Button, Form, Row, Col, } from "react-bootstrap"

import "../Custom.css"
const API_URL = "http://localhost:3000/cuentas"

export default function CuentasPage() {
    const [clientes, setClientes] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [checkDate, setCheckDate] = useState(false);

    const [isValidNombre, setIsValidNombre] = useState(true);
    const [isValidApellidoPaterno, setIsValidApellidoPaterno] = useState(true);
    const [isValidApellidoMaterno, setIsValidApellidoMaterno] = useState(true);

    const [isValidCorreo, setIsValidCorreo] = useState(true);
    const [isValidCurp, setIsValidCurp] = useState(true);

    const [nombre, setNombre] = useState("");
    const [apellidoPaterno, setApellidoPaterno] = useState("");
    const [apellidoMaterno, setApellidoMaterno] = useState("");
    const [fecha, setFecha] = useState("");
    const [sexo, setSexo] = useState("");
    const [correo, setCorreo] = useState("");
    const [curp, setCurp] = useState("");


    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentDate = new Date();
        const selectedDate = new Date(event.target.value);
        if (selectedDate < currentDate) {
            setCheckDate(true);
        } else {
            setCheckDate(false);
        }
        if (checkDate) {
            setFecha(event.target.value);
        }
    }

    const handleNombreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const pattern = new RegExp("^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+(?: [a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+)?$");
        setIsValidNombre(pattern.test(event.target.value));
        if (isValidNombre) {
            setNombre(event.target.value);

        }
    }

    const handleApellidoPaternoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const pattern = new RegExp("^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+$");
        setIsValidApellidoPaterno(pattern.test(event.target.value));
        if (isValidApellidoPaterno) {
            setApellidoPaterno(event.target.value);
        }
    }

    const handleApellidoMaternoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const pattern = new RegExp("^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+$");
        setIsValidApellidoMaterno(pattern.test(event.target.value));
        if (isValidApellidoMaterno) {
            setApellidoMaterno(event.target.value);
        }
    }

    const handleCorreoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const pattern = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
        setIsValidCorreo(pattern.test(event.target.value));
        if (isValidCorreo) {
            setCorreo(event.target.value);
            console.log(correo)
        }
    }

    const handleCurpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const pattern = new RegExp("^[A-Z]{1}[AEIOUX]{1}[A-ZX]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$");
        setIsValidCurp(pattern.test(event.target.value));
        if (isValidCurp) {
            setCurp(event.target.value);
        }
    }

    const handleSexoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSexo(event.target.value);
    }

    const obtenerCuentas = async () => {
        const res = await axios.get(API_URL)
        setClientes(res.data)
        // console.log(res.data)
    }

    const CrearUsuario = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const edad = new Date().getFullYear() - new Date(fecha).getFullYear()
        try {
            const res = await axios.post(API_URL, {
                nombre, apellidoPaterno, apellidoMaterno, edad: edad.toString(), sexo: sexo.toUpperCase(), correo, curp: curp.toUpperCase()
            })
            console.log(res.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        obtenerCuentas()
    }, [])

    return (
        <>
            <Header titulo={"Clientes"} />
            <div>
                <section className="container titulo-tabla">
                    <h1>Tabla Clientes</h1>
                    <div>
                        <button className=" btn btn-outline-success mx-1" > Crear Cuenta<Icon width={"55px"} icon="lets-icons:wallet-alt-duotone" onClick={() => setShowModal(true)} /> </button>
                        <Modal show={showModal} onHide={handleCloseModal} size="xl">
                            <Modal.Header closeButton>
                                <Modal.Title>Crear usuario</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={CrearUsuario} >
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nombre del Usuario</Form.Label>
                                        <Form.Select autoFocus required size="lg" >
                                            <option>Seleccione un Usuario</option>
                                            {clientes.map((cliente: any) => (
                                                <option key={cliente.id} value={cliente.id} style={{ backgroundColor: '#f2f2f2', color: '#333', padding: '5px'}}>
                                                    {cliente.nombre} {cliente.aPaterno} {cliente.aMaterno} {cliente.email}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Numero de Cuenta</Form.Label>
                                        <Form.Control type="number" placeholder="Ejemplo:1234567890123456" required maxLength={16} minLength={16} />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor ingresa un Numero de cuenta valido válido.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" >
                                        Crear
                                    </Button>
                                </Form>
                            </Modal.Body>
                        </Modal>
                        <button onClick={() => setShow(true)} className=" btn btn-outline-info mx-1" >Crear Cliente<Icon icon="lets-icons:user-add-duotone" width={"55px"} /></button>
                        <Modal show={show} onHide={handleClose} size="xl">
                            <Modal.Header closeButton>
                                <Modal.Title>Crear usuario</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={CrearUsuario} >
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" placeholder="Ejemplo:Jóse" autoFocus required isInvalid={!isValidNombre} value={nombre} onChange={handleNombreChange} />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor ingresa un nombre válido.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Apellido paterno</Form.Label>
                                        <Form.Control type="text" placeholder="Ejemplo:Gómez" required isInvalid={!isValidApellidoPaterno} value={apellidoPaterno} onChange={handleApellidoPaternoChange} />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor ingresa un Apellido válido.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Apellido Materno</Form.Label>
                                        <Form.Control type="text" placeholder="Ejemplo:Martínez" required isInvalid={!isValidApellidoMaterno} value={apellidoMaterno} onChange={handleApellidoMaternoChange} />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor ingresa un Apellido válido.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Fecha de Cumpleaños</Form.Label>
                                        <Form.Control type="date" onChange={handleDateChange} isValid={!checkDate} />
                                        {!checkDate && <Form.Text className="text-danger">La fecha debe ser anterior a la fecha actual.</Form.Text>}
                                    </Form.Group>
                                    <fieldset>
                                        <Form.Group as={Row} className="mb-3">
                                            <Form.Label as="legend" column sm={1}>
                                                Sexo
                                            </Form.Label>
                                            <Col sm={1}>
                                                <Form.Check
                                                    type="radio"
                                                    label="Masculino"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios1"
                                                    value={"m"}
                                                    onChange={handleSexoChange}
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="Femenino"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios2"
                                                    value={"f"}
                                                    onChange={handleSexoChange}
                                                />
                                            </Col>
                                        </Form.Group>
                                    </fieldset>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Correo</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Ejemplo:correo@example.com"
                                            isInvalid={!isValidCorreo}
                                            onChange={handleCorreoChange}
                                            required />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor ingresa un correo válido.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>CURP</Form.Label>
                                        <Form.Control type="text" placeholder="Ejemplo:AAAA000000HAA00AA" required isInvalid={!isValidCurp} value={curp} onChange={handleCurpChange} />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor ingresa un CURP válido.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" >
                                        Crear
                                    </Button>
                                </Form>
                            </Modal.Body>
                        </Modal>
                    </div>
                </section>
                <TablaCuentas data={clientes} />
            </div>
        </>
    )
}