import { useState, useEffect } from "react";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom"; // Importa useNavigate
import { Menu, X, User } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [adminSubmenuVisible, setAdminSubmenuVisible] = useState(false);
  const [empresaSubmenuVisible, setEmpresaSubmenuVisible] = useState(false);
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [userRole, setUserRole] = useState<number | null>(null); // Estado para el rol del usuario
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar si el usuario está logueado
  const navigate = useNavigate(); // Hook para redireccionar

  // Leer el rol y verificar si el usuario está logueado al cargar el componente
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const role = localStorage.getItem("userRole");

    if (token && role) {
      setIsLoggedIn(true); // El usuario está logueado
      const parsedRole = JSON.parse(role);
      setUserRole(parsedRole.idRol); // Asume que el rol tiene un campo `idRol`
    } else {
      setIsLoggedIn(false); // El usuario no está logueado
      setUserRole(null);
    }
  }, []);

  const showAdminSubmenu = () => {
    setAdminSubmenuVisible(true);
  };

  const hideAdminSubmenu = () => {
    setTimeout(() => setAdminSubmenuVisible(false), 1500);
  };

  const showEmpresaSubmenu = () => {
    setEmpresaSubmenuVisible(true);
  };

  const hideEmpresaSubmenu = () => {
    setTimeout(() => setEmpresaSubmenuVisible(false), 1500);
  };

  const toggleUserMenu = () => {
    setUserMenuVisible(!userMenuVisible);
  };

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("access_token"); // Eliminar el token
    localStorage.removeItem("userRole"); // Eliminar el rol
    setIsLoggedIn(false); // Actualizar el estado
    setUserRole(null); // Reiniciar el rol
    setUserMenuVisible(false); // Cerrar el menú desplegable
    navigate("/"); // Redirigir al inicio
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
            <Link to="/" className="nav-link">
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

          {/* Mostrar "Mi cuenta" solo para clientes (rol 3) */}
          {isLoggedIn && userRole === 3 && (
            <li>
              <Link to="/cliente/home/clienteinformacion" className="nav-link">
                Mi Cuenta
              </Link>
            </li>
          )}

          {/* Mostrar "Gestión Admin" solo para administradores (rol 2) */}
          {isLoggedIn && userRole === 2 && (
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
                  <li>
                    <Link
                      to="/admin/planes"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200"
                    >
                      RegistroPlan
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          )}

          {/* Mostrar "Gestión Empresa" solo para empresas (rol 1) */}
          {isLoggedIn && userRole === 1 && (
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
          )}

          {/* Menú de usuario */}
          <li className="relative">
            <button
              onClick={toggleUserMenu}
              className="flex items-center gap-2 px-5 py-2 text-white bg-[#c98e7a] rounded-lg hover:bg-[#a9715f] transition-all duration-300"
            >
              <User size={20} />
            </button>
            {userMenuVisible && (
              <ul className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48 border border-gray-200 transition-all duration-300 ease-in-out z-50">
                {isLoggedIn ? (
                  // Si el usuario está logueado, mostrar "Cerrar sesión"
                  <li>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200"
                    >
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200 text-left"
                      >
                        Cerrar sesión
                      </button>
                    </Link>
                  </li>
                ) : (
                  // Si el usuario no está logueado, mostrar "Iniciar Sesión" y "Registrarte"
                  <>
                    <li>
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200"
                      >
                        Iniciar Sesión
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/cliente/home/registro"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200"
                      >
                        Registrarte
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
