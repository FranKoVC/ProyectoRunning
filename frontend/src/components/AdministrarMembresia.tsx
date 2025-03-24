import { Link } from "react-router-dom";
import { useState } from "react";

const AdministrarMembresia = () => {
  const [membresiaActual] = useState("Premium");
  const [fechaVencimiento] = useState("2025-02-15");

  const handleCambiarMembresia = () => {
    // Lógica para cambiar la membresía
    console.log("Cambiar membresía");
  };

  const handleCancelarSuscripcion = () => {
    // Lógica para cancelar la suscripción
    console.log("Cancelar suscripción");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Administrar Membresía
      </h2>
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
        <h3 className="text-lg font-semibold mb-4 text-blue-800">
          Membresía Actual
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm">Tipo de membresía</p>
            <p className="font-bold text-lg">{membresiaActual}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Fecha de vencimiento</p>
            <p className="font-bold text-lg">{fechaVencimiento}</p>
          </div>
        </div>
      </div>
      <div className="flex space-x-4">
        <Link to="/cliente/home/pago">
          <button
            onClick={handleCambiarMembresia}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Cambiar Membresía
          </button>
        </Link>

        <button
          onClick={handleCancelarSuscripcion}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
        >
          Cancelar Suscripción
        </button>
      </div>
    </div>
  );
};

export default AdministrarMembresia;
