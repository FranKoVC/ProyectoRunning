import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
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
      <div className="relative w-full max-w-7xl bg-gradient-to-r from-[#E6D6C8] via-[#D6BBA0] to-[#A67C52] bg-opacity-80 rounded-3xl p-6 md:p-12 shadow-lg overflow-hidden">
        <div className="relative flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#4F4A45] leading-tight">
              Bienvenido a {" "}
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
                to="/cliente/home/registro"
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

      <h2 className="text-3xl font-bold text-[#4F4A45] mt-12">
        Empresas asociadas
      </h2>
      <div className="carousel-container mt-6">
        <div className="carousel-track">
          {/* Duplicamos las imágenes para hacer el bucle continuo */}
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
    </div>
  );
};

export default Inicio;
