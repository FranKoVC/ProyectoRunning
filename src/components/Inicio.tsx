import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";

const images = [img1, img2, img3];

const Inicio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-8">
      {/* Contenedor con fondo y bordes redondeados */}
      <div className="relative w-full max-w-7xl bg-gradient-to-r from-amber-900 via-orange-600 to-yellow-500 opacity-85 rounded-3xl p-6 md:p-12 shadow-xl overflow-hidden">
        <div className="relative flex flex-col md:flex-row min-h-[80vh] gap-16">
          {/* Columna izquierda (contenido) */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Bienvenido a <span className="text-yellow-300">Coffee & Running</span>:  
              Energía, Pasión y Comunidad
            </h1>
            <p className="text-lg text-white/90">
              Únete a un club donde la velocidad y el aroma del café se combinan para impulsar tu día. 
              Vive experiencias únicas, comparte con corredores apasionados y disfruta de beneficios exclusivos.
            </p>

            {/* Botón y contador */}
            <div className="flex flex-col md:flex-row items-start md:items-center mt-6 space-y-6 md:space-y-0 md:space-x-10">
              <button className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-3 px-8 rounded-full flex items-center shadow-lg">
                Únete Ahora
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div className="flex items-center space-x-4">
                <div className="h-16 w-32 rounded-lg overflow-hidden shadow-lg">
                  <img src={images[0]} alt="Running & Coffee" className="w-full h-full object-cover" />
                </div>
                <span className="text-3xl font-bold text-yellow-300">+1K</span>
              </div>
            </div>

            {/* Íconos de redes sociales */}
            <div className="flex space-x-6 mt-16">
              <a href="#" className="text-white hover:text-yellow-200 transition">
                <FaFacebookF className="text-2xl" />
              </a>
              <a href="https://www.instagram.com/coffeerc.pe/" className="text-white hover:text-yellow-200 transition">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-white hover:text-yellow-200 transition">
                <FaLinkedinIn className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Columna derecha (carrusel) */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative h-[700px] w-full max-w-2xl rounded-3xl overflow-hidden shadow-xl">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 rounded-3xl shadow-xl ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;