import React, { useState, useEffect } from 'react';
import { Beneficio, Empresa } from '../pages/Empresa/AdminBeneficios';
import PreviewBeneficio from './PreviewBeneficio';

interface FormularioBeneficioProps {
  empresas: Empresa[];
  beneficio: Beneficio | null;
  onSubmit: (beneficio: Beneficio) => void;
  onCancel: () => void;
  modo: 'crear' | 'editar';
}

const FormularioBeneficio: React.FC<FormularioBeneficioProps> = ({ 
  empresas, 
  beneficio, 
  onSubmit, 
  onCancel,
  modo
}) => {
  const beneficioVacio: Beneficio = {
    id: '',
    titulo: '',
    porcentajeDescuento: 0,
    descripcion: '',
    terminosCondiciones: '',
    imagenUrl: '',
    empresaId: '',
    nombreEmpresa: '',
    categoriaEmpresa: ''
  };

  const [formData, setFormData] = useState<Beneficio>(beneficio || beneficioVacio);
  const [archivoSeleccionado, setArchivoSeleccionado] = useState<File | null>(null);
  const [previewImagen, setPreviewImagen] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [showPreview, setShowPreview] = useState<boolean>(false);

  // Actualizar el formulario cuando cambia el beneficio seleccionado
  useEffect(() => {
    if (beneficio) {
      setFormData(beneficio);
      setPreviewImagen(beneficio.imagenUrl);
    } else {
      setFormData(beneficioVacio);
      setPreviewImagen('');
    }
  }, [beneficio]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Convertir a número cuando sea necesario
    if (name === 'porcentajeDescuento') {
      const numeroValor = parseFloat(value);
      setFormData(prev => ({ ...prev, [name]: isNaN(numeroValor) ? 0 : numeroValor }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Si cambia la empresa, actualizar los valores relacionados
    if (name === 'empresaId') {
      const empresaSeleccionada = empresas.find(e => e.id === value);
      if (empresaSeleccionada) {
        setFormData(prev => ({
          ...prev,
          empresaId: value,
          nombreEmpresa: empresaSeleccionada.nombre,
          categoriaEmpresa: empresaSeleccionada.categoria
        }));
      }
    }
  };

  const handleImagenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const archivo = e.target.files && e.target.files[0];
    if (archivo) {
      setArchivoSeleccionado(archivo);
      
      // Crear una URL temporal para previsualizar la imagen
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        if (e.target && e.target.result) {
          setPreviewImagen(e.target.result as string);
          
          // En un caso real, aquí subiríamos la imagen a un servidor
          // y obtendríamos la URL real
          setFormData(prev => ({
            ...prev,
            imagenUrl: e.target && e.target.result ? (e.target.result as string) : ''
          }));
        }
      };
      fileReader.readAsDataURL(archivo);
    }
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar campos requeridos
    if (!formData.empresaId) {
      setError('Debe seleccionar una empresa');
      return;
    }
    
    if (!formData.titulo) {
      setError('Debe ingresar un título para el beneficio');
      return;
    }
    
    if (formData.porcentajeDescuento <= 0 || formData.porcentajeDescuento > 100) {
      setError('El porcentaje de descuento debe ser mayor a 0 y menor o igual a 100');
      return;
    }
    
    // Simular carga de imagen (en un caso real esto sería una llamada a la API)
    if (archivoSeleccionado && !formData.imagenUrl) {
      setFormData(prev => ({
        ...prev,
        imagenUrl: `/images/${archivoSeleccionado.name}`
      }));
    }
    
    // Enviar datos al componente padre
    onSubmit(formData);
    
    // Limpiar formulario
    setFormData(beneficioVacio);
    setArchivoSeleccionado(null);
    setPreviewImagen('');
    setError('');
    setShowPreview(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Formulario (2/3 del ancho en pantallas grandes) */}
      <div className="lg:col-span-2">
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              {modo === 'crear' ? 'Crear Nuevo Beneficio' : 'Editar Beneficio'}
            </h2>
            <button 
              type="button"
              onClick={togglePreview}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
            >
              {showPreview ? 'Ocultar Vista Previa' : 'Mostrar Vista Previa'}
            </button>
          </div>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            {/* Paso 1: Selección de empresa */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="empresaId">
                Empresa *
              </label>
              <select
                id="empresaId"
                name="empresaId"
                value={formData.empresaId}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Seleccione una empresa</option>
                {empresas.map(empresa => (
                  <option key={empresa.id} value={empresa.id}>
                    {empresa.nombre} - {empresa.categoria}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Paso 2: Título del beneficio */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="titulo">
                Título del Beneficio *
              </label>
              <input
                id="titulo"
                name="titulo"
                type="text"
                value={formData.titulo}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Ej: 25% descuento en hamburguesas"
                required
              />
            </div>
            
            {/* Paso 3: Porcentaje de descuento */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="porcentajeDescuento">
                Porcentaje de Descuento *
              </label>
              <input
                id="porcentajeDescuento"
                name="porcentajeDescuento"
                type="number"
                min="0"
                max="100"
                value={formData.porcentajeDescuento}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            
            {/* Paso 4: Descripción del beneficio */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">
                Descripción del Beneficio *
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                rows={3}
                value={formData.descripcion}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Breve descripción del beneficio"
                required
              />
            </div>
            
            {/* Paso 5: Términos y condiciones */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="terminosCondiciones">
                Términos y Condiciones *
              </label>
              <textarea
                id="terminosCondiciones"
                name="terminosCondiciones"
                rows={4}
                value={formData.terminosCondiciones}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Detalles importantes sobre el uso del beneficio"
                required
              />
            </div>
            
            {/* Paso 6: Subir imagen */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen">
                Imagen del Beneficio
              </label>
              <input
                id="imagen"
                name="imagen"
                type="file"
                accept="image/*"
                onChange={handleImagenChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              
              {/* Previsualización de la imagen */}
              {previewImagen && (
                <div className="mt-3">
                  <p className="text-sm text-gray-600 mb-1">Vista previa de la imagen:</p>
                  <img 
                    src={previewImagen} 
                    alt="Vista previa" 
                    className="h-32 w-auto object-contain border"
                  />
                </div>
              )}
            </div>
            
            {/* Botones de acción */}
            <div className="flex justify-end space-x-4 mt-6">
              <button
                type="button"
                onClick={onCancel}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg transition duration-300"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300"
              >
                {modo === 'crear' ? 'Crear Beneficio' : 'Actualizar Beneficio'}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Vista previa (1/3 del ancho en pantallas grandes) */}
      {showPreview && (
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <h3 className="text-lg font-medium mb-3 text-gray-700">Vista Previa</h3>
            <PreviewBeneficio beneficio={formData} />
          </div>
        </div>
      )}
      
      {/* Vista previa en pantallas pequeñas (solo visible cuando se activa) */}
      {showPreview && (
        <div className="lg:hidden mt-4">
          <h3 className="text-lg font-medium mb-3 text-gray-700">Vista Previa</h3>
          <PreviewBeneficio beneficio={formData} />
        </div>
      )}
    </div>
  );
};

export default FormularioBeneficio;