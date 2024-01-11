import { Route, Routes } from 'react-router-dom';

import '@fontsource-variable/manrope';

import './Custom.css';
import CuentasPage from './pages/Cuentas'
import ClientesPage from './pages/Clientes';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
     <Routes>
      <Route path="/clientes" element={<ClientesPage />} />
      <Route path="/cuentas" element={<CuentasPage />} />
      <Route path="*" element={<NotFound />} />
     </Routes>
    </>
  )
}

export default App
