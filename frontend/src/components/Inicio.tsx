import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.jpg";
import logo4 from "../images/logo4.png";
import logo5 from "../images/logo5.png";
import logo6 from "../images/logo6.png";
import logo7 from "../images/logo7.png";
import logo8 from "../images/logo8.png";
import logo9 from "../images/logo9.png";

const images = [img1, img2, img3];
const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

const Inicio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center px-4 md:px-8 bg-[#F7F3E9] pt-8 pb-8">
      {/* Hero Section (existente) */}
      <div className="relative w-full max-w-7xl bg-gradient-to-r from-[#E6D6C8] via-[#D6BBA0] to-[#A67C52] bg-opacity-80 rounded-3xl p-6 md:p-12 shadow-lg overflow-hidden">
        <div className="relative flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#4F4A45] leading-tight">
              Bienvenido a{" "}
              <span className="text-[#A67C52]">Coffee & Running</span>:<br />
              Energía, Pasión y Comunidad
            </h1>
            <p className="text-lg text-[#4F4A45]/90">
              Únete a un club donde la velocidad y el aroma del café se combinan
              para impulsar tu día. Vive experiencias únicas, comparte con
              corredores apasionados y disfruta de beneficios exclusivos.
            </p>
            <div className="flex md:flex-row w-full items-center mt-6 space-y-6 md:space-y-0 md:space-x-6">
              <Link
                to="/cliente/registro"
                className="flex items-center whitespace-nowrap"
              >
                <button className="bg-[#A67C52] hover:bg-[#8B6B45] text-white font-bold py-4 px-6 rounded-full flex items-center shadow-md transition-all duration-300">
                  Únete ahora
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Link>
              <p className="text-2xl font-bold text-[#A67C52] text-center md:text-left">
                ¡Ya somos más de 100 miembros!
              </p>
            </div>

            <div className="flex space-x-6 mt-16">
              <a
                href="#"
                className="text-[#4F4A45] hover:text-[#A67C52] transition"
              >
                <FaFacebookF className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/coffeerc.pe/"
                className="text-[#4F4A45] hover:text-[#A67C52] transition"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-[#4F4A45] hover:text-[#A67C52] transition"
              >
                <FaLinkedinIn className="text-2xl" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative h-[700px] w-full max-w-2xl rounded-3xl overflow-hidden shadow-lg">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 rounded-3xl shadow-md ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Logos de Aliados (existente) */}
      <h2 className="text-3xl font-bold text-[#4F4A45] mt-12">
        Empresas asociadas
      </h2>
      <div className="carousel-container mt-6">
        <div className="carousel-track">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="object-contain"
            />
          ))}
        </div>
      </div>

      {/* Nueva Sección: Noticias (Modernizada) */}
      <div className="w-full max-w-7xl mt-20 px-4">
        <div className="flex flex-col items-center mb-10">
          <span className="bg-[#A67C52]/10 text-[#A67C52] px-4 py-1 rounded-full text-sm font-medium mb-4">
            ACTUALIDAD
          </span>
          <h2 className="text-3xl font-bold text-[#4F4A45] mb-3 text-center">
            Últimas Noticias
          </h2>
          <div className="w-16 h-1 bg-[#A67C52] mb-5"></div>
          <p className="text-lg text-[#4F4A45]/80 text-center max-w-3xl mx-auto">
            Mantente informado de nuestros eventos, tips y todo lo relacionado con
            la comunidad Coffee & Running.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              date: "12 ABR 2025",
              title: "Maratón Café & Montaña",
              description:
                "Inscripciones abiertas para nuestra carrera anual en las alturas de Huaraz. ¡Cupos limitados!",
              image: img1,
              category: "Evento"
            },
            {
              date: "08 ABR 2025",
              title: "Workshop: Nutrición para corredores",
              description:
                "Este sábado, aprende sobre los mejores alimentos para optimizar tu rendimiento con la nutricionista Ana López.",
              image: img2,
              category: "Workshop"
            },
            {
              date: "01 ABR 2025",
              title: "Nueva cafetería aliada: Bean Lovers",
              description:
                "Disfruta de un 25% de descuento presentando tu membresía en cualquiera de sus 3 locales en Lima.",
              image: img3,
              category: "Alianzas"
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative overflow-hidden h-56">
                <div className="absolute top-3 left-3 z-10 bg-white px-3 py-1 rounded-full text-xs font-semibold text-[#4F4A45] flex items-center gap-1 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {item.date}
                </div>
                <div className="absolute top-3 right-3 z-10 bg-[#A67C52] px-3 py-1 rounded-full text-xs font-semibold text-white">
                  {item.category}
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/src/images/placeholder.jpg";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#4F4A45] mb-3 group-hover:text-[#A67C52] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#4F4A45]/90 mb-5">{item.description}</p>
                <Link
                  to="/noticias"
                  className="text-[#A67C52] font-semibold hover:text-[#8B6B45] inline-flex items-center group/link"
                >
                  <span>Leer más</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            to="/noticias" 
            className="px-6 py-3 bg-[#A67C52] hover:bg-[#8B6B45] text-white font-medium rounded-lg inline-flex items-center transition-all shadow-md hover:shadow-lg"
          >
            Ver todas las noticias
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Mapa */}
      <div className="w-full max-w-7xl mt-20 px-4">
        <h2 className="text-3xl font-bold text-[#4F4A45] mb-6 text-center">
          Ubicación del próximo Social Run
        </h2>
        <div className="px-6 pb-16 max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-[#4F4A45] mb-4">
              Encuéntranos
            </h3>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31533.536720190723!2d-79.039929!3d-8.111942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDYnNDMuMCJTIDc5wrAwMicxOS4xIlc!5e0!3m2!1ses!2spe!4v1620000000000!5m2!1ses!2spe"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Nueva Sección: Beneficios Destacados */}
      <div className="w-full max-w-7xl mt-20 px-4">
        <h2 className="text-3xl font-bold text-[#4F4A45] mb-2 text-center">
          ¿Por qué unirte a nuestra comunidad?
        </h2>
        <p className="text-lg text-[#4F4A45]/80 mb-12 text-center max-w-3xl mx-auto">
          Más que correr, ofrecemos experiencias y beneficios diseñados para
          potenciar tu rendimiento y estilo de vida.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🏃‍♂️",
              title: "Eventos Exclusivos",
              description:
                "Carreras temáticas y talleres con expertos en running.",
            },
            {
              icon: "☕",
              title: "Descuentos en Aliados",
              description:
                "Hasta 30% en cafeterías, gimnasios y tiendas deportivas.",
            },
            {
              icon: "👥",
              title: "Networking",
              description:
                "Conecta con una comunidad apasionada por el deporte.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#E6D6C8]"
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-xl font-bold text-[#A67C52] mb-3">
                {item.title}
              </h3>
              <p className="text-[#4F4A45]/90">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Nueva Sección: CTA Final */}
      <div className="w-full max-w-4xl mt-24 mb-16 px-6 py-12 bg-gradient-to-r from-[#E6D6C8] to-[#D6BBA0] rounded-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4F4A45] mb-6">
          ¿Listo para comenzar?
        </h2>
        <p className="text-lg text-[#4F4A45]/90 mb-8 max-w-2xl mx-auto">
          Elige tu membresía y accede inmediatamente a todos los beneficios.
        </p>
        <Link to="/home/planes">
          <button className="bg-[#4F4A45] hover:bg-[#3A3632] text-white font-bold py-4 px-8 rounded-full inline-flex items-center shadow-lg transition-all duration-300">
            Ver planes de membresía
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Inicio;