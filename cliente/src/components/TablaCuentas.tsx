import React from 'react';
import '../Custom.css';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

interface TablaProps {
    data: any[];
}

const Tabla: React.FC<TablaProps> = ({ data }) => {
    return (
        <>
            <div className='container'>
                <table className='Tabla table-striped'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido Paterno</th>
                            <th>Apellido Materno</th>
                            <th>Correo Electronico</th>
                            <th>Numero de Cuenta</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((cuenta, index) => (
                            <tr key={index}>
                                <td>{cuenta.nombre}</td>
                                <td>{cuenta.aPaterno}</td>
                                <td>{cuenta.aMaterno}</td>
                                <td>{cuenta.email}</td>
                                <td>{cuenta.numeroCuenta}</td>
                                <td>
                                    <Link className='text-info link' to={""}><Icon width={"30px"} icon="lets-icons:edit-duotone-line" /> </Link>
                                    <Link className='text-danger link'to={""}><Icon width={"30px"} icon="lets-icons:dell-duotone" /></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Tabla;
