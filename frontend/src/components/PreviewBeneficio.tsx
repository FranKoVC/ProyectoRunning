import React from 'react';
import { Beneficio } from '../pages/Admin/AdminBeneficios';

interface PreviewBeneficioProps {
  beneficio: Beneficio;
}

const PreviewBeneficio: React.FC<PreviewBeneficioProps> = ({ beneficio }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto">
      <div className="relative">
        {beneficio.imagenUrl ? (
          <img 
            src={beneficio.imagenUrl} 
            alt={beneficio.titulo} 
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">Sin imagen</span>
          </div>
        )}
        <div className="absolute top-0 right-0 bg-green-500 text-white font-bold py-1 px-3 m-2 rounded-full">
          {beneficio.porcentajeDescuento}% OFF
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            {beneficio.categoriaEmpresa}
          </span>
          <h3 className="text-gray-500 text-sm">{beneficio.nombreEmpresa}</h3>
        </div>
        
        <h2 className="text-xl font-bold text-gray-800 mb-2">{beneficio.titulo}</h2>
        <p className="text-gray-600 mb-4">{beneficio.descripcion}</p>
        
        <div className="border-t pt-3">
          <h4 className="text-sm font-bold text-gray-700 mb-1">Términos y condiciones:</h4>
          <p className="text-xs text-gray-500">{beneficio.terminosCondiciones}</p>
        </div>
      </div>
    </div>
  );
};

export default PreviewBeneficio;