import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Contacto = () => {
  return (
    <div className="bg-[#F7F3E9]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#A67C52] to-[#8B6B45] py-16 text-center text-white">
        <div className="absolute inset-0 bg-[url('/images/running-pattern-light.png')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
          <p className="text-xl md:text-2xl font-light">
            Estamos aquí para responder tus preguntas y escuchar tus sugerencias
          </p>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-bold text-[#4F4A45] mb-2">Envía un mensaje</h2>
            <p className="text-[#4F4A45]/80 mb-6">
              Completa el formulario y te responderemos en menos de 24 horas
            </p>

            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#4F4A45] mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ej: Juan Pérez"
                  required
                  className="w-full px-4 py-3 border border-[#E6D6C8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A67C52] focus:border-transparent transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#4F4A45] mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ej: correo@ejemplo.com"
                  required
                  className="w-full px-4 py-3 border border-[#E6D6C8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A67C52] focus:border-transparent transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#4F4A45] mb-1">
                  Tu mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Escribe aquí tu consulta..."
                  required
                  className="w-full px-4 py-3 border border-[#E6D6C8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A67C52] focus:border-transparent transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#A67C52] hover:bg-[#8B6B45] text-white font-semibold rounded-lg transition-all hover:shadow-md"
              >
                <FaPaperPlane className="text-lg" />
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#4F4A45] mb-4">Otras formas de contacto</h3>
              <p className="text-[#4F4A45]/90">
                Prefieres escribirnos directamente? Estamos disponibles a través de estos canales:
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#A67C52]/10 p-3 rounded-full">
                  <FaWhatsapp className="text-[#A67C52] text-2xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#4F4A45]">WhatsApp</h4>
                  <p className="text-[#4F4A45]/80 mb-2">+51 987 654 321</p>
                  <a
                    href="https://wa.me/51987654321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#A67C52] hover:underline"
                  >
                    Enviar mensaje directo
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#A67C52]/10 p-3 rounded-full">
                  <FaEnvelope className="text-[#A67C52] text-2xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#4F4A45]">Correo electrónico</h4>
                  <p className="text-[#4F4A45]/80 mb-2">contacto@coffeerunning.com</p>
                  <a
                    href="mailto:contacto@coffeerunning.com"
                    className="inline-flex items-center gap-2 text-[#A67C52] hover:underline"
                  >
                    Escribir correo
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#A67C52]/10 p-3 rounded-full">
                  <FaPhoneAlt className="text-[#A67C52] text-2xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#4F4A45]">Teléfono</h4>
                  <p className="text-[#4F4A45]/80">+51 (044) 123456</p>
                  <p className="text-sm text-[#4F4A45]/60">Lunes a Viernes: 9am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#A67C52]/10 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-[#A67C52] text-2xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#4F4A45]">Oficina principal</h4>
                  <p className="text-[#4F4A45]/80">Av. Larco 123, Trujillo</p>
                  <p className="text-[#4F4A45]/80">Perú</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold text-[#4F4A45] mb-3">Únete a nuestra comunidad</h4>
              <a
                href="https://chat.whatsapp.com/tu-enlace-de-invitacion"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-lg transition-colors"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Grupo de WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contacto;