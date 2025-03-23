import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../components/Home";

import AReportes from "../pages/Admin/Reportes";
import APlanesPage from "../pages/Admin/CreacionPlanes/APlanesPage";
import CrearPlan from "../pages/Admin/CreacionPlanes/CrearPlan";
import ARegistroEmpresa from "../pages/Admin/RegistroEmpresa";

import ClienteContacto from "../pages/Cliente/Contacto";
import ClienteBeneficios from "../pages/Cliente/Beneficios";
import ClientePlanes from "../pages/Cliente/Planes";
import ClienteSNosotros from "../pages/Cliente/SobreNosotros";
import ClienteRegistro from "../pages/Cliente/Registro";
import DetalleBeneficio from "../pages/Cliente/DetalleBeneficio";
import ClientePago from "../pages/Cliente/PagoVoucher";
import ClienteInfo from "../pages/Cliente/InfoCliente";

import ERegistroVisita from "../pages/Empresa/RegistroVisitas";
import EAdminBeneficio from "../pages/Empresa/AdminBeneficios";


import Login from "../pages/Auth/Login";



const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas para Administrador */}
        <Route path="/admin/areportes" element={<AReportes />} />
        <Route path="/admin/aregistroempresa" element={<ARegistroEmpresa />} />

        <Route path="/admin/planes" element={<APlanesPage />} />
        <Route path="/admin/planes/nuevo" element={<CrearPlan />} />
        <Route path="/admin/planes/editar/:id" element={<CrearPlan />} />


        {/* Rutas para Cliente */}
        <Route path="/cliente/home/contacto" element={<ClienteContacto />} />
        <Route path="/cliente/home/beneficios" element={<ClienteBeneficios />} />
        <Route path="/cliente/home/beneficios/:id" element={<DetalleBeneficio />} />
        <Route path="/cliente/home/planes" element={<ClientePlanes />} />
        <Route path="/cliente/home/sobre-nosotros" element={<ClienteSNosotros />} />
        <Route path="/cliente/home/registro" element={<ClienteRegistro />} />
        <Route path="/cliente/home/pago" element={<ClientePago />} />
        <Route path="/cliente/home/clienteinformacion" element={<ClienteInfo />} />

        {/* Rutas para Empresa */}
        <Route path="/empresa/eregistrovisita" element={<ERegistroVisita />} />
        <Route path="/empresa/egestorbeneficio" element={<EAdminBeneficio/>} />



        {/* Rutas para Autenticación */}
        <Route path="/login" element={<Login />} />
        

        {/* Ruta por defecto */}
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
