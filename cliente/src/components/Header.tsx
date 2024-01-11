import { Link } from 'react-router-dom'
import '../Custom.css'

export default function Header({ titulo }: { titulo: string }) {
    return (
        <>
            <div className='header'>
                <h1>Cartera {titulo}</h1>
                <nav>
                    <ul>
                        <li><Link className='link ' to="/clientes">Clientes</Link></li>
                        <li><Link className='link ' to="/cuentas">Cuentas</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}