import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Menu, 
  X, 
  User as UserIcon, 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../images/logo.png"; 

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const storedRole = localStorage.getItem("userRole");

    if (token && storedRole) {
      setIsUserLoggedIn(true);
      setUserRole(JSON.parse(storedRole).idRol);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("userRole");
    setIsUserLoggedIn(false);
    setUserRole(null);
    setIsUserMenuVisible(false);
    navigate("/");
  };

  const renderUserSpecificMenu = () => {
    switch(userRole) {
      case 1: // Empresa
        return (
          <div className="space-y-2">
            <Link 
              to="/empresa/registrovisita" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Registro de Visita
            </Link>
            <Link 
              to="/empresa/adminbeneficio" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Gestor de Beneficios
            </Link>
          </div>
        );
      case 2: // Admin
        return (
          <div className="space-y-2">
            <Link 
              to="/admin/areportes" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Reportes
            </Link>
            <Link 
              to="/admin/aregistroempresa" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Registro de Empresa
            </Link>
            <Link 
              to="/admin/planes" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Registro Plan
            </Link>
          </div>
        );
      case 3: // Cliente
        return (
          <Link 
            to="/cliente/clienteinfo" 
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Mi Cuenta
          </Link>
        );
      default:
        return null;
    }
  };

  return (
    <nav className="bg-white sticky top-0 z-50 border-b-4 border-[#b07d67] shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/home" className="flex items-center space-x-2">
          <img 
            src={logo} 
            alt="Coffee & Running" 
            className="h-8 w-8 rounded-full" 
          />
          <span className="font-bold text-lg text-gray-800">
            Coffee & Running Club
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Inicio</Link>
          <Link to="/home/sobre-nosotros" className="text-gray-600 hover:text-gray-900">Sobre Nosotros</Link>
          <Link to="/home/beneficios" className="text-gray-600 hover:text-gray-900">Beneficios</Link>
          <Link to="/home/planes" className="text-gray-600 hover:text-gray-900">Planes</Link>
          <Link to="/home/contacto" className="text-gray-600 hover:text-gray-900">Contacto</Link>

          <div className="relative">
            <button 
              onClick={() => setIsUserMenuVisible(!isUserMenuVisible)}
              className="bg-[#c98e7a] text-white p-2 rounded-full hover:bg-[#a9715f] transition-all duration-300"
            >
              <UserIcon size={20} />
            </button>

            {isUserMenuVisible && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                {isUserLoggedIn ? (
                  <>
                    {renderUserSpecificMenu()}
                    <button
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
                    >
                      Cerrar sesión
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Iniciar Sesión
                    </Link>
                    <Link
                      to="/cliente/registro"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Registrarte
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            {/* Mobile menu content would go here */}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;