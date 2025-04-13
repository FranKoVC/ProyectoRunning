import React from 'react';
import { Dialog } from '@headlessui/react';
import { Plan } from './planTypes';

interface VerPlanModalProps {
  plan: Plan | null;
  onClose: () => void;
}

const VerPlanModal: React.FC<VerPlanModalProps> = ({ plan, onClose }) => {
  if (!plan) return null;

  return (
    <Dialog open={!!plan} onClose={onClose} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-30" />
        
        <div className="relative bg-white rounded-lg max-w-2xl w-full mx-auto p-6 shadow-xl">
          <Dialog.Title className="text-2xl font-bold text-gray-800 mb-4">
            Detalles del Plan: {plan.nombre}
          </Dialog.Title>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium text-gray-700">Precio:</h3>
                <p>S/ {plan.precio}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Duración:</h3>
                <p>{plan.duracion}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Tipo:</h3>
                <p className="capitalize">{plan.tipo}</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-700">Empresas incluidas:</h3>
              <ul className="list-disc list-inside mt-1">
                {plan.empresas.map(empresa => (
                  <li key={empresa.id}>{empresa.nombre}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-700">Beneficios:</h3>
              <div className="mt-2 space-y-3">
                {plan.empresas.map(empresa => (
                  <div key={empresa.id}>
                    <h4 className="font-medium">{empresa.nombre}</h4>
                    <ul className="ml-4 list-disc">
                      {empresa.beneficios.filter(b => b.activo).map(beneficio => (
                        <li key={beneficio.id}>
                          <strong>{beneficio.nombre}:</strong> {beneficio.descripcion}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            {plan.promociones.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-700">Promociones:</h3>
                <ul className="mt-2 space-y-2">
                  {plan.promociones.map(promo => (
                    <li key={promo.id}>
                      <strong>{promo.titulo}:</strong> {promo.descripcion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div>
              <h3 className="font-medium text-gray-700">Términos y condiciones:</h3>
              <p className="mt-1 whitespace-pre-line">{plan.terminosCondiciones}</p>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default VerPlanModal;