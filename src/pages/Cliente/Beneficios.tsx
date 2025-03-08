import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import clubttt from "../../images/clubttt.png";
import { useNavigate } from "react-router-dom";
import fisioterapia from "../../images/fisioterapia.jpg";
import estabilidad from "../../images/estabilidad.jpg";
import hidratacion from "../../images/hidratacion.png";
import nutricion from "../../images/nutricion.jpg";
import nunocafeteria from "../../images/nunocafeteria.jpg";
import caffeine from "../../images/caffeine.png";
import locoburguer from "../../images/locoburguer.jpg";
import tostaduria from "../../images/tostaduria.png";

const Beneficio = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="mt-12 mb-12 grid grid-cols-3 gap-6 max-w-7xl mx-auto">
        <div
          className="relative text-white p-8 rounded-xl flex flex-col justify-between bg-cover bg-center h-56"
          style={{ backgroundImage: `url(${clubttt})` }}
        >
          {/* Capa oscura solo sobre la imagen */}
          <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

          {/* Contenido encima de la capa oscura */}
          <div className="relative z-10">
            <h2 className="text-2xl font-extrabold">DESCUENTO EN PLANES</h2>
            <h3 className="text-lg font-extrabold">CLUB TTT</h3>
            <h4 className="text-lg font-extrabold">Coach</h4>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2 transition-all duration-300 hover:bg-red-600 active:scale-95"
              onClick={() => navigate("/cliente/home/beneficios/clubttt")}
            >
              Ver beneficio
              <span className="transition-transform transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>

        <div
          className="relative text-white p-8 rounded-xl flex flex-col justify-between bg-cover bg-center h-56"
          style={{ backgroundImage: `url(${fisioterapia})` }}
        >
          {/* Capa oscura solo sobre la imagen */}
          <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

          {/* Contenido encima de la capa oscura */}
          <div className="relative z-10">
            <h2 className="text-2xl font-extrabold">25% DE DESCUENTO</h2>
            <h3 className="text-lg font-extrabold">FISIOPRO</h3>
            <h4 className="text-lg font-extrabold">Fisioterapia</h4>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2 transition-all duration-300 hover:bg-red-600 active:scale-95"
              onClick={() => navigate("/cliente/home/beneficios/fisioterapia")}
            >
              Ver beneficio
              <span className="transition-transform transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>

        <div
          className="relative text-white p-8 rounded-xl flex flex-col justify-between bg-cover bg-center h-56"
          style={{ backgroundImage: `url(${estabilidad})` }}
        >
          {/* Capa oscura solo sobre la imagen */}
          <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

          {/* Contenido encima de la capa oscura */}
          <div className="relative z-10">
            <h2 className="text-2xl font-extrabold">DESCUENTO EN SESIONES</h2>
            <h3 className="text-lg font-extrabold">QORE</h3>
            <h4 className="text-lg font-extrabold">Estabilidad y Fuerza</h4>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2 transition-all duration-300 hover:bg-red-600 active:scale-95"
              onClick={() => navigate("/cliente/home/beneficios/estabilidad")}
            >
              Ver beneficio
              <span className="transition-transform transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>

        <div
          className="relative text-white p-8 rounded-xl flex flex-col justify-between bg-cover bg-center h-56"
          style={{ backgroundImage: `url(${hidratacion})` }}
        >
          {/* Capa oscura solo sobre la imagen */}
          <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

          {/* Contenido encima de la capa oscura */}
          <div className="relative z-10">
            <h2 className="text-2xl font-extrabold">10% DE DESCUENTO</h2>
            <h3 className="text-lg font-extrabold">PALO SANTO</h3>
            <h4 className="text-lg font-extrabold">Hidratación y Geles</h4>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2 transition-all duration-300 hover:bg-red-600 active:scale-95"
              onClick={() => navigate("/cliente/home/beneficios/hidratacion")}
            >
              Ver beneficio
              <span className="transition-transform transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>

        <div
          className="relative text-white p-8 rounded-xl flex flex-col justify-between bg-cover bg-center h-56"
          style={{ backgroundImage: `url(${nutricion})` }}
        >
          {/* Capa oscura solo sobre la imagen */}
          <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

          {/* Contenido encima de la capa oscura */}
          <div className="relative z-10">
            <h2 className="text-2xl font-extrabold">25% DE DESCUENTO</h2>
            <h3 className="text-lg font-extrabold">MAFER MARTÍN</h3>
            <h4 className="text-lg font-extrabold">Nutrición</h4>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2 transition-all duration-300 hover:bg-red-600 active:scale-95"
              onClick={() => navigate("/cliente/home/beneficios/nutricion")}
            >
              Ver beneficio
              <span className="transition-transform transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>

        <div
          className="relative text-white p-8 rounded-xl flex flex-col justify-between bg-cover bg-center h-56"
          style={{ backgroundImage: `url(${nunocafeteria})` }}
        >
          {/* Capa oscura solo sobre la imagen */}
          <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

          {/* Contenido encima de la capa oscura */}
          <div className="relative z-10">
            <h2 className="text-2xl font-extrabold">15% DE DESCUENTO</h2>
            <h3 className="text-lg font-extrabold">NUNO CAFÉ</h3>
            <h4 className="text-lg font-extrabold">Cafetería</h4>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2 transition-all duration-300 hover:bg-red-600 active:scale-95"
              onClick={() => navigate("/cliente/home/beneficios/nunocafeteria")}
            >
              Ver beneficio
              <span className="transition-transform transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>

        <div
          className="relative text-white p-8 rounded-xl flex flex-col justify-between bg-cover bg-center h-56"
          style={{ backgroundImage: `url(${caffeine})` }}
        >
          {/* Capa oscura solo sobre la imagen */}
          <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

          {/* Contenido encima de la capa oscura */}
          <div className="relative z-10">
            <h2 className="text-2xl font-extrabold">15% DE DESCUENTO</h2>
            <h3 className="text-lg font-extrabold">CAFFEINE</h3>
            <h4 className="text-lg font-extrabold">Cafetería</h4>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2 transition-all duration-300 hover:bg-red-600 active:scale-95"
              onClick={() => navigate("/cliente/home/beneficios/caffeine")}
            >
              Ver beneficio
              <span className="transition-transform transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>

        <div
          className="relative text-white p-8 rounded-xl flex flex-col justify-between bg-cover bg-center h-56"
          style={{ backgroundImage: `url(${locoburguer})` }}
        >
          {/* Capa oscura solo sobre la imagen */}
          <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

          {/* Contenido encima de la capa oscura */}
          <div className="relative z-10">
            <h2 className="text-2xl font-extrabold">15% DE DESCUENTO</h2>
            <h3 className="text-lg font-extrabold">LOCO BURGUER</h3>
            <h4 className="text-lg font-extrabold">Hamburguesería</h4>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2 transition-all duration-300 hover:bg-red-600 active:scale-95"
              onClick={() => navigate("/cliente/home/beneficios/locoburguer")}
            >
              Ver beneficio
              <span className="transition-transform transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>

        <div
          className="relative text-white p-8 rounded-xl flex flex-col justify-between bg-cover bg-center h-56"
          style={{ backgroundImage: `url(${tostaduria})` }}
        >
          {/* Capa oscura solo sobre la imagen */}
          <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

          {/* Contenido encima de la capa oscura */}
          <div className="relative z-10">
            <h2 className="text-2xl font-extrabold">15% DE DESCUENTO</h2>
            <h3 className="text-lg font-extrabold">RUNAKUNA</h3>
            <h4 className="text-lg font-extrabold">Tostaduría</h4>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2 transition-all duration-300 hover:bg-red-600 active:scale-95"
              onClick={() => navigate("/cliente/home/beneficios/tostaduria")}
            >
              Ver beneficio
              <span className="transition-transform transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Beneficio;
