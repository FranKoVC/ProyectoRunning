import { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [adminSubmenuVisible, setAdminSubmenuVisible] = useState(false);
  const [empresaSubmenuVisible, setEmpresaSubmenuVisible] = useState(false);
  let adminTimeoutId: number | null | undefined = null;
  let empresaTimeoutId: number | null | undefined = null;

  const showAdminSubmenu = () => {
    if (adminTimeoutId) clearTimeout(adminTimeoutId);
    setAdminSubmenuVisible(true);
  };

  const hideAdminSubmenu = () => {
    adminTimeoutId = window.setTimeout(() => {
      setAdminSubmenuVisible(false);
    }, 200); // Reducido de 500ms a 200ms
  };

  const showEmpresaSubmenu = () => {
    if (empresaTimeoutId) clearTimeout(empresaTimeoutId);
    setEmpresaSubmenuVisible(true);
  };

  const hideEmpresaSubmenu = () => {
    empresaTimeoutId = window.setTimeout(() => {
      setEmpresaSubmenuVisible(false);
    }, 200); // Reducido de 500ms a 200ms
  };

  return (
    <nav className="bg-gradient-to-r from-[#d6c6b8] to-[#e9dbd2] py-4 px-8 border-b-4 border-[#b07d67] shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Coffee & Running"
            className="h-10 mr-3 rounded-full"
          />
          <h1 className="text-xl font-bold text-gray-800">
            Coffee & Running Club
          </h1>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 bg-white md:bg-transparent absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto p-5 md:p-0 shadow-md md:shadow-none`}
        >
          <li>
            <Link to="/cliente/home" className="nav-link">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/cliente/home/sobre-nosotros" className="nav-link">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link to="/cliente/home/beneficios" className="nav-link">
              Beneficios
            </Link>
          </li>
          <li>
            <Link to="/cliente/home/planes" className="nav-link">
              Planes
            </Link>
          </li>
          <li>
            <Link to="/cliente/home/contacto" className="nav-link">
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/cliente/home/clienteinformacion" className="nav-link">
              Mi cuenta
            </Link>
          </li>

          {/* Gestión Admin */}
          <li
            className="relative"
            onMouseEnter={showAdminSubmenu}
            onMouseLeave={hideAdminSubmenu}
          >
            <button className="nav-link flex items-center gap-2">
              Gestión Admin
            </button>
            {adminSubmenuVisible && (
              <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-52 border border-gray-200 transition-all duration-300 ease-in-out z-50">
                <li>
                  <Link
                    to="/admin/areportes"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200"
                  >
                    Reportes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/aregistroempresa"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200"
                  >
                    Registro de Empresa
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Gestión Empresa */}
          <li
            className="relative"
            onMouseEnter={showEmpresaSubmenu}
            onMouseLeave={hideEmpresaSubmenu}
          >
            <button className="nav-link flex items-center gap-2">
              Gestión Empresa
            </button>
            {empresaSubmenuVisible && (
              <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-52 border border-gray-200 transition-all duration-300 ease-in-out z-50">
                <li>
                  <Link
                    to="/empresa/eregistrovisita"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200"
                  >
                    Registro de Visita
                  </Link>
                </li>
                <li>
                  <Link
                    to="/empresa/egestorbeneficio"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200"
                  >
                    Gestor de Beneficios
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/login"
              className="ml-6 px-5 py-2 text-white bg-[#c98e7a] rounded-lg hover:bg-[#a9715f] transition-all duration-300"
            >
              Iniciar Sesión
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
