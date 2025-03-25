import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaLightbulb, FaStar, FaHandshake, FaRunning, FaCoffee } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import "animate.css/animate.min.css";

import historiaImg from "../../images/1sn.jpeg";
import equipoImg from "../../images/img1.jpg";
//import carreraImg from "../../images/race.jpg";

const SobreNosotros: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section Mejorada */}
      <div className="relative bg-gradient-to-r from-[#A67C52] to-[#8B6B45] h-[400px] flex items-center justify-center text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/running-pattern.png')] opacity-10"></div>
        <div className="relative z-10 p-8 animate__animated animate__fadeIn max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nuestra Pasión por Correr</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Más que un club, somos una comunidad que combina el amor por el running con beneficios exclusivos para tus metas.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
              <FaRunning className="text-2xl" />
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
              <FaCoffee className="text-2xl" />
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
              <IoMdPeople className="text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Sección Historia Mejorada */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <img
              src={historiaImg}
              alt="Historia del club"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#A67C52] text-white p-6 rounded-xl shadow-lg hidden lg:block">
              <span className="text-4xl font-bold block">2018</span>
              <span className="text-sm">Año de fundación</span>
            </div>
          </div>
          <div className="lg:w-1/2">
            <span className="text-[#A67C52] font-semibold">NUESTRA HISTORIA</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">De una idea a una comunidad vibrante</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Todo comenzó con un grupo de amigos apasionados por el running que querían combinar su amor por correr con el disfrute de un buen café post-entrenamiento. Lo que empezó como encuentros casuales se transformó en una comunidad organizada con más de 100 miembros activos.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F7F3E9] p-4 rounded-lg">
                <span className="text-[#A67C52] font-bold text-2xl">100+</span>
                <p className="text-gray-600 text-sm">Miembros activos</p>
              </div>
              <div className="bg-[#F7F3E9] p-4 rounded-lg">
                <span className="text-[#A67C52] font-bold text-2xl">15+</span>
                <p className="text-gray-600 text-sm">Empresas aliadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Filosofía Mejorada */}
      <section className="py-16 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#A67C52] font-semibold">NUESTRA FILOSOFÍA</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Lo que nos impulsa cada día</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#A67C52]">
              <FaLightbulb className="text-[#A67C52] text-4xl mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Misión</h3>
              <p className="text-gray-600">
                Crear una comunidad donde los runners encuentren no solo compañeros de entrenamiento, sino también beneficios tangibles que mejoren su estilo de vida y rendimiento deportivo.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#A67C52]">
              <FaStar className="text-[#A67C52] text-4xl mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visión</h3>
              <p className="text-gray-600">
                Ser el referente nacional de clubes de running que mejor integra la actividad deportiva con beneficios de calidad para sus miembros.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#A67C52]">
              <FaHandshake className="text-[#A67C52] text-4xl mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#A67C52] mr-2">•</span> Pasión por el running
                </li>
                <li className="flex items-start">
                  <span className="text-[#A67C52] mr-2">•</span> Comunidad inclusiva
                </li>
                <li className="flex items-start">
                  <span className="text-[#A67C52] mr-2">•</span> Beneficios reales
                </li>
                <li className="flex items-start">
                  <span className="text-[#A67C52] mr-2">•</span> Sostenibilidad local
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Equipo */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <span className="text-[#A67C52] font-semibold">NUESTRO EQUIPO</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Conoce a los impulsores</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nuestro equipo está formado por runners experimentados y profesionales comprometidos con crear la mejor experiencia para nuestros miembros.
            </p>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#A67C52] rounded-full mx-auto mb-2"></div>
                <span className="text-sm font-medium">Fundador</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#A67C52] rounded-full mx-auto mb-2"></div>
                <span className="text-sm font-medium">Entrenador</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#A67C52] rounded-full mx-auto mb-2"></div>
                <span className="text-sm font-medium">Community Manager</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <img
              src={equipoImg}
              alt="Equipo del club"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Testimonios Mejorados */}
      <section className="py-16 bg-[#4F4A45] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#D6BBA0] font-semibold">TESTIMONIOS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Lo que dicen nuestros runners</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Gracias al club conocí a mis compañeros de entrenamiento y ahorro en mi cafés post-carrera. ¡Win-win!",
                author: "María González",
                role: "Miembro desde 2020"
              },
              {
                quote: "Los descuentos en tiendas deportivas ya han cubierto el costo de mi membresía varias veces.",
                author: "Carlos Mendoza",
                role: "Miembro desde 2021"
              },
              {
                quote: "La energía del grupo me motiva a superarme. Además, ¡el café de bienvenida es increíble!",
                author: "Lucía Fernández",
                role: "Miembro desde 2022"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/10 hover:border-[#A67C52] transition-colors duration-300"
              >
                <div className="text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="inline-block mx-0.5" />
                  ))}
                </div>
                <p className="italic mb-6">"{testimonial.quote}"</p>
                <div className="border-t border-white/20 pt-4">
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-white/80">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-[#E6D6C8] to-[#D6BBA0]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4F4A45] mb-6">¿Listo para unirte a nuestra comunidad?</h2>
          <p className="text-xl text-[#4F4A45]/90 mb-8">
            Descubre todos los beneficios que tenemos preparados para ti.
          </p>
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
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default SobreNosotros;