import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/Admin/Dashboard";
import ClienteHome from "../pages/Cliente/Home";
import ClienteContacto from "../pages/Cliente/Contacto";
import ClienteBeneficios from "../pages/Cliente/Beneficios";
import ClientePlanes from "../pages/Cliente/Planes";
import ClienteSNosotros from "../pages/Cliente/SobreNosotros";

import EmpresaDashboard from "../pages/Empresa/Dashboard";
import Menu from "../pages/Menu";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas para Administrador */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Rutas para Cliente */}
        <Route path="/cliente/home" element={<ClienteHome />} />
        <Route path="/cliente/home/contacto" element={<ClienteContacto />} />
        <Route path="/cliente/home/beneficios" element={<ClienteBeneficios />} />
        <Route path="/cliente/home/planes" element={<ClientePlanes />} />
        <Route path="/cliente/home/sobre-nosotros" element={<ClienteSNosotros />} />

        {/* Rutas para Empresa */}
        <Route path="/empresa/dashboard" element={<EmpresaDashboard />} />

        {/* Ruta por defecto */}
        <Route path="*" element={<Menu/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
