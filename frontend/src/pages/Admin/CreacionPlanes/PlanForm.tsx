import React, { useState, useEffect } from 'react';
import { PlanFormData, Empresa, Promocion } from './planTypes';

interface PlanFormProps {
  empresas: Empresa[];
  promocionesDisponibles: Promocion[];
  onSubmit: (formData: PlanFormData) => void;
  initialData?: Partial<PlanFormData>;
}

const PlanForm: React.FC<PlanFormProps> = ({ 
  empresas, 
  promocionesDisponibles, 
  onSubmit,
  initialData 
}) => {
  const [formData, setFormData] = useState<PlanFormData>({
    nombre: initialData?.nombre || '',
    precio: initialData?.precio || 0,
    duracion: initialData?.duracion || '1 mes',
    tipo: initialData?.tipo || 'basico',
    color: initialData?.color || '#3b82f6',
    empresasSeleccionadas: initialData?.empresasSeleccionadas || [],
    promociones: initialData?.promociones || [],
    terminosCondiciones: initialData?.terminosCondiciones || ''
  });

  const [empresasConBeneficios, setEmpresasConBeneficios] = useState<Empresa[]>([]);

  useEffect(() => {
    // Filtrar empresas seleccionadas con sus beneficios
    const selected = empresas.filter(empresa => 
      formData.empresasSeleccionadas.includes(empresa.id)
    );
    setEmpresasConBeneficios(selected);
  }, [formData.empresasSeleccionadas, empresas]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'precio' ? parseFloat(value) || 0 : value
    }));
  };

  const handleEmpresaToggle = (empresaId: string) => {
    setFormData(prev => ({
      ...prev,
      empresasSeleccionadas: prev.empresasSeleccionadas.includes(empresaId)
        ? prev.empresasSeleccionadas.filter(id => id !== empresaId)
        : [...prev.empresasSeleccionadas, empresaId]
    }));
  };

  const handlePromocionToggle = (promocion: Promocion) => {
    setFormData(prev => ({
      ...prev,
      promociones: prev.promociones.some(p => p.id === promocion.id)
        ? prev.promociones.filter(p => p.id !== promocion.id)
        : [...prev.promociones, promocion]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nombre y Precio */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre del Plan</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Precio (S/)</label>
          <input
            type="number"
            name="precio"
            value={formData.precio}
            onChange={handleInputChange}
            min="0"
            step="0.01"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        {/* Duración y Tipo */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Duración</label>
          <select
            name="duracion"
            value={formData.duracion}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="1 mes">1 mes</option>
            <option value="2 meses">2 meses</option>
            <option value="3 meses">3 meses</option>
            <option value="anual">Anual</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Tipo</label>
          <select
            name="tipo"
            value={formData.tipo}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="basico">Básico</option>
            <option value="premium">Premium</option>
          </select>
        </div>
        
        {/* Color */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Color identificador</label>
          <div className="flex items-center mt-1">
            <input
              type="color"
              name="color"
              value={formData.color}
              onChange={handleInputChange}
              className="h-10 w-10 rounded-md border border-gray-300 cursor-pointer"
            />
            <span className="ml-2 text-sm text-gray-500">{formData.color}</span>
          </div>
        </div>
      </div>
      
      {/* Selección de Empresas */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Empresas incluidas</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {empresas.map(empresa => (
            <div key={empresa.id} className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id={`empresa-${empresa.id}`}
                  checked={formData.empresasSeleccionadas.includes(empresa.id)}
                  onChange={() => handleEmpresaToggle(empresa.id)}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor={`empresa-${empresa.id}`} className="font-medium text-gray-700">
                  {empresa.nombre}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Beneficios de las empresas seleccionadas */}
      {empresasConBeneficios.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Beneficios incluidos</label>
          <div className="bg-gray-50 p-4 rounded-md">
            {empresasConBeneficios.map(empresa => (
              <div key={empresa.id} className="mb-4 last:mb-0">
                <h4 className="font-medium text-gray-800">{empresa.nombre}</h4>
                <ul className="mt-2 space-y-2">
                  {empresa.beneficios.filter(b => b.activo).map(beneficio => (
                    <li key={beneficio.id} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">
                        <strong>{beneficio.nombre}:</strong> {beneficio.descripcion}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Promociones adicionales */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Promociones adicionales</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {promocionesDisponibles.map(promocion => (
            <div key={promocion.id} className="flex items-start border rounded-md p-3">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id={`promocion-${promocion.id}`}
                  checked={formData.promociones.some(p => p.id === promocion.id)}
                  onChange={() => handlePromocionToggle(promocion)}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor={`promocion-${promocion.id}`} className="font-medium text-gray-700 block">
                  {promocion.titulo}
                </label>
                <p className="text-gray-500">{promocion.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Términos y condiciones */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Términos y condiciones</label>
        <textarea
          name="terminosCondiciones"
          value={formData.terminosCondiciones}
          onChange={handleInputChange}
          rows={4}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Describe los términos y condiciones específicos para este plan..."
        />
      </div>
      
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Guardar Plan
        </button>
      </div>
    </form>
  );
};

export default PlanForm;