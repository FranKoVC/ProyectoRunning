import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import registroImg from "../../images/1sn.jpeg";
import { Link } from "react-router-dom";

const Registro = () => {
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [documento, setDocumento] = useState("");
  const [, setFotoPerfil] = useState<File | null>(null);
  const [previewFoto, setPreviewFoto] = useState<string | null>(null);

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      setFotoPerfil(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPreviewFoto(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-lg flex">
          {/* Lado Izquierdo - Formulario */}
          <div className="w-1/2 bg-[#FDF6E6] flex flex-col items-center justify-center p-10">
            <h1 className="text-4xl font-bold text-[#922D26]">Registra tus datos</h1>

            <div className="mt-6 w-full max-w-md">
              <form className="mt-4 space-y-4">
                {/* Campo para foto de perfil */}
                <div className="flex flex-col items-center mb-4">
                  <label className="text-[#922D26] font-medium mb-2">Foto de Perfil</label>
                  <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center overflow-hidden mb-2 border-2 border-[#922D26]">
                    {previewFoto ? (
                      <img src={previewFoto} alt="Vista previa" className="w-full h-full object-cover" />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    )}
                  </div>
                  <label htmlFor="foto-perfil" className="bg-[#922D26] text-white py-2 px-4 rounded-md font-medium cursor-pointer hover:bg-[#7a2520]">
                    Seleccionar foto
                  </label>
                  <input
                    id="foto-perfil"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFotoChange}
                  />
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
                <input
                  type="text"
                  placeholder="Nombres"
                  className="w-full p-3 bg-white border border-white rounded-md"
                />
                <input
                  type="text"
                  placeholder="Apellidos"
                  className="w-full p-3 bg-white border border-white rounded-md"
                />
                <input
                  type="text"
                  placeholder="Celular"
                  className="w-full p-3 bg-white border border-white rounded-md"
                />
                <input
                  type="text"
                  placeholder="Dirección"
                  className="w-full p-3 bg-white border border-white rounded-md"
                />
                <input
                  type="email"
                  placeholder="Correo Electrónico"
                  className="w-full p-3 bg-white border border-white rounded-md"
                />
                <label className="text-[#922D26] font-medium">Fecha de Nacimiento</label>
                <input
                  type="date"
                  placeholder="Fecha de Nacimiento"
                  className="w-full p-3 bg-white border border-white rounded-md"
                />
                <Link to="/cliente/pago">
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
              src={registroImg}
              alt="Registro"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Registro;