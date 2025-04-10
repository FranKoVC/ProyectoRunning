import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaStar, FaRunning, FaCoffee } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import "animate.css/animate.min.css";

import historiaImg from "../../images/1sn.jpeg";
import foto1 from "../../images/foto1.jpg";
import foto2 from "../../images/foto2.jpg";

const SobreNosotros: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section Mejorada */}
      <div className="relative bg-gradient-to-r from-[#A67C52] to-[#8B6B45] h-[400px] flex items-center justify-center text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/running-pattern.png')] opacity-10"></div>
        <div className="relative z-10 p-8 animate__animated animate__fadeIn max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nuestra Pasión por Correr
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Más que un club, somos una comunidad que combina el amor por el
            running con beneficios exclusivos para tus metas.
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
            <span className="text-[#A67C52] font-semibold">
              NUESTRA HISTORIA
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              De una idea a una comunidad vibrante
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Todo comenzó con un grupo de amigos apasionados por el running que
              querían combinar su amor por correr con el disfrute de un buen
              café post-entrenamiento. Lo que empezó como encuentros casuales se
              transformó en una comunidad organizada con más de 100 miembros
              activos.
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

      {/* Sección Equipo */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#A67C52] font-semibold inline-block px-4 py-1 bg-[#A67C52]/10 rounded-full">
            NUESTRO EQUIPO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Conoce a los impulsores
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Nuestro equipo está formado por runners experimentados y
            profesionales comprometidos con crear la mejor experiencia para
            nuestros miembros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Miembro 1 */}
          <div className="flex flex-col items-center group">
            <div className="relative mb-6 transition-all duration-300 group-hover:scale-105">
              <div className="w-48 h-48 bg-gradient-to-br from-[#E6D6C8] to-[#A67C52] rounded-full p-1">
                <div className="w-full h-full overflow-hidden rounded-full relative">
                  <img
                    src={foto2} 
                    alt="Carlos Mendoza - Fundador"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#A67C52] text-white px-4 py-1 rounded-full text-sm font-medium">
                Fundador
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#4F4A45]">Carlos Mendoza</h3>
            <p className="text-gray-600 text-center mt-2">
              Ultramaratonista con más de 10 años de experiencia. Impulsor de
              comunidades deportivas en Lima.
            </p>
            <div className="flex space-x-3 mt-4">
              <a
                href="#"
                className="text-[#A67C52] hover:text-[#8B6B45] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#A67C52] hover:text-[#8B6B45] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#A67C52] hover:text-[#8B6B45] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Miembro 2 */}
          <div className="flex flex-col items-center group">
            <div className="relative mb-6 transition-all duration-300 group-hover:scale-105">
              <div className="w-48 h-48 bg-gradient-to-br from-[#E6D6C8] to-[#A67C52] rounded-full p-1">
                <div className="w-full h-full overflow-hidden rounded-full relative">
                  <img
                    src={foto1} 
                    alt="Laura Sánchez - Entrenadora"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#A67C52] text-white px-4 py-1 rounded-full text-sm font-medium">
                Entrenadora
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#4F4A45]">Laura Sánchez</h3>
            <p className="text-gray-600 text-center mt-2">
              Fisioterapeuta deportiva y corredora profesional. Especialista en
              biomecánica y prevención de lesiones.
            </p>
            <div className="flex space-x-3 mt-4">
              <a
                href="#"
                className="text-[#A67C52] hover:text-[#8B6B45] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#A67C52] hover:text-[#8B6B45] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#A67C52] hover:text-[#8B6B45] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Miembro 3 */}
          <div className="flex flex-col items-center group">
            <div className="relative mb-6 transition-all duration-300 group-hover:scale-105">
              <div className="w-48 h-48 bg-gradient-to-br from-[#E6D6C8] to-[#A67C52] rounded-full p-1">
                <div className="w-full h-full overflow-hidden rounded-full relative">
                  <img
                    src={foto2}
                    alt="Miguel Torres - Community Manager"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#A67C52] text-white px-4 py-1 rounded-full text-sm font-medium">
                Community Manager
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#4F4A45]">Miguel Torres</h3>
            <p className="text-gray-600 text-center mt-2">
              Especialista en marketing digital con experiencia en eventos
              deportivos. Creador de contenido inspirador.
            </p>
            <div className="flex space-x-3 mt-4">
              <a
                href="#"
                className="text-[#A67C52] hover:text-[#8B6B45] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#A67C52] hover:text-[#8B6B45] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#A67C52] hover:text-[#8B6B45] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Mejorados */}
      <section className="py-16 bg-[#4F4A45] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#D6BBA0] font-semibold">TESTIMONIOS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Lo que dicen nuestros runners
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Gracias al club conocí a mis compañeros de entrenamiento y ahorro en mi cafés post-carrera. ¡Win-win!",
                author: "María González",
                role: "Miembro desde 2020",
              },
              {
                quote:
                  "Los descuentos en tiendas deportivas ya han cubierto el costo de mi membresía varias veces.",
                author: "Carlos Mendoza",
                role: "Miembro desde 2021",
              },
              {
                quote:
                  "La energía del grupo me motiva a superarme. Además, ¡el café de bienvenida es increíble!",
                author: "Lucía Fernández",
                role: "Miembro desde 2022",
              },
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#4F4A45] mb-6">
            ¿Listo para unirte a nuestra comunidad?
          </h2>
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
