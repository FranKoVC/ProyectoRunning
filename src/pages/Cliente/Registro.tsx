import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import registroImg from "../../images/1sn.jpeg";

const Registro = () => {
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [plan, setPlan] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [documento, setDocumento] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-lg flex">
          {/* Lado Izquierdo - Formulario */}
          <div className="w-1/2 bg-[#FDF6E6] flex flex-col items-center justify-center p-10">
            <h1 className="text-4xl font-bold text-[#922D26]">Registra tus datos</h1>

            <div className="bg-[#F7F3E9] p-4 rounded-lg mt-6 w-full max-w-md shadow-md">
              <p className="text-[#922D26] font-semibold text-center mb-3">¿Eres cliente o empresa?</p>
              <div className="flex gap-4">
                <button
                  onClick={() => setTipoUsuario("cliente")}
                  className={`w-1/2 py-2 border border-white rounded-md text-lg ${
                    tipoUsuario === "cliente" ? "bg-[#922D26] text-white" : "bg-white border-gray-300 hover:bg-gray-200"
                  }`}
                >
                  Cliente
                </button>
                <button
                  onClick={() => setTipoUsuario("empresa")}
                  className={`w-1/2 py-2 border border-white rounded-md text-lg ${
                    tipoUsuario === "empresa" ? "bg-[#922D26] text-white" : "bg-white border-gray-300 hover:bg-gray-200"
                  }`}
                >
                  Empresa
                </button>
              </div>
            </div>

            {tipoUsuario && (
              <div className="mt-6 w-full max-w-md">
                <form className="mt-4 space-y-4">
                  {/* Formulario para Cliente */}
                  {tipoUsuario === "cliente" && (
                    <>
                      <label className="text-[#922D26] font-medium">Selecciona un Plan</label>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setPlan("Oro")}
                          className={`w-1/2 py-2 border border-white rounded-md text-lg ${
                            plan === "Oro" ? "bg-yellow-500 text-white" : "bg-white border-gray-300 hover:bg-gray-200"
                          }`}
                        >
                          Oro
                        </button>
                        <button
                          type="button"
                          onClick={() => setPlan("Plata")}
                          className={`w-1/2 py-2 border border-white rounded-md text-lg ${
                            plan === "Plata" ? "bg-gray-400 text-white" : "bg-white border-gray-300 hover:bg-gray-200"
                          }`}
                        >
                          Plata
                        </button>
                      </div>

                      <label className="text-[#922D26] font-medium">Tipo de Documento</label>
                      <select
                        className="w-full p-3 border border-white rounded-md bg-white text-gray-700 font-semibold"
                        value={tipoDocumento}
                        onChange={(e) => setTipoDocumento(e.target.value)}
                      >
                        <option value="">Seleccione</option>
                        <option value="DNI">DNI</option>
                        <option value="Pasaporte">Pasaporte</option>
                        <option value="Carnet de Extranjería">Carnet de Extranjería</option>
                      </select>
                      {tipoDocumento && (
                        <input
                          type="text"
                          placeholder={`Ingrese su ${tipoDocumento}`}
                          className="w-full p-3 bg-white border border-white rounded-md"
                          value={documento}
                          onChange={(e) => setDocumento(e.target.value)}
                        />
                      )}
                      <input type="text" placeholder="Nombres" className="w-full p-3 bg-white border border-white rounded-md" />
                      <input type="text" placeholder="Apellidos" className="w-full p-3 bg-white border border-white rounded-md" />
                      <input type="text" placeholder="Celular" className="w-full p-3 bg-white border border-white rounded-md" />
                      <input type="email" placeholder="Correo Electrónico" className="w-full p-3 bg-white border border-white rounded-md" />
                      <label className="text-[#922D26] font-medium">Fecha de Nacimiento</label>
                      <input type="date" placeholder="Fecha de Nacimiento" className="w-full p-3 bg-white border border-white rounded-md" />
                    </>
                  )}

                  {/* Formulario para Empresa */}
                  {tipoUsuario === "empresa" && (
                    <>
                      <input type="text" placeholder="RUC" className="w-full p-3 border border-white rounded-md" />
                      <input type="text" placeholder="Razón Social" className="w-full p-3 border border-white rounded-md" />
                      <input type="text" placeholder="Contacto" className="w-full p-3 border border-white rounded-md" />
                      <input type="text" placeholder="Celular" className="w-full p-3 border border-white rounded-md" />
                      <label className="text-[#922D26] font-medium">Vigencia del contrato</label>
                      <input type="date" placeholder="Vigencia del Contrato1" className="w-full p-3 border border-white rounded-md" />
                      <input type="date" placeholder="Vigencia del Contrato2" className="w-full p-3 border border-white rounded-md" />
                      <input type="number" placeholder="Porcentaje de Descuento (%)" className="w-full p-3 border border-white rounded-md" />
                      <input type="text" placeholder="Ciudad" className="w-full p-3 border border-white rounded-md" />
                      <label className="text-[#922D26] font-medium">Selecciona un Plan</label>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setPlan("Oro")}
                          className={`w-1/2 py-2 border border-white rounded-md text-lg ${
                            plan === "Oro" ? "bg-yellow-500 text-white" : "bg-white border-gray-300 hover:bg-gray-200"
                          }`}
                        >
                          Oro
                        </button>
                        <button
                          type="button"
                          onClick={() => setPlan("Plata")}
                          className={`w-1/2 py-2 border border-white rounded-md text-lg ${
                            plan === "Plata" ? "bg-gray-400 text-white" : "bg-white border-gray-300 hover:bg-gray-200"
                          }`}
                        >
                          Plata
                        </button>
                      </div>
                    </>
                  )}

                  <button type="submit" className="w-full bg-[#922D26] text-white py-3 rounded-md font-bold mt-4 hover:bg-[#7a2520]">
                    Registrarse
                  </button>
                </form>
              </div>
            )}
          </div>

          <div className="w-1/2 flex items-center justify-center bg-gray-200">
            <img src={registroImg} alt="Registro" className="w-full h-full object-cover" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Registro;
