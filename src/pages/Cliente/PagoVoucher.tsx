import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PlanCard from "../../components/PlanCard2";
import { XCircleIcon, UploadIcon } from "lucide-react";

const planes = [
  {
    title: "Plan Oro",
    price: 49,
    duration: "1 mes",
    benefits: ["Soporte 24/7", "Acceso a contenido exclusivo", "Descuentos en eventos"],
    months: 1,
  },
  {
    title: "Plan Plata",
    price: 29,
    duration: "3 meses",
    benefits: ["Acceso a contenido exclusivo", "Descuentos en eventos", "15% descuento en cafeterías"],
    months: 3,
  },
];

const PagoVoucher = () => {
  const [planSeleccionado, setPlanSeleccionado] = useState<string>("");
  const [numeroOperacion, setNumeroOperacion] = useState("");
  const [voucher, setVoucher] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const calcularVigencia = (): string => {
    const plan = planes.find((p) => p.title === planSeleccionado);
    if (!plan) return "-";

    const fechaInicio = new Date();
    const fechaFin = new Date();
    fechaFin.setMonth(fechaFin.getMonth() + plan.months);
    
    const formatoFecha = (fecha: Date) => {
      const dia = fecha.getDate().toString().padStart(2, "0");
      const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
      const año = fecha.getFullYear();
      return `${dia}/${mes}/${año}`;
    };

    return `${formatoFecha(fechaInicio)} - ${formatoFecha(fechaFin)}`;
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setVoucher(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveFile = () => {
    setVoucher(null);
    setPreview(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-10">
          <h1 className="text-3xl font-bold text-[#922D26] text-center">Selecciona tu Plan</h1>
          
          <div className="flex gap-6 justify-center mt-6">
            {planes.map((plan) => (
              <div
                key={plan.title}
                onClick={() => setPlanSeleccionado(plan.title)}
                className={`cursor-pointer transition p-4 rounded-lg ${
                  planSeleccionado === plan.title ? "border-4 border-[#922D26] shadow-lg" : "border border-gray-300"
                }`}
              >
                <PlanCard {...plan} />
                <button
                  className={`mt-2 w-full py-2 rounded-md text-white font-bold transition ${
                    planSeleccionado === plan.title ? "bg-[#922D26]" : "bg-gray-500 hover:bg-gray-700"
                  }`}
                  onClick={() => setPlanSeleccionado(plan.title)}
                >
                  {planSeleccionado === plan.title ? "Plan Seleccionado" : "Elegir Plan"}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <label className="block text-[#922D26] font-medium mb-2">Sube tu comprobante de pago</label>

            <label className="flex flex-col items-center justify-center w-full p-4 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-[#922D26] transition">
              <UploadIcon className="w-6 h-6 text-gray-400 mb-2" />
              <span className="text-gray-500 text-sm">Haz clic o arrastra un archivo aquí</span>
              <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
            </label>

            {voucher && (
              <div className="mt-4 bg-gray-100 p-4 rounded-lg border flex flex-col items-center">
                <p className="text-sm text-gray-500">
                  Archivo seleccionado: <strong>{voucher.name}</strong>
                </p>

                {preview && (
                  <div className="mt-2 flex flex-col items-center">
                    <p className="text-sm text-gray-500">Vista previa:</p>
                    <img src={preview} alt="Comprobante" className="mt-2 w-40 h-40 object-cover border rounded-lg" />
                    <button
                      className="mt-3 flex items-center gap-2 bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600 transition"
                      onClick={handleRemoveFile}
                    >
                      <XCircleIcon className="w-4 h-4" />
                      Eliminar archivo
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="mt-6">
            <label className="block text-[#922D26] font-medium mb-2">N° de Operación</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Ingrese el número de operación"
              value={numeroOperacion}
              onChange={(e) => setNumeroOperacion(e.target.value)}
            />
          </div>

          <div className="mt-6 text-center">
            <p className="text-lg font-semibold text-[#922D26]">Periodo de vigencia: {calcularVigencia()}</p>
          </div>

          <button className="w-full bg-[#922D26] text-white py-3 rounded-md font-bold mt-6 hover:bg-[#7a2520]">
            Confirmar Pago
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PagoVoucher;
