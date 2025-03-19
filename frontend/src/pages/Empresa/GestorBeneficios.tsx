import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

interface Beneficio {
  id: string;
  nombre: string;
  nombreEmpresa: string;
  categoriaEmpresa: string;
  descripcion: string;
}

const beneficiosEjemplo: Beneficio[] = [
  { id: "1", nombre: "25% descuento", nombreEmpresa: "Loco Burguer", categoriaEmpresa: "Hamburguesería", descripcion: "25% de descuento en hamburguesas regulares" },
  { id: "2", nombre: "2x1 en bebidas", nombreEmpresa: "Loco Burguer", categoriaEmpresa: "Hamburguesería", descripcion: "2x1 en bebidas todos los jueves" },
  { id: "3", nombre: "La 2da haburguesa a 1 sol", nombreEmpresa: "Loco Burguer", categoriaEmpresa: "Hamburguesería", descripcion: "Valido todos los lunes" }
];

const GestionBeneficios: React.FC = () => {
  const navigate = useNavigate();
  const [modo, setModo] = useState<'seleccion' | 'agregar' | 'editar'>('seleccion');
  const [beneficioSeleccionado, setBeneficioSeleccionado] = useState<string>('');
  const [beneficio, setBeneficio] = useState<Beneficio>({
    id: '',
    nombre: '',
    nombreEmpresa: 'Loco Burguer',
    categoriaEmpresa: 'Hamburguesería',
    descripcion: ''
  });

  useEffect(() => {
    if (modo === 'editar' && beneficioSeleccionado) {
      const beneficioEncontrado = beneficiosEjemplo.find(b => b.id === beneficioSeleccionado);
      if (beneficioEncontrado) setBeneficio(beneficioEncontrado);
    }
  }, [modo, beneficioSeleccionado]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBeneficio(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setBeneficio({
      id: '',
      nombre: '',
      nombreEmpresa: 'Loco Burguer',
      categoriaEmpresa: 'Hamburguesería',
      descripcion: ''
    });
    setBeneficioSeleccionado('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Beneficio ${modo === 'editar' ? 'actualizado' : 'creado'} con éxito.`);
    resetForm();
    navigate('/empresa/egestorbeneficio');
  };

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto p-6 min-h-screen">
        {modo === 'seleccion' && (
          <>
            <h1 className="text-2xl font-bold mb-6 text-blue-800">¿Qué desea hacer?</h1>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded w-full mb-4" onClick={() => setModo('agregar')}>
                Agregar Nuevo Beneficio
              </button>
              <button className="bg-green-500 text-white py-2 px-4 rounded w-full" onClick={() => setModo('editar')}>
                Editar Beneficio Existente
              </button>
            </div>
          </>
        )}

        {(modo === 'agregar' || modo === 'editar') && (
          <>
            <h1 className="text-2xl font-bold mb-6 text-blue-800">{modo === 'editar' ? 'Editar Beneficio' : 'Agregar Nuevo Beneficio'}</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              {modo === 'editar' && (
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="beneficioSeleccionado">Seleccionar Beneficio</label>
                  <select id="beneficioSeleccionado" name="beneficioSeleccionado" className="shadow border rounded w-full py-2 px-3 text-gray-700" value={beneficioSeleccionado} onChange={e => setBeneficioSeleccionado(e.target.value)}>
                    <option value="">Seleccione un beneficio</option>
                    {beneficiosEjemplo.map(b => (
                      <option key={b.id} value={b.id}>{b.nombre}</option>
                    ))}
                  </select>
                </div>
              )}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre del Beneficio *</label>
                <input className="shadow border rounded w-full py-2 px-3 text-gray-700" id="nombre" name="nombre" type="text" value={beneficio.nombre} onChange={handleChange} required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Nombre de la Empresa</label>
                <input className="shadow border rounded w-full py-2 px-3 text-gray-700 bg-gray-100" type="text" value={beneficio.nombreEmpresa} readOnly />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Categoría de la Empresa</label>
                <input className="shadow border rounded w-full py-2 px-3 text-gray-700 bg-gray-100" type="text" value={beneficio.categoriaEmpresa} readOnly />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">Descripción del Beneficio *</label>
                <textarea className="shadow border rounded w-full py-2 px-3 text-gray-700" id="descripcion" name="descripcion" rows={4} value={beneficio.descripcion} onChange={handleChange} required />
              </div>
              <div className="flex justify-between">
                <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">{modo === 'editar' ? 'Actualizar Beneficio' : 'Crear Beneficio'}</button>
                <button className="bg-red-500 text-white py-2 px-4 rounded" type="button" onClick={() => { setModo('seleccion'); resetForm(); }}>Cancelar</button>
              </div>
            </form>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default GestionBeneficios;

