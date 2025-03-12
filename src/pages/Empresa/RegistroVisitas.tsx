import { useState } from "react";
import { CheckCircle, AlertTriangle } from "lucide-react";

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const RegistroVisita = () => {
  const [dniCliente, setDniCliente] = useState("");
  const [cliente, setCliente] = useState<{
    nombre: string;
    descuento: string;
    estado: string;
  } | null>(null);
  const [montoCompra, setMontoCompra] = useState("");

  const validarCliente = () => {
    if (dniCliente === "123456") {
      setCliente({ nombre: "Juan Pérez", descuento: "15%", estado: "Activo" });
    } else {
      setCliente({ nombre: "Juan Pérez", descuento: "", estado: "Inactivo" });
    }
  };

  const registrarCompra = () => {
    if (!cliente || cliente.estado !== "Activo") return;
    alert(`Compra registrada para ${cliente.nombre} con descuento de ${cliente.descuento}`);
    setDniCliente("");
    setMontoCompra("");
    setCliente(null);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Registro de Visita</h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">DNI del cliente:</label>
            <input
              type="text"
              value={dniCliente}
              onChange={(e) => setDniCliente(e.target.value)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Ingrese el DNI"
            />
            <button
              onClick={validarCliente}
              className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Validar Cliente
            </button>
          </div>

          {cliente && cliente.estado === "Activo" && (
            <div className="p-4 bg-green-100 text-green-700 rounded-lg flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <p>Descuento: {cliente.descuento}</p>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <p>Estado: {cliente.estado}</p>
              </div>
            </div>
          )}

          {cliente && cliente.estado === "Inactivo" && (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg flex items-center gap-2 mt-2">
              <AlertTriangle className="w-5 h-5" />
              <p>Estado: {cliente.estado}</p>
            </div>
          )}

          {cliente && cliente.estado === "Activo" && (
            <div className="mt-4">
              <label className="block text-gray-700 font-medium mb-1">Monto de la Compra:</label>
              <input
                type="number"
                value={montoCompra}
                onChange={(e) => setMontoCompra(e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Ingrese el monto"
              />
              <button
                onClick={registrarCompra}
                className="mt-2 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
              >
                Registrar Compra
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegistroVisita;
