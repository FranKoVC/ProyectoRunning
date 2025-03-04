import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-orange-600 to-brown-800 shadow-md">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
          <span className="text-2xl font-bold text-white">Coffee & Running</span>
        </Link>
        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:items-center md:space-x-6 bg-white md:bg-transparent absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto p-5 md:p-0 shadow-md md:shadow-none`}
        >
          {[
            { name: "Inicio", path: "/cliente/home" },
            { name: "Sobre Nosotros", path: "/cliente/home/sobre-nosotros" },
            { name: "Beneficios", path: "/cliente/home/beneficios" },
            { name: "Planes", path: "/cliente/home/planes" },
            { name: "Contacto", path: "/cliente/home/contacto" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block py-2 px-3 text-gray-900 md:text-white hover:text-orange-300 transition"
            >
              {item.name}
            </Link>
          ))}
          
          <Link
            to="/login"
            className="ml-6 px-5 py-2 text-white bg-orange-700 rounded-full hover:bg-orange-800 transition"
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;