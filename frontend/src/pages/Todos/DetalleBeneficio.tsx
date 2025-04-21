import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import clubtttImg from "../../images/clubttt.png";
import fisioterapiaImg from "../../images/fisioterapia.jpg";
import estabilidadImg from "../../images/estabilidad.jpg";
import hidratacionImg from "../../images/hidratacion.png";
import nutricionImg from "../../images/nutricion.jpg";
import nunocafeteriaImg from "../../images/nunocafeteria.jpg";
import caffeineImg from "../../images/caffeine.png";
import locoburguerImg from "../../images/locoburguer.jpg";
import tostaduriaImg from "../../images/tostaduria.png";

// Interface for benefit items
interface BenefitItem {
  titulo: string;
  descripcion: string;
}

// Interface for company data
interface CompanyData {
  empresa: string;
  imagen: string;
  beneficios: BenefitItem[];
  terminosCondiciones: string[];
}

// Data structure with all benefits
const beneficios: Record<string, CompanyData> = {
  clubttt: {
    empresa: "CLUB TTT",
    imagen: clubtttImg,
    beneficios: [
      {
        titulo: "Descuento en Planes de Entrenamiento",
        descripcion: "Plan de entrenamiento mensual a 120 soles para los members (precio normal 179 soles). Contacto para más información: 996863916 Julio",
      }
    ],
    terminosCondiciones: [
      "Se debe presentar tarjeta de la membresía y DNI en físico.",
      "No aplica descuento sobre otras promociones.",
    ]
  },
  fisioterapia: {
    empresa: "FISIOPRO",
    imagen: fisioterapiaImg,
    beneficios: [
      {
        titulo: "Descuento en descargas musculares",
        descripcion: "Descargas musculares a 45 soles para los miembros (Costo por sesión normal: 60 soles).",
      },
      {
        titulo: "Descuentos en paquetes de fisioterapia",
        descripcion: "Descuento de hasta 100 soles para paquetes de fisioterapia (pago en efectivo, transferencia o yape para paquetes a partir de 10 sesiones)."
      },
      {
        titulo: "Evaluación de lesiones",
        descripcion: "Evaluaciones y diagnóstico gratuito de lesiones"
      }
    ],
    terminosCondiciones: [
      "Se debe presentar tarjeta de la membresía y DNI en físico.",
      "No aplica descuento sobre otras promociones."
    ]
  },
  estabilidad: {
    empresa: "QORE",
    imagen: estabilidadImg,
    beneficios: [
      {
        titulo: "Descuento en paquetes de clases",
        descripcion: "Descuento en paquete de 4 clases 165 soles (precio normal: 180 soles).",
      },
      {
        titulo: "Descuento en eventos exclusivos",
        descripcion: "Descuento en eventos de Outside club."
      }
    ],
    terminosCondiciones: [
      "Se debe presentar tarjeta de la membresía y DNI en físico.",
      "No aplica descuento sobre otras promociones",
      "La compra del paquete es personal e intransferible.",
      "Antes de adquirir el paquete necesitan pasar por una clase de evaluación. (Para poder saber qué es lo que necesita su cuerpo y si es posible incluirlo a clases grupales)."
    ]
  },
  hidratacion: {
    empresa: "PALO SANTO",
    imagen: hidratacionImg,
    beneficios: [
      {
        titulo: "DESCUENTO EN GELES E HIDRATACIÓN",
        descripcion: "Obtén un 10% de descuento en geles e hidratación para los members."
      }
    ],
    terminosCondiciones: [
      "Se debe presentar tarjeta de la membresía y DNI en físico.",
      "Solo compras en el local.",
      "No aplica descuento sobre otras promociones."
    ]
  },
  nutricion: {
    empresa: "MAFER MARTÍN",
    imagen: nutricionImg,
    beneficios: [
      {
        titulo: "DESCUENTO EN PAQUETES NUTRICIONALES",
        descripcion: "25% de descuento en paquetes nutricionales, tanto modalidad presencial como virtual para los members."
      }
    ],
    terminosCondiciones: [
      "El descuento no es acumulable con otras promociones o descuentos.",
      "Se debe presentar tarjeta de la membresía y DNI en físico en caso la consulta sea presencial, en caso sea virtual mandar la foto de la tarjeta y DNI",
      "La atención presencial en Trujillo se realizará una vez al mes, sujetas a disponibilidad y serán confirmadas con anticipación.",
      "Las citas deben ser canceladas o reprogramadas con al menos 24 horas de anticipación.",
      "En caso de inasistencia sin previo aviso, el descuento no será aplicable en la siguiente consulta."
    ]
  },
  nunocafeteria: {
    empresa: "NUNO CAFÉ",
    imagen: nunocafeteriaImg,
    beneficios: [
      {
        titulo: "DESCUENTO EN TODA LA CARTA",
        descripcion: "Disfruta de un 15% de descuento en toda la carta.",
      }
    ],
    terminosCondiciones: [
      "Se debe presentar tarjeta de la membresía y DNI en físico.",
      "Solo consumo en el local o para llevar.",
      "El descuento solo aplica para precios de carta, no aplica descuento sobre otras promociones.",
      "El descuento solo aplica al consumo personal (ejm: Solo se realizará el descuento a la persona que tenga la tarjeta de membresía (bebida + comida personal) no acumulable para otras personas)"
    ]
  },
  caffeine: {
    empresa: "CAFFEINE",
    imagen: caffeineImg,
    beneficios: [
      {
        titulo: "DESCUENTO EN TODA LA CARTA",
        descripcion: "Obtén un 15% de descuento en toda la carta.",
      }
    ],
    terminosCondiciones: [
      "Se debe presentar tarjeta de la membresía y DNI en físico.",
      "Solo consumo en el local o para llevar.",
      "El descuento solo aplica para precios de carta, no aplica descuento sobre otras promociones.",
      "El descuento solo aplica al consumo personal (ejm: Solo se realizará el descuento a la persona que tenga la tarjeta de membresía (bebida + comida personal) no acumulable para otras personas)."
    ]
  },
  locoburguer: {
    empresa: "LOCO BURGUER",
    imagen: locoburguerImg,
    beneficios: [
      {
        titulo: "DESCUENTO EN HAMBURGUESAS SELECCIONADAS",
        descripcion: "Descuento para miembros 15% off en burgers (simple Americana, oklahoma, clásica de la casa, bbq)"
      }
    ],
    terminosCondiciones: [
      "El costo del delivery no está incluido en el descuento.",
      "Métodos de pago: yape, plin, efectivo o transferencia.",
      "Máximo 2 burgers en total por miembro.",
      "Presentar la tarjeta de miembro con DNI.",
      "Uso válido de 2 veces al mes"
    ]
  },
  tostaduria: {
    empresa: "RUNAKUNA",
    imagen: tostaduriaImg,
    beneficios: [
      {
        titulo: "DESCUENTO EN TODA LA CARTA",
        descripcion: "Obtén un 15% de descuento en toda la carta.",
      }
    ],
    terminosCondiciones: [
      "Se debe presentar tarjeta de la membresía y DNI.",
      "El descuento solo aplica para precios de carta de cafés de especialidad."
    ]
  },
};

const DetalleBeneficio = () => {
  const { id } = useParams();
  const beneficio = id ? beneficios[id] : undefined;
  const isAuthenticated = !!localStorage.getItem("access_token");

  if (!beneficio) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8 bg-red-50 rounded-lg shadow-md">
            <p className="text-red-600 text-xl font-semibold">
              Beneficio no encontrado
            </p>
            <p className="text-gray-600 mt-2">
              El beneficio que buscas no está disponible o ha sido removido.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-5xl mx-auto">
          {/* Hero Section with Image and Company Name */}
          <div className="relative">
            <div className="h-64 md:h-96 w-full">
              <img
                src={beneficio.imagen}
                alt={beneficio.empresa}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6 md:p-8 w-full">
                  <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                    {beneficio.empresa}
                  </h1>
                  <div className="w-24 h-1 bg-yellow-400 mt-3"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 flex items-center">
              <span className="mr-3">Beneficios Exclusivos</span>
              <div className="flex-grow h-px bg-gray-200"></div>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {beneficio.beneficios.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-blue-400 py-4 px-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-blue-600 text-lg mr-4">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {item.titulo}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 bg-white flex-grow">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Terms and Conditions - Only visible when authenticated */}
            {isAuthenticated ? (
              <div className="mt-16 pt-8 border-t border-gray-200">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="mr-3">Términos y Condiciones</span>
                  <div className="flex-grow h-px bg-gray-200"></div>
                </h2>
                
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <ul className="space-y-3 text-gray-600">
                    {beneficio.terminosCondiciones.map((termino, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2 flex-shrink-0 mt-1">•</span>
                        <span>{termino}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-gray-500 italic border-t border-gray-200 pt-4">
                    * Para hacer efectivo cualquier beneficio, es necesario presentar tu identificación de miembro vigente.
                  </p>
                </div>
              </div>
            ) : (
              <div className="mt-16 pt-8 border-t border-gray-200 text-center">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        Para ver los términos y condiciones de este beneficio, por favor inicia sesión.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetalleBeneficio;