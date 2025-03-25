import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaUserPlus, FaCheckCircle, FaRunning, FaQuestionCircle } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { GiRunningShoe } from "react-icons/gi";
import { FaTshirt, FaTicketAlt, FaUsers } from "react-icons/fa";

const Planes: React.FC = () => {
  const beneficios = [
    { icon: <IoMdPricetag className="text-[#A67C52] text-xl" />, text: "Descuentos en 15+ locales aliados" },
    { icon: <FaTicketAlt className="text-[#A67C52] text-xl" />, text: "Acceso a eventos mensuales" },
    { icon: <GiRunningShoe className="text-[#A67C52] text-xl" />, text: "Rutas guiadas 2 veces por semana" },
    { icon: <FaUsers className="text-[#A67C52] text-xl" />, text: "Comunidad activa de runners" },
    { icon: <FaTshirt className="text-[#A67C52] text-xl" />, text: "Kit de bienvenida (playera y taza)" },
    { icon: <IoMdPricetag className="text-[#A67C52] text-xl" />, text: "Descuentos adicionales (25% en cafés)" }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#A67C52] to-[#8B6B45] py-20 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/running-pattern-light.png')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Elige tu membresía</h1>
          <p className="text-xl md:text-2xl font-light mb-8">
            Accede a beneficios exclusivos diseñados para runners como tú
          </p>
        </div>
      </div>

      {/* Tarjetas de Planes con Efectos Hover */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Plan Mensual */}
          <div className="group relative bg-white p-8 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#A67C52]/50">
            <div className="mb-6">
              <span className="text-[#A67C52] font-semibold">PLAN MENSUAL</span>
              <div className="flex items-end mt-2">
                <span className="text-5xl font-bold text-gray-900 ">S/40</span>
                <span className="text-gray-500 ml-2 mb-1">/mes</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {beneficios.slice(0, 4).map((beneficio, index) => (
                <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform">
                  <span className="mt-1 mr-3 group-hover:scale-110 transition-transform">{beneficio.icon}</span>
                  <span className="group-hover:text-gray-800 transition-colors">{beneficio.text}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-[#A67C52] hover:bg-[#8B6B45] text-white font-bold py-4 px-6 rounded-lg transition-colors group-hover:shadow-md">
              Elegir este plan
            </button>
          </div>

          {/* Plan Anual */}
          <div className="group relative bg-white p-8 rounded-xl shadow-lg border-2 border-[#A67C52] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="absolute top-0 right-0 bg-[#A67C52] text-white px-4 py-1 rounded-bl-lg rounded-tr-xl text-sm font-semibold group-hover:bg-[#8B6B45] transition-colors">
              MÁS POPULAR
            </div>
            <div className="mb-6">
              <span className="text-[#A67C52] font-semibold">PLAN ANUAL</span>
              <div className="flex items-end mt-2">
                <span className="text-5xl font-bold text-gray-900">S/360</span>
                <span className="text-gray-500 ml-2 mb-1">/año</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                (Ahorras S/120 comparado al plan mensual)
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {beneficios.map((beneficio, index) => (
                <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform">
                  <span className="mt-1 mr-3 group-hover:scale-110 transition-transform">{beneficio.icon}</span>
                  <span className="group-hover:text-gray-800 transition-colors">{beneficio.text}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-[#4F4A45] hover:bg-[#3A3632] text-white font-bold py-4 px-6 rounded-lg transition-colors group-hover:shadow-md">
              Elegir este plan
            </button>
          </div>
        </div>
      </div>

      {/* Proceso de Unión */}
      <section className="py-16 bg-[#F7F3E9]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Cómo unirse al club</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Sigue estos simples pasos para comenzar a disfrutar de todos los beneficios
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow hover:-translate-y-1">
              <div className="bg-[#A67C52] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <FaUserPlus className="text-[#A67C52] text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regístrate</h3>
              <p className="text-gray-600">
                Completa nuestro formulario en línea con tus datos básicos
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow hover:-translate-y-1">
              <div className="bg-[#A67C52] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <FaCheckCircle className="text-[#A67C52] text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Elige tu plan</h3>
              <p className="text-gray-600">
                Selecciona la membresía y realiza el pago seguro
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow hover:-translate-y-1">
              <div className="bg-[#A67C52] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <FaRunning className="text-[#A67C52] text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comienza</h3>
              <p className="text-gray-600">
                Recibe tu carnet digital y accede a los beneficios
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Preguntas frecuentes</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Resolvemos tus dudas más comunes sobre las membresías
          </p>
        </div>
        
        <div className="space-y-4">
          {[
            {
              question: "¿Puedo cancelar en cualquier momento?",
              answer: "Sí, puedes cancelar tu membresía cuando lo desees sin penalización."
            },
            {
              question: "¿Cómo accedo a los descuentos?",
              answer: "Recibirás un carnet digital que podrás mostrar en los establecimientos aliados."
            },
            {
              question: "¿Hay eventos incluidos?",
              answer: "Sí, organizamos eventos mensuales exclusivos para nuestros socios."
            },
            {
              question: "¿Qué métodos de pago aceptan?",
              answer: "Aceptamos tarjetas de crédito/débito, transferencias bancarias y PayPal."
            }
          ].map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow hover:-translate-y-1">
              <button className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                <FaQuestionCircle className="text-[#A67C52] text-xl" />
              </button>
              <div className="px-6 pb-6 pt-0 text-gray-600">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-[#E6D6C8] to-[#D6BBA0]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4F4A45] mb-6">¿Listo para unirte?</h2>
          <p className="text-xl text-[#4F4A45]/90 mb-8 max-w-2xl mx-auto">
            Más de 100 runners ya están disfrutando de los beneficios de nuestra comunidad
          </p>
          <button className="bg-[#4F4A45] hover:bg-[#3A3632] text-white font-bold py-4 px-8 rounded-full inline-flex items-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
            Comenzar ahora
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

export default Planes;