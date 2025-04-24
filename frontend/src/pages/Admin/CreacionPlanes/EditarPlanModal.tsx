import React, { useState, useEffect } from "react";
import { Plan, PlanFormData, Empresa, Beneficio, Promocion } from "./planTypes";
import { FaTimes, FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface EditarPlanModalProps {
  plan: Plan | null;
  onClose: () => void;
  onPlanUpdated: (plan: Plan) => void;
  empresas: Empresa[];
  promocionesDisponibles: Promocion[];
}

const EditarPlanModal: React.FC<EditarPlanModalProps> = ({
  plan,
  onClose,
  onPlanUpdated,
  empresas,
  promocionesDisponibles,
}) => {
  const [formData, setFormData] = useState<PlanFormData>({
    nombre: "",
    precio: 0,
    duracion: "1 mes",
    tipo: "basico",
    color: "#3b82f6",
    empresasSeleccionadas: [],
    beneficiosSeleccionados: [],
    promociones: [],
    terminosCondiciones: "",
  });

  const [showEmpresasDropdown, setShowEmpresasDropdown] = useState(false);
  const [showPromocionesDropdown, setShowPromocionesDropdown] = useState(false);

  useEffect(() => {
    if (plan) {
      const beneficiosSeleccionados = plan.empresas
        .flatMap(e => e.beneficios.map(b => b.id));
      
      setFormData({
        nombre: plan.nombre,
        precio: plan.precio,
        duracion: plan.duracion,
        tipo: plan.tipo,
        color: plan.color,
        empresasSeleccionadas: plan.empresas.map(e => e.id),
        beneficiosSeleccionados,
        promociones: [...plan.promociones],
        terminosCondiciones: plan.terminosCondiciones,
      });
    }
  }, [plan]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "precio" ? parseFloat(value) : value,
    });
  };

  const handleColorChange = (color: string) => {
    setFormData({
      ...formData,
      color,
    });
  };

  const toggleEmpresaSelection = (empresaId: string) => {
    const isSelected = formData.empresasSeleccionadas.includes(empresaId);
    if (isSelected) {
      setFormData({
        ...formData,
        empresasSeleccionadas: formData.empresasSeleccionadas.filter(id => id !== empresaId),
        beneficiosSeleccionados: formData.beneficiosSeleccionados.filter(b => 
          !empresas.find(e => e.id === empresaId)?.beneficios.some(be => be.id === b)
        ),
      });
    } else {
      setFormData({
        ...formData,
        empresasSeleccionadas: [...formData.empresasSeleccionadas, empresaId],
      });
    }
  };

  const toggleBeneficioSelection = (beneficioId: string) => {
    const isSelected = formData.beneficiosSeleccionados.includes(beneficioId);
    if (isSelected) {
      setFormData({
        ...formData,
        beneficiosSeleccionados: formData.beneficiosSeleccionados.filter(id => id !== beneficioId),
      });
    } else {
      setFormData({
        ...formData,
        beneficiosSeleccionados: [...formData.beneficiosSeleccionados, beneficioId],
      });
    }
  };

  const togglePromocionSelection = (promocionId: string) => {
    const isSelected = formData.promociones.some(p => p.id === promocionId);
    if (isSelected) {
      setFormData({
        ...formData,
        promociones: formData.promociones.filter(p => p.id !== promocionId),
      });
    } else {
      const promocionToAdd = promocionesDisponibles.find(p => p.id === promocionId);
      if (promocionToAdd) {
        setFormData({
          ...formData,
          promociones: [...formData.promociones, promocionToAdd],
        });
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!plan) return;

    const empresasSeleccionadasData = empresas.filter(e => 
      formData.empresasSeleccionadas.includes(e.id)
    ).map(empresa => ({
      ...empresa,
      beneficios: empresa.beneficios.filter(b => 
        formData.beneficiosSeleccionados.includes(b.id)
      ),
    }));

    const planActualizado: Plan = {
      ...plan,
      nombre: formData.nombre,
      precio: formData.precio,
      duracion: formData.duracion,
      tipo: formData.tipo,
      color: formData.color,
      empresas: empresasSeleccionadasData,
      promociones: formData.promociones,
      terminosCondiciones: formData.terminosCondiciones,
    };

    onPlanUpdated(planActualizado);
    onClose();
  };

  const getActiveBenefitsForEmpresa = (empresaId: string): Beneficio[] => {
    const empresa = empresas.find(e => e.id === empresaId);
    return empresa ? empresa.beneficios.filter(b => b.activo) : [];
  };

  const colors = [
    "#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6", 
    "#ec4899", "#14b8a6", "#f97316", "#6366f1", "#d946ef"
  ];

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
            <h2 className="text-2xl font-bold text-gray-800">Editar Plan</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Color del Plan
                </label>
                <div className="flex flex-wrap gap-2">
                  {colors.map(color => (
                    <div
                      key={color}
                      onClick={() => handleColorChange(color)}
                      className={`w-8 h-8 rounded-full cursor-pointer flex items-center justify-center ${formData.color === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''}`}
                      style={{ backgroundColor: color }}
                    >
                      {formData.color === color && <FaCheck className="text-white text-xs" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Empresas y Beneficios</h3>
              
              <div className="mb-4">
                <button
                  type="button"
                  onClick={() => setShowEmpresasDropdown(!showEmpresasDropdown)}
                  className="flex justify-between items-center w-full px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  <span>Seleccionar Empresas</span>
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
                      {empresas
                      .slice()
                      .sort((a, b) => a.nombre.localeCompare(b.nombre))
                      .map(empresa => (
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

            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Promociones Extras</h3>
              
              <button
                type="button"
                onClick={() => setShowPromocionesDropdown(!showPromocionesDropdown)}
                className="flex justify-between items-center w-full px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors mb-3"
              >
                <span>Seleccionar Promociones</span>
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
                    {promocionesDisponibles
                      .slice()
                      .sort((a, b) => a.titulo.localeCompare(b.titulo))
                      .map(promocion => (
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
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      </motion.div>
  );
};

export default EditarPlanModal;