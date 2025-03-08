import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AReportes from "../pages/Admin/Reportes";
import ClienteHome from "../pages/Cliente/Home";
import ClienteContacto from "../pages/Cliente/Contacto";
import ClienteBeneficios from "../pages/Cliente/Beneficios";
import ClientePlanes from "../pages/Cliente/Planes";
import ClienteSNosotros from "../pages/Cliente/SobreNosotros";
import ClienteRegistro from "../pages/Cliente/Registro";
import DetalleBeneficio from "../pages/Cliente/DetalleBeneficio";

import ERegistroVisita from "../pages/Empresa/RegistroVisitas";
import Menu from "../pages/Dashboard";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas para Administrador */}
        <Route path="/admin/areportes" element={<AReportes />} />

        {/* Rutas para Cliente */}
        <Route path="/cliente/home" element={<ClienteHome />} />
        <Route path="/cliente/home/contacto" element={<ClienteContacto />} />
        <Route path="/cliente/home/beneficios" element={<ClienteBeneficios />} />
        <Route path="/cliente/home/beneficios/:id" element={<DetalleBeneficio />} />
        <Route path="/cliente/home/planes" element={<ClientePlanes />} />
        <Route path="/cliente/home/sobre-nosotros" element={<ClienteSNosotros />} />
        <Route path="/cliente/home/registro" element={<ClienteRegistro />} />

        {/* Rutas para Empresa */}
        <Route path="/empresa/eregistrovisita" element={<ERegistroVisita />} />

        {/* Ruta por defecto */}
        <Route path="*" element={<Menu/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
