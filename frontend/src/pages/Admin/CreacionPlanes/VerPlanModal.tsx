import React from "react";
import { Plan } from "./planTypes"; // Adjust the import path as necessary
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

interface VerPlanModalProps {
  plan: Plan | null;
  onClose: () => void;
}

const VerPlanModal: React.FC<VerPlanModalProps> = ({ plan, onClose }) => {
  if (!plan) return null;

  return (
    
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[40%] bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto z-50"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Detalles del Plan</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={20} />
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <div 
                className="w-16 h-16 rounded-full mr-4 flex-shrink-0"
                style={{ backgroundColor: plan.color }}
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800">{plan.nombre}</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    plan.tipo === "premium" 
                      ? "bg-indigo-100 text-indigo-800" 
                      : "bg-gray-100 text-gray-800"
                  }`}>
                    {plan.tipo === "premium" ? "Premium" : "Básico"}
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                    {plan.duracion}
                  </span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    plan.activo 
                      ? "bg-green-100 text-green-800" 
                      : "bg-gray-100 text-gray-800"
                  }`}>
                    {plan.activo ? "Activo" : "Inactivo"}
                  </span>
                </div>
                <p className="text-xl font-bold text-gray-900 mt-2">S/ {plan.precio}</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h4 className="text-lg font-medium text-gray-800 mb-3">Empresas incluidas</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {plan.empresas.map(empresa => (
                  <div key={empresa.id} className="border rounded-lg p-3">
                    <h5 className="font-medium text-gray-800">{empresa.nombre}</h5>
                    {empresa.beneficios.length > 0 ? (
                      <ul className="mt-2 space-y-1">
                        {empresa.beneficios.map(beneficio => (
                          <li key={beneficio.id} className="text-sm text-gray-600">
                            • {beneficio.nombre}: {beneficio.descripcion}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-gray-500 mt-1">No hay beneficios seleccionados</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {plan.promociones.length > 0 && (
              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-lg font-medium text-gray-800 mb-3">Promociones especiales</h4>
                <div className="space-y-2">
                  {plan.promociones.map(promocion => (
                    <div key={promocion.id} className="border-l-4 border-blue-500 pl-3 py-1">
                      <h5 className="font-medium text-gray-800">{promocion.titulo}</h5>
                      <p className="text-sm text-gray-600">{promocion.descripcion}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-gray-200 pt-4">
              <h4 className="text-lg font-medium text-gray-800 mb-3">Términos y condiciones</h4>
              <p className="text-sm text-gray-600 whitespace-pre-line">{plan.terminosCondiciones}</p>
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={onClose}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </motion.div>

  );
};

export default VerPlanModal;