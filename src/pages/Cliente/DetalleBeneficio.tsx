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

// Datos de los beneficios
const beneficios: Record<
  string,
  { titulo: string; empresa: string; descripcion: string; imagen: string }
> = {
  clubttt: {
    titulo: "Descuento en Planes de Entrenamiento",
    empresa: "CLUB TTT",
    descripcion:
      "Obtén un descuento exclusivo en planes de entrenamiento personalizados con los mejores coaches.",
    imagen: clubtttImg,
  },
  fisioterapia: {
    titulo: "25% de Descuento en Fisioterapia",
    empresa: "FISIOPRO",
    descripcion:
      "Accede a sesiones de fisioterapia con un 25% de descuento en descargas musculares y descuentos de hasta S/100 en paquetes de fisioterapia.",
    imagen: fisioterapiaImg,
  },
  estabilidad: {
    titulo: "Descuento en sesiones",
    empresa: "QORE",
    descripcion:
      "Accede a un descuento en paquetes de 4 sesiones especializadas en estabilidad corporal para mejorar tu postura y rendimiento.",
    imagen: estabilidadImg,
  },
  hidratacion: {
    titulo: "10% DE DESCUENTO",
    empresa: "PALO SANTO",
    descripcion: "Obtén un 10% de descuento en bebidas isotónicas y geles.",
    imagen: hidratacionImg,
  },
  nutricion: {
    titulo: "25% DE DESCUENTO",
    empresa: "MAFER MARTÍN",
    descripcion: "Obtén un 25% de descuento en paquetes nutricionales.",
    imagen: nutricionImg,
  },
  nunocafeteria: {
    titulo: "15% DE DESCUENTO",
    empresa: "NUNO CAFÉ",
    descripcion: "Obtén un 15% de descuento en toda la carta.",
    imagen: nunocafeteriaImg,
  },
  caffeine: {
    titulo: "15% DE DESCUENTO",
    empresa: "CAFFEINE",
    descripcion: "Obtén un 15% de descuento en toda la carta.",
    imagen: caffeineImg,
  },
  locoburguer: {
    titulo: "15% DE DESCUENTO",
    empresa: "LOCO BURGUER",
    descripcion: "Obtén un 15% de descuento en hamburguesas seleccionadas.",
    imagen: locoburguerImg,
  },
  tostaduria: {
    titulo: "15% DE DESCUENTO",
    empresa: "RUNAKUNA",
    descripcion: "Obtén un 15% de descuento en toda la carta.",
    imagen: tostaduriaImg,
  },
};

const DetalleBeneficio = () => {
  const { id } = useParams();
  const beneficio = id ? beneficios[id] : undefined;

  if (!beneficio) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <p className="text-center text-red-500 mt-20 text-lg font-semibold">
          Beneficio no encontrado.
        </p>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="max-w-4xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg flex flex-col gap-8 mb-16">
        <img
          src={beneficio.imagen}
          alt={beneficio.titulo}
          className="w-full h-64 object-cover rounded-md"
        />
        <h1 className="text-3xl font-bold">{beneficio.titulo}</h1>
        <h2 className="text-xl font-semibold text-gray-700">
          {beneficio.empresa}
        </h2>
        <p className="text-gray-600">{beneficio.descripcion}</p>
      </div>
      <Footer />
    </div>
  );
};

export default DetalleBeneficio;
