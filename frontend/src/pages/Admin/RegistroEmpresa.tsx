import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import acuerdoImg from "../../images/acuerdo.jpeg";

const RegistroEmpresa = () => {
  const [ruc, setRuc] = useState("");
  const [razonSocial, setRazonSocial] = useState("");
  const [contacto, setContacto] = useState("");
  const [celular, setCelular] = useState("");
  const [vigenciaInicio, setVigenciaInicio] = useState("");
  const [vigenciaFin, setVigenciaFin] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [, setLogoEmpresa] = useState<File | null>(null);
  const [previewLogo, setPreviewLogo] = useState<string | null>(null);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoEmpresa(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewLogo(reader.result as string);
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
            <h1 className="text-4xl font-bold text-[#922D26]">
              Registro de Empresa
            </h1>

            <div className="mt-6 w-full max-w-md">
              <form className="mt-4 space-y-4">
                {/* Campo para logo de empresa */}
                <div className="flex flex-col items-center mb-4">
                  <label className="text-[#922D26] font-medium mb-2">Logo de la Empresa</label>
                  <div className="w-40 h-40 bg-white flex items-center justify-center overflow-hidden mb-2 border-2 border-[#922D26] rounded-md">
                    {previewLogo ? (
                      <img src={previewLogo} alt="Logo de empresa" className="w-full h-full object-contain" />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )}
                  </div>
                  <label htmlFor="logo-empresa" className="bg-[#922D26] text-white py-2 px-4 rounded-md font-medium cursor-pointer hover:bg-[#7a2520]">
                    Subir logo
                  </label>
                  <input
                    id="logo-empresa"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleLogoChange}
                  />
                </div>

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
                  type="text"
                  placeholder="Ciudad"
                  className="w-full p-3 bg-white border border-white rounded-md"
                  value={ciudad}
                  onChange={(e) => setCiudad(e.target.value)}
                />
                  <button
                    type="submit"
                    className="w-full bg-[#922D26] text-white py-3 rounded-md font-bold mt-4 hover:bg-[#7a2520]"
                  >
                    Registrar
                  </button>
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

