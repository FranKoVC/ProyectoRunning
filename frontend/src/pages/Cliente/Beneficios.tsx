import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import clubttt from "../../images/clubttt.png";
import fisioterapia from "../../images/fisioterapia.jpg";
import estabilidad from "../../images/estabilidad.jpg";
import hidratacion from "../../images/hidratacion.png";
import nutricion from "../../images/nutricion.jpg";
import nunocafeteria from "../../images/nunocafeteria.jpg";
import caffeine from "../../images/caffeine.png";
import locoburguer from "../../images/locoburguer.jpg";
import tostaduria from "../../images/tostaduria.png";

const beneficios = [
  { id: 1, nombre: "CLUB TTT", categoria: "Gimnasio", descuento: "Descuento en Planes", imagen: clubttt, ruta: "/cliente/home/beneficios/clubttt" },
  { id: 2, nombre: "FISIOPRO", categoria: "Salud", descuento: "25% de Descuento", imagen: fisioterapia, ruta: "/cliente/home/beneficios/fisioterapia" },
  { id: 3, nombre: "QORE", categoria: "Salud", descuento: "Descuento en Sesiones", imagen: estabilidad, ruta: "/cliente/home/beneficios/estabilidad" },
  { id: 4, nombre: "PALO SANTO", categoria: "Suplementos", descuento: "10% de Descuento", imagen: hidratacion, ruta: "/cliente/home/beneficios/hidratacion" },
  { id: 5, nombre: "MAFER MARTÍN", categoria: "Nutrición", descuento: "25% de Descuento", imagen: nutricion, ruta: "/cliente/home/beneficios/nutricion" },
  { id: 6, nombre: "NUNO CAFÉ", categoria: "Cafetería", descuento: "15% de Descuento", imagen: nunocafeteria, ruta: "/cliente/home/beneficios/nunocafeteria" },
  { id: 7, nombre: "CAFFEINE", categoria: "Cafetería", descuento: "15% de Descuento", imagen: caffeine, ruta: "/cliente/home/beneficios/caffeine" },
  { id: 8, nombre: "LOCO BURGUER", categoria: "Hamburguesería", descuento: "20% de Descuento", imagen: locoburguer, ruta: "/cliente/home/beneficios/locoburguer" },
  { id: 9, nombre: "TOSTADURÍA", categoria: "Cafetería", descuento: "10% de Descuento", imagen: tostaduria, ruta: "/cliente/home/beneficios/tostaduria" },
];

const categorias = ["Todos", ...new Set(beneficios.map((b) => b.categoria))];

const Beneficio = () => {
  const navigate = useNavigate();
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  const beneficiosFiltrados = categoriaSeleccionada === "Todos"
    ? beneficios
    : beneficios.filter((b) => b.categoria === categoriaSeleccionada);

  const handleVerBeneficio = (ruta: string) => {
    // Verificar si el usuario está autenticado (tiene token en localStorage)
    const token = localStorage.getItem("access_token");
    
    if (token) {
      // Usuario autenticado, navegar a la ruta del beneficio
      navigate(ruta);
    } else {
      // Usuario no autenticado, redirigir al login
      navigate("/login");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-12 pb-12">
        <div className="flex justify-center mb-4 space-x-3">
          {categorias.map((cat) => (
            <button
              key={cat}
              className={`px-3 py-2 rounded-md text-white ${categoriaSeleccionada === cat ? "bg-red-600" : "bg-gray-500"} transition-all duration-300 hover:bg-red-700`}
              onClick={() => setCategoriaSeleccionada(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 pt-6">
          {beneficiosFiltrados.map((beneficio) => (
            <div
              key={beneficio.id}
              className="relative text-white p-6 rounded-lg flex flex-col justify-between bg-cover bg-center h-52"
              style={{ backgroundImage: `url(${beneficio.imagen})` }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
              <div className="relative z-10">
                <h2 className="text-xl font-bold">{beneficio.descuento}</h2>
                <h3 className="text-lg font-bold">{beneficio.nombre}</h3>
                <h4 className="text-md font-bold">{beneficio.categoria}</h4>
                <button
                  className="mt-3 bg-red-700 text-white px-3 py-2 rounded transition-all duration-300 hover:bg-red-600 active:scale-95"
                  onClick={() => handleVerBeneficio(beneficio.ruta)}
                >
                  Ver beneficio →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Beneficio;