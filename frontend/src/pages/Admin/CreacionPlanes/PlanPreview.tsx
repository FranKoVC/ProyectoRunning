import React from "react";
import { PlanData } from "./CrearPlan";
import { FaBuilding, FaGift, FaCheckCircle } from "react-icons/fa";

interface PlanPreviewProps {
  planData: PlanData;
}

const PlanPreview: React.FC<PlanPreviewProps> = ({ planData }) => {
  const { nombre, precio, duracion, tipo, color, empresas, promociones, beneficios } = planData;

  // Formatear el precio según la duración
  const formatearPrecio = () => {
    return `S/${precio} ${duracion === "mensual" ? "  - Mensual" : "  - Anual"}`;
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg h-full">
      {/* Cabecera del plan */}
      <div 
        className="p-6 text-white text-center"
        style={{ backgroundColor: color }}
      >
        <h3 className="text-2xl font-bold mb-2">{nombre || "Nuevo Plan"}</h3>
        <div className="text-3xl font-bold mb-2">{formatearPrecio()}</div>
        <div className="inline-block px-4 py-1 bg-black bg-opacity-20 rounded-full text-sm font-medium uppercase">
          {tipo === "basico" ? "Plan Básico" : "Plan Premium"}
        </div>
      </div>
      
      {/* Contenido del plan */}
      <div className="p-6 bg-white">
        {/* Sección de beneficios */}
        <div className="mb-6">
          <h4 className="text-lg font-bold mb-3 border-b pb-2">Beneficios incluidos</h4>
          {beneficios.length === 0 ? (
            <p className="text-center text-gray-500 py-2">No hay beneficios configurados</p>
          ) : (
            <ul className="space-y-2">
              {beneficios.map(beneficio => (
                <li key={beneficio.id} className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">{beneficio.titulo}</span>
                    <p className="text-sm text-gray-600">{beneficio.descripcion}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Sección de empresas asociadas */}
        <div className="mb-6">
          <h4 className="text-lg font-bold mb-3 border-b pb-2">Empresas asociadas</h4>
          {empresas.length === 0 ? (
            <p className="text-center text-gray-500 py-2">No hay empresas seleccionadas</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {empresas.map(empresa => (
                <div key={empresa.id} className="flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm">
                  <FaBuilding className="text-gray-600 mr-1" />
                  <span>{empresa.nombre} <strong>({empresa.descuento}%)</strong></span>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Sección de promociones */}
        <div>
          <h4 className="text-lg font-bold mb-3 border-b pb-2">Promociones y sorteos</h4>
          {promociones.length === 0 ? (
            <p className="text-center text-gray-500 py-2">No hay promociones configuradas</p>
          ) : (
            <div className="space-y-3">
              {promociones.map(promocion => (
                <div key={promocion.id} className="p-3 bg-gray-50 rounded border">
                  <div className="flex items-center mb-1">
                    <FaGift className="text-red-500 mr-2" />
                    <span className="font-medium">{promocion.titulo}</span>
                  </div>
                  <p className="text-sm text-gray-600">{promocion.descripcion}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Botón de suscripción (simulado) */}
        <div className="mt-6">
          <button 
            className="w-full py-3 text-white font-bold rounded-lg"
            style={{ backgroundColor: color }}
          >
            Obtener este plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanPreview;