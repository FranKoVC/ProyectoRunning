import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PlanCard from "../../components/PlanCard";
import { FaUserPlus, FaCheckCircle, FaQuoteLeft, FaRunning } from "react-icons/fa";

const Planes: React.FC = () => {
  const [tipoSocio, setTipoSocio] = useState<"local" | "extranjero">("local");

  const beneficios = [
    "Carnet de socio",
    "Descuentos en +100 marcas",
    "Prioridad y descuentos en entradas",
    "Cupones Ticketmaster",
    "Descuentos en Tiendas Marathon",
    "Descuentos en Tienda Crema",
    "Experiencias exclusivas",
    "Sorteos mensuales de camisetas",
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="text-center py-16  text-white">
          <h1 className="text-4xl font-bold text-gray-800">Únete a Nuestra Comunidad</h1>
          <p className="mt-4 text-lg text-gray-800">Elige el plan que mejor se adapte a ti y accede a beneficios exclusivos.</p>
        </section>

        {/* Selector de Planes */}
        <div className="text-center p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Planes de Suscripción</h2>
          <div className="flex justify-center gap-4 mb-6">
            <button
              className={`px-6 py-3 font-semibold text-sm rounded-lg transition-all shadow-md ${
                tipoSocio === "local"
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setTipoSocio("local")}
            >
              Socio Básico
            </button>
            <button
              className={`px-6 py-3 font-semibold text-sm rounded-lg transition-all shadow-md ${
                tipoSocio === "extranjero"
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setTipoSocio("extranjero")}
            >
              Socio Premium
            </button>
          </div>

          {/* Tarjetas de Planes */}
          <div className="flex justify-center gap-6 flex-wrap">
            <PlanCard title="Plan Mensual" price={40} duration="/ mes" benefits={beneficios} />
            <PlanCard title="Plan Anual" price={360} duration="/ año" benefits={beneficios} />
          </div>
        </div>

        {/* Nueva Sección: Cómo unirte al club */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Cómo Unirte al Trujillo Running Club</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Sigue estos sencillos pasos para convertirte en miembro y comenzar a disfrutar de todos los beneficios.
        </p>
        <div className="max-w-xl mx-auto space-y-8">
          <div className="flex items-center gap-4">
            <FaUserPlus className="text-red-500 text-3xl" />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-800">Regístrate en Línea</h3>
              <p className="text-gray-600">Completa nuestro formulario de inscripción en línea para iniciar tu membresía.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaCheckCircle className="text-red-500 text-3xl" />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-800">Elige tu Membresía</h3>
              <p className="text-gray-600">Selecciona la membresía que mejor se adapte a tus necesidades y estilo de vida.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaRunning className="text-red-500 text-3xl" />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-800">Comienza a Correr</h3>
              <p className="text-gray-600">Únete a nuestros eventos y actividades, y disfruta de los beneficios de ser miembro.</p>
            </div>
          </div>
        </div>
      </section>

        {/* Testimonios */}
        <section className="py-16 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Testimonios</h2>
          <div className="mt-8 flex flex-col md:flex-row gap-6 justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
              <FaQuoteLeft className="text-red-600 text-2xl mb-4" />
              <p className="text-gray-700 italic">"Gracias a este plan, he podido disfrutar de experiencias únicas con mi equipo favorito."</p>
              <h3 className="mt-4 font-bold">Carlos M.</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
              <FaQuoteLeft className="text-red-600 text-2xl mb-4" />
              <p className="text-gray-700 italic">"Los descuentos exclusivos han hecho que valga la pena cada centavo."</p>
              <h3 className="mt-4 font-bold">Ana P.</h3>
            </div>
          </div>
        </section>

        {/* Preguntas Frecuentes */}
        <section className="py-16 text-center px-6">
          <h2 className="text-3xl font-bold text-gray-800">Preguntas Frecuentes</h2>
          <div className="mt-8 max-w-3xl mx-auto text-left">
            <details className="mb-4 bg-white p-4 rounded-lg shadow-md">
              <summary className="font-semibold cursor-pointer">¿Cómo puedo cancelar mi suscripción?</summary>
              <p className="mt-2 text-gray-700">Puedes cancelar en cualquier momento desde tu cuenta sin penalizaciones.</p>
            </details>
            <details className="mb-4 bg-white p-4 rounded-lg shadow-md">
              <summary className="font-semibold cursor-pointer">¿Hay descuentos para grupos?</summary>
              <p className="mt-2 text-gray-700">Sí, ofrecemos descuentos para grupos de más de 5 personas.</p>
            </details>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Planes;
