import React from 'react';
import { Dialog } from '@headlessui/react';
import PlanForm from './PlanForm';
import { Plan, Empresa, Promocion } from './planTypes';

interface EditarPlanModalProps {
  plan: Plan | null;
  onClose: () => void;
  onPlanUpdated: (planActualizado: Plan) => void;
  empresas: Empresa[];
  promocionesDisponibles: Promocion[];
}

const EditarPlanModal: React.FC<EditarPlanModalProps> = ({ 
  plan, 
  onClose, 
  onPlanUpdated,
  empresas,
  promocionesDisponibles
}) => {
  if (!plan) return null;

  const handleSubmit = (formData: any) => {
    const planActualizado = {
      ...plan,
      ...formData,
      empresas: empresas.filter(e => formData.empresasSeleccionadas.includes(e.id))
    };
    onPlanUpdated(planActualizado);
  };

  const initialData = {
    ...plan,
    empresasSeleccionadas: plan.empresas.map(e => e.id)
  };

  return (
    <Dialog open={!!plan} onClose={onClose} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-30" />
        
        <div className="relative bg-white rounded-lg max-w-4xl w-full mx-auto p-6 shadow-xl">
          <Dialog.Title className="text-2xl font-bold text-gray-800 mb-4">
            Editar Plan: {plan.nombre}
          </Dialog.Title>
          
          <PlanForm 
            empresas={empresas}
            promocionesDisponibles={promocionesDisponibles}
            onSubmit={handleSubmit}
            initialData={initialData}
          />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default EditarPlanModal;