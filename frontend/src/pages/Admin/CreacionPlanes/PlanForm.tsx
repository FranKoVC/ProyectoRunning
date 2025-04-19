import React, { useState} from 'react';
import { PlanFormData, Empresa, Promocion, Beneficio } from './planTypes';
import { FaChevronDown, FaChevronUp, FaCheck } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface PlanFormProps {
  empresas: Empresa[];
  promocionesDisponibles: Promocion[];
  onSubmit: (formData: PlanFormData) => void;
  initialData?: Partial<PlanFormData>;
  isEditing?: boolean;
}

const PlanForm: React.FC<PlanFormProps> = ({ 
  empresas, 
  promocionesDisponibles, 
  onSubmit,
  initialData,
  isEditing = false
}) => {
  const [formData, setFormData] = useState<PlanFormData>({
    nombre: initialData?.nombre || '',
    precio: initialData?.precio || 0,
    duracion: initialData?.duracion || '1 mes',
    tipo: initialData?.tipo || 'basico',
    color: initialData?.color || '#3b82f6',
    empresasSeleccionadas: initialData?.empresasSeleccionadas || [],
    beneficiosSeleccionados: initialData?.beneficiosSeleccionados || [],
    promociones: initialData?.promociones || [],
    terminosCondiciones: initialData?.terminosCondiciones || ''
  });

  const [showEmpresasDropdown, setShowEmpresasDropdown] = useState(false);
  const [showPromocionesDropdown, setShowPromocionesDropdown] = useState(false);

  const colors = [
    '#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6',
    '#ec4899', '#14b8a6', '#f97316', '#6366f1', '#d946ef'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'precio' ? parseFloat(value) || 0 : value
    }));
  };

  const handleColorChange = (color: string) => {
    setFormData(prev => ({
      ...prev,
      color
    }));
  };

  const toggleEmpresaSelection = (empresaId: string) => {
    const isSelected = formData.empresasSeleccionadas.includes(empresaId);
    if (isSelected) {
      setFormData(prev => ({
        ...prev,
        empresasSeleccionadas: prev.empresasSeleccionadas.filter(id => id !== empresaId),
        beneficiosSeleccionados: prev.beneficiosSeleccionados.filter(b => 
          !empresas.find(e => e.id === empresaId)?.beneficios.some(be => be.id === b)
        )
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        empresasSeleccionadas: [...prev.empresasSeleccionadas, empresaId]
      }));
    }
  };

  const toggleBeneficioSelection = (beneficioId: string) => {
    const isSelected = formData.beneficiosSeleccionados.includes(beneficioId);
    if (isSelected) {
      setFormData(prev => ({
        ...prev,
        beneficiosSeleccionados: prev.beneficiosSeleccionados.filter(id => id !== beneficioId)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        beneficiosSeleccionados: [...prev.beneficiosSeleccionados, beneficioId]
      }));
    }
  };

  const togglePromocionSelection = (promocionId: string) => {
    const isSelected = formData.promociones.some(p => p.id === promocionId);
    if (isSelected) {
      setFormData(prev => ({
        ...prev,
        promociones: prev.promociones.filter(p => p.id !== promocionId)
      }));
    } else {
      const promocionToAdd = promocionesDisponibles.find(p => p.id === promocionId);
      if (promocionToAdd) {
        setFormData(prev => ({
          ...prev,
          promociones: [...prev.promociones, promocionToAdd]
        }));
      }
    }
  };

  const getActiveBenefitsForEmpresa = (empresaId: string): Beneficio[] => {
    const empresa = empresas.find(e => e.id === empresaId);
    return empresa ? empresa.beneficios.filter(b => b.activo) : [];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nombre del Plan */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre del Plan
          </label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Precio */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Precio (S/)
          </label>
          <input
            type="number"
            name="precio"
            value={formData.precio}
            onChange={handleInputChange}
            min="0"
            step="0.01"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Duración */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Duración
          </label>
          <select
            name="duracion"
            value={formData.duracion}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="1 mes">1 mes</option>
            <option value="2 meses">2 meses</option>
            <option value="3 meses">3 meses</option>
            <option value="anual">Anual</option>
          </select>
        </div>

        {/* Tipo de Plan */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de Plan
          </label>
          <select
            name="tipo"
            value={formData.tipo}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="basico">Básico</option>
            <option value="premium">Premium</option>
          </select>
        </div>

        {/* Color del Plan */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Color del Plan
          </label>
          <div className="flex flex-wrap gap-2">
            {colors.map(color => (
              <motion.div
                key={color}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleColorChange(color)}
                className={`w-8 h-8 rounded-full cursor-pointer flex items-center justify-center ${formData.color === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''}`}
                style={{ backgroundColor: color }}
              >
                {formData.color === color && <FaCheck className="text-white text-xs" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Empresas y Beneficios */}
      <div className="border-t border-gray-200 pt-4">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Empresas y Beneficios</h3>
        
        <div className="mb-4">
          <button
            type="button"
            onClick={() => setShowEmpresasDropdown(!showEmpresasDropdown)}
            className="flex justify-between items-center w-full px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            <span>Seleccionar Empresas ({formData.empresasSeleccionadas.length} seleccionadas)</span>
            {showEmpresasDropdown ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          
          <AnimatePresence>
            {showEmpresasDropdown && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 space-y-2 overflow-hidden"
              >
                {empresas.map(empresa => (
                  <div key={empresa.id} className="border rounded-md p-3">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id={`empresa-${empresa.id}`}
                        checked={formData.empresasSeleccionadas.includes(empresa.id)}
                        onChange={() => toggleEmpresaSelection(empresa.id)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`empresa-${empresa.id}`} className="ml-2 block text-sm font-medium text-gray-700">
                        {empresa.nombre}
                      </label>
                    </div>

                    {formData.empresasSeleccionadas.includes(empresa.id) && (
                      <div className="mt-2 ml-6 space-y-2">
                        <h4 className="text-sm font-medium text-gray-600">Beneficios Activos:</h4>
                        {getActiveBenefitsForEmpresa(empresa.id).length > 0 ? (
                          getActiveBenefitsForEmpresa(empresa.id).map(beneficio => (
                            <div key={beneficio.id} className="flex items-center">
                              <input
                                type="checkbox"
                                id={`beneficio-${beneficio.id}`}
                                checked={formData.beneficiosSeleccionados.includes(beneficio.id)}
                                onChange={() => toggleBeneficioSelection(beneficio.id)}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                              <label htmlFor={`beneficio-${beneficio.id}`} className="ml-2 block text-sm text-gray-700">
                                {beneficio.nombre} - {beneficio.descripcion}
                              </label>
                            </div>
                          ))
                        ) : (
                          <p className="text-sm text-gray-500">Esta empresa no tiene beneficios activos</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Promociones Extras */}
      <div className="border-t border-gray-200 pt-4">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Promociones Extras</h3>
        
        <button
          type="button"
          onClick={() => setShowPromocionesDropdown(!showPromocionesDropdown)}
          className="flex justify-between items-center w-full px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors mb-3"
        >
          <span>Seleccionar Promociones ({formData.promociones.length} seleccionadas)</span>
          {showPromocionesDropdown ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        
        <AnimatePresence>
          {showPromocionesDropdown && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-2 overflow-hidden"
            >
              {promocionesDisponibles.map(promocion => (
                <div key={promocion.id} className="border rounded-md p-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id={`promocion-${promocion.id}`}
                      checked={formData.promociones.some(p => p.id === promocion.id)}
                      onChange={() => togglePromocionSelection(promocion.id)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor={`promocion-${promocion.id}`} className="ml-2 block text-sm font-medium text-gray-700">
                      {promocion.titulo}
                    </label>
                  </div>
                  <p className="ml-6 text-sm text-gray-600">{promocion.descripcion}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Términos y Condiciones */}
      <div className="border-t border-gray-200 pt-4">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Términos y Condiciones</h3>
        <textarea
          name="terminosCondiciones"
          value={formData.terminosCondiciones}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ingrese los términos y condiciones del plan..."
        />
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.history.back()}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Cancelar
        </motion.button>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {isEditing ? 'Guardar Cambios' : 'Crear Plan'}
        </motion.button>
      </div>
    </form>
  );
};

export default PlanForm;