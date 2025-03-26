import React, { useState } from "react";
import { PlanData } from "./CrearPlan";
import { FaStar, FaPlus, FaTrash, FaEdit, FaSave, FaTimes } from "react-icons/fa";

interface Beneficio {
  id: string;
  titulo: string;
  descripcion: string;
  icono: string;
}

interface StepThreeProps {
  planData: PlanData;
  updatePlanData: (data: Partial<PlanData>) => void;
}

const StepThree: React.FC<StepThreeProps> = ({ planData, updatePlanData }) => {
  const [newBeneficio, setNewBeneficio] = useState<{titulo: string, descripcion: string}>({
    titulo: "",
    descripcion: ""
  });
  const [editingBeneficio, setEditingBeneficio] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<{titulo: string, descripcion: string}>({
    titulo: "",
    descripcion: ""
  });

  // Lista de iconos disponibles para beneficios
  const iconosDisponibles = [
    "estrella", "trofeo", "medalla", "regalo", "descuento", "calendario", "ticket", "corazon"
  ];
  const [selectedIcono, setSelectedIcono] = useState("estrella");

  const handleAddBeneficio = () => {
    if (newBeneficio.titulo.trim() === "" || newBeneficio.descripcion.trim() === "") {
      alert("Por favor completa todos los campos");
      return;
    }

    const nuevoBeneficio: Beneficio = {
      id: `ben-${Date.now()}`,
      titulo: newBeneficio.titulo,
      descripcion: newBeneficio.descripcion,
      icono: selectedIcono
    };

    updatePlanData({
      beneficios: [...planData.beneficios, nuevoBeneficio]
    });

    // Reset form
    setNewBeneficio({ titulo: "", descripcion: "" });
    setSelectedIcono("estrella");
  };

  const handleEditBeneficio = (beneficio: Beneficio) => {
    setEditingBeneficio(beneficio.id);
    setEditForm({
      titulo: beneficio.titulo,
      descripcion: beneficio.descripcion
    });
  };

  const handleSaveEdit = (id: string) => {
    if (editForm.titulo.trim() === "" || editForm.descripcion.trim() === "") {
      alert("Por favor completa todos los campos");
      return;
    }

    const updatedBeneficios = planData.beneficios.map(ben => 
      ben.id === id 
        ? { ...ben, titulo: editForm.titulo, descripcion: editForm.descripcion } 
        : ben
    );

    updatePlanData({ beneficios: updatedBeneficios });
    setEditingBeneficio(null);
  };

  const handleCancelEdit = () => {
    setEditingBeneficio(null);
  };

  const handleDeleteBeneficio = (id: string) => {
    updatePlanData({
      beneficios: planData.beneficios.filter(ben => ben.id !== id)
    });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Paso 3: Configuración de beneficios</h2>
      
      {/* Formulario para agregar beneficio */}
      <div className="p-4 mb-4 border rounded bg-gray-50">
        <h3 className="text-lg font-semibold mb-2">Agregar Nuevo Beneficio</h3>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="titulo-beneficio" className="block text-sm font-medium text-gray-700 mb-1">
              Título
            </label>
            <input
              type="text"
              id="titulo-beneficio"
              value={newBeneficio.titulo}
              onChange={(e) => setNewBeneficio({...newBeneficio, titulo: e.target.value})}
              className="w-full p-2 border rounded"
              placeholder="Ej: Acceso VIP a eventos"
            />
          </div>
          <div>
            <label htmlFor="descripcion-beneficio" className="block text-sm font-medium text-gray-700 mb-1">
              Descripción
            </label>
            <textarea
              id="descripcion-beneficio"
              value={newBeneficio.descripcion}
              onChange={(e) => setNewBeneficio({...newBeneficio, descripcion: e.target.value})}
              className="w-full p-2 border rounded"
              rows={2}
              placeholder="Breve descripción del beneficio"
            />
          </div>
          
          <button
            onClick={handleAddBeneficio}
            className="flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            <FaPlus className="mr-2" /> Agregar Beneficio
          </button>
        </div>
      </div>
      
      {/* Lista de beneficios */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Beneficios del Plan</h3>
        
        {planData.beneficios.length === 0 ? (
          <p className="text-center text-gray-500 py-4 border rounded">No hay beneficios agregados</p>
        ) : (
          <div className="space-y-3 max-h-64 overflow-y-auto border rounded p-3">
            {planData.beneficios.map(beneficio => (
              <div 
                key={beneficio.id}
                className="p-3 border rounded bg-white"
              >
                {editingBeneficio === beneficio.id ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={editForm.titulo}
                      onChange={(e) => setEditForm({...editForm, titulo: e.target.value})}
                      className="w-full p-2 border rounded"
                    />
                    <textarea
                      value={editForm.descripcion}
                      onChange={(e) => setEditForm({...editForm, descripcion: e.target.value})}
                      className="w-full p-2 border rounded"
                      rows={2}
                    />
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleSaveEdit(beneficio.id)}
                        className="flex items-center px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                      >
                        <FaSave className="mr-1" /> Guardar
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="flex items-center px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600"
                      >
                        <FaTimes className="mr-1" /> Cancelar
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">
                        <FaStar className="text-red-500" />
                      </div>
                      <h4 className="font-semibold">{beneficio.titulo}</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{beneficio.descripcion}</p>
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleEditBeneficio(beneficio)}
                        className="flex items-center px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
                      >
                        <FaEdit className="mr-1" /> Editar
                      </button>
                      <button
                        onClick={() => handleDeleteBeneficio(beneficio.id)}
                        className="flex items-center px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
                      >
                        <FaTrash className="mr-1" /> Eliminar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StepThree;