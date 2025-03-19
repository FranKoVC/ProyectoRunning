import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import acuerdoImg from "../../images/acuerdo.jpeg";
import { Link } from "react-router-dom";

const RegistroEmpresa = () => {
  const [ruc, setRuc] = useState("");
  const [razonSocial, setRazonSocial] = useState("");
  const [contacto, setContacto] = useState("");
  const [celular, setCelular] = useState("");
  const [vigenciaInicio, setVigenciaInicio] = useState("");
  const [vigenciaFin, setVigenciaFin] = useState("");
  const [descuento, setDescuento] = useState("");
  const [ciudad, setCiudad] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-lg flex">
          {/* Lado Izquierdo - Formulario */}
          <div className="w-1/2 bg-[#FDF6E6] flex flex-col items-center justify-center p-10">
            <h1 className="text-4xl font-bold text-[#922D26]">
              Registro de Empresa
            </h1>

            <div className="mt-6 w-full max-w-md">
              <form className="mt-4 space-y-4">
                <input
                  type="text"
                  placeholder="RUC"
                  className="w-full p-3 bg-white border border-white rounded-md"
                  value={ruc}
                  onChange={(e) => setRuc(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Razón Social"
                  className="w-full p-3 bg-white border border-white rounded-md"
                  value={razonSocial}
                  onChange={(e) => setRazonSocial(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Contacto"
                  className="w-full p-3 bg-white border border-white rounded-md"
                  value={contacto}
                  onChange={(e) => setContacto(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Celular"
                  className="w-full p-3 bg-white border border-white rounded-md"
                  value={celular}
                  onChange={(e) => setCelular(e.target.value)}
                />
                <label className="text-[#922D26] font-medium">
                  Vigencia del contrato
                </label>
                <div className="flex gap-2">
                  <input
                    type="date"
                    className="w-1/2 p-3 bg-white border border-white rounded-md"
                    value={vigenciaInicio}
                    onChange={(e) => setVigenciaInicio(e.target.value)}
                  />
                  <span className="self-center">-</span>
                  <input
                    type="date"
                    className="w-1/2 p-3 bg-white border border-white rounded-md"
                    value={vigenciaFin}
                    onChange={(e) => setVigenciaFin(e.target.value)}
                  />
                </div>
                <input
                  type="number"
                  placeholder="Porcentaje de Descuento (%)"
                  className="w-full p-3 bg-white border border-white rounded-md"
                  value={descuento}
                  onChange={(e) => setDescuento(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Ciudad"
                  className="w-full p-3 bg-white border border-white rounded-md"
                  value={ciudad}
                  onChange={(e) => setCiudad(e.target.value)}
                />

                <Link to="/empresa/home/pago">
                  <button
                    type="submit"
                    className="w-full bg-[#922D26] text-white py-3 rounded-md font-bold mt-4 hover:bg-[#7a2520]"
                  >
                    Siguiente
                  </button>
                </Link>
              </form>
            </div>
          </div>

          <div className="w-1/2 flex items-center justify-center bg-gray-200">
            <img
              src={acuerdoImg}
              alt="Registro Empresa"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RegistroEmpresa;

