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
                            <th>Edad</th>
                            <th>Sexo</th>
                            <th>Correo Electronico</th>
                            <th>Curp</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((cliente, index) => (
                            <tr key={index}>
                                <td>{cliente.nombre}</td>
                                <td>{cliente.aPaterno}</td>
                                <td>{cliente.aMaterno}</td>
                                <td>{cliente.edad}</td>
                                <td>{cliente.sexo}</td>
                                <td>{cliente.email}</td>
                                <td>{cliente.curp}</td>
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
