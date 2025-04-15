import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../components/Home";

import AReportes from "../pages/Admin/Reportes";
import APlanesPage from "../pages/Admin/CreacionPlanes/APlanesPage";
import ARegistroEmpresa from "../pages/Admin/RegistroEmpresa";


import Contacto from "../pages/Todos/Contacto";
import Beneficios from "../pages/Todos/Beneficios";
import Planes from "../pages/Todos/Planes";
import SobreNosotros from "../pages/Todos/SobreNosotros";
import DetalleBeneficio from "../pages/Todos/DetalleBeneficio";


import ClienteRegistro from "../pages/Cliente/Registro";
import ClientePago from "../pages/Cliente/PagoVoucher";
import ClienteInfo from "../pages/Cliente/InfoCliente";


import ERegistroVisita from "../pages/Empresa/RegistroVisitas";



import Login from "../pages/Auth/Login";

/**
 * AppRouter - Enrutador principal de la aplicación.
 *
 * Define las rutas de navegación para cada tipo de usuario:
 * - Público general
 * - Administrador
 * - Cliente
 * - Empresa
 * - Autenticación
 *
 * Usa HashRouter para compatibilidad con servidores sin configuración especial.
 */

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas para todos */}
        <Route path="/home/contacto" element={<Contacto />} />
        <Route path="/home/beneficios" element={<Beneficios />} />
        <Route path="/home/beneficios/:id" element={<DetalleBeneficio />} />
        <Route path="/home/planes" element={<Planes />} />
        <Route path="/home/sobre-nosotros" element={<SobreNosotros />} />

        {/* Rutas para Administrador */}
        <Route path="/admin/areportes" element={<AReportes />} />
        <Route path="/admin/aregistroempresa" element={<ARegistroEmpresa />} />
        <Route path="/admin/planes" element={<APlanesPage />} />

        {/* Rutas para Cliente */}
        <Route path="/cliente/registro" element={<ClienteRegistro />} />
        <Route path="/cliente/pago" element={<ClientePago />} />
        <Route path="/cliente/clienteinfo" element={<ClienteInfo />} />

        {/* Rutas para Empresa */}
        <Route path="/empresa/registrovisita" element={<ERegistroVisita />} />

        {/* Rutas para Autenticación */}
        <Route path="/login" element={<Login />} />

        {/* Ruta por defecto */}
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
