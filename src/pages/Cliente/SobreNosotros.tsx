import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaUsers, FaLightbulb, FaStar, FaHandshake } from "react-icons/fa";
import "animate.css/animate.min.css";

import historiaImg from "../../images/1sn.jpeg";

const SobreNosotros: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center" style={{ backgroundImage: "url('/images/sobre-nosotros-hero.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-xl animate__animated animate__fadeIn">
          <h1 className="text-5xl font-bold">Sobre Nosotros</h1>
          <p className="mt-3 text-lg max-w-2xl mx-auto">
            Descubre nuestra historia, misión y valores que nos hacen únicos.
          </p>
        </div>
      </div>

      {/* Nuestra Historia */}
      <section className="py-16 px-6 lg:flex items-center max-w-6xl mx-auto">
        <img
          src={historiaImg}
          alt="Nuestra Historia"
          className="w-full lg:w-1/2 rounded-lg shadow-lg mb-6 lg:mb-0 lg:mr-8 animate__animated animate__fadeInLeft"
        />
        <div className="lg:w-1/2 animate__animated animate__fadeInRight">
          <h2 className="text-3xl font-bold text-red-800">Nuestra Historia</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Desde nuestros inicios, nos hemos dedicado a ofrecer experiencias exclusivas y beneficios únicos a nuestros socios.
          </p>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-800">Nuestra Filosofía</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="p-6 bg-white rounded-lg shadow-md text-center animate__animated animate__fadeInUp">
              <FaLightbulb className="text-red-800 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Misión</h3>
              <p className="mt-2 text-gray-600">
                Brindar experiencias únicas y beneficios exclusivos a nuestros socios, fortaleciendo su conexión con el club.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center animate__animated animate__fadeInUp animate__delay-1s">
              <FaStar className="text-red-800 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Visión</h3>
              <p className="mt-2 text-gray-600">
                Ser la comunidad de socios más grande y comprometida, ofreciendo siempre nuevas oportunidades y ventajas.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center animate__animated animate__fadeInUp animate__delay-2s">
              <FaHandshake className="text-red-800 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Valores</h3>
              <p className="mt-2 text-gray-600">
                Compromiso, innovación, pasión y excelencia en el servicio a nuestros socios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-800">Lo Que Dicen Nuestros Socios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div className="p-6 bg-white rounded-lg shadow-md animate__animated animate__fadeIn">
            <p className="text-gray-700 italic">“Ser parte de esta comunidad ha sido una experiencia increíble.”</p>
            <h4 className="mt-4 font-semibold text-gray-900">- Juan Pérez</h4>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md animate__animated animate__fadeIn animate__delay-1s">
            <p className="text-gray-700 italic">“Los beneficios son únicos y la atención es de primera.”</p>
            <h4 className="mt-4 font-semibold text-gray-900">- María Rodríguez</h4>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md animate__animated animate__fadeIn animate__delay-2s">
            <p className="text-gray-700 italic">“Me encanta ser parte de esta comunidad, siempre hay nuevas sorpresas.”</p>
            <h4 className="mt-4 font-semibold text-gray-900">- Carlos Gómez</h4>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default SobreNosotros;
