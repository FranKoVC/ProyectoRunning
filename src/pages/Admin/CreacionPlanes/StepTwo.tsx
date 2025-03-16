import React, { useState, useEffect } from "react";
import { PlanData } from "./CrearPlan";
import { FaSearch, FaGift, FaPlus, FaTimes } from "react-icons/fa";

interface Promocion {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
}

interface StepTwoProps {
  planData: PlanData;
  updatePlanData: (data: Partial<PlanData>) => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ planData, updatePlanData }) => {
  const [promocionesDisponibles, setPromocionesDisponibles] = useState<Promocion[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPromociones, setFilteredPromociones] = useState<Promocion[]>([]);
  const [newPromocion, setNewPromocion] = useState<{titulo: string, descripcion: string}>({
    titulo: "",
    descripcion: ""
  });
  const [showNewPromocionForm, setShowNewPromocionForm] = useState(false);

  // Simulamos obtener las promociones de una API
  useEffect(() => {
    // En un caso real, esto sería un fetch a tu API
    const mockPromociones: Promocion[] = [
      { id: "1", titulo: "Descuento primer mes", descripcion: "50% de descuento en el primer mes de suscripción", imagen: "discount.png" },
      { id: "2", titulo: "2x1 en Café Runners", descripcion: "Obtén dos bebidas por el precio de una", imagen: "cafe.png" },
      { id: "3", titulo: "Semana gratis en Gym Power", descripcion: "Una semana de acceso gratuito al gimnasio", imagen: "gym.png" },
      { id: "4", titulo: "Sorteo mensual", descripcion: "Participa en el sorteo mensual de equipamiento deportivo", imagen: "sorteo.png" },
      { id: "5", titulo: "Envío gratis en Sports Wear", descripcion: "Envío gratuito en compras superiores a $50", imagen: "shipping.png" },
      { id: "6", titulo: "Cumpleaños", descripcion: "Postre gratis en Burger Run en tu cumpleaños", imagen: "birthday.png" },
    ];
    
    setPromocionesDisponibles(mockPromociones);
    setFilteredPromociones(mockPromociones);
  }, []);

  useEffect(() => {
    const results = promocionesDisponibles.filter(promocion =>
      promocion.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      promocion.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPromociones(results);
  }, [searchTerm, promocionesDisponibles]);

  const togglePromocion = (promocion: Promocion) => {
    const isSelected = planData.promociones.some(p => p.id === promocion.id);
    
    if (isSelected) {
      updatePlanData({
        promociones: planData.promociones.filter(p => p.id !== promocion.id)
      });
    } else {
      updatePlanData({
        promociones: [...planData.promociones, promocion]
      });
    }
  };

  const handleCreatePromocion = () => {
    if (newPromocion.titulo.trim() === "" || newPromocion.descripcion.trim() === "") {
      alert("Por favor completa todos los campos");
      return;
    }

    const newPromocionObj: Promocion = {
      id: `new-${Date.now()}`,
      titulo: newPromocion.titulo,
      descripcion: newPromocion.descripcion,
      imagen: "new-promo.png"
    };

    setPromocionesDisponibles([...promocionesDisponibles, newPromocionObj]);
    setFilteredPromociones([...filteredPromociones, newPromocionObj]);
    updatePlanData({
      promociones: [...planData.promociones, newPromocionObj]
    });

    // Reset form
    setNewPromocion({ titulo: "", descripcion: "" });
    setShowNewPromocionForm(false);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Paso 2: Selección de promociones y sorteos</h2>
      
      {/* Acciones */}
      <div className="flex justify-between mb-4">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Buscar promociones..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 pl-10 border rounded"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        
        <button
          onClick={() => setShowNewPromocionForm(!showNewPromocionForm)}
          className="flex items-center px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          {showNewPromocionForm ? <FaTimes className="mr-2" /> : <FaPlus className="mr-2" />}
          {showNewPromocionForm ? "Cancelar" : "Nueva Promoción"}
        </button>
      </div>
      
      {/* Formulario para nueva promoción */}
      {showNewPromocionForm && (
        <div className="p-4 mb-4 border rounded bg-gray-50">
          <h3 className="text-lg font-semibold mb-2">Crear Nueva Promoción</h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-1">
                Título
              </label>
              <input
                type="text"
                id="titulo"
                value={newPromocion.titulo}
                onChange={(e) => setNewPromocion({...newPromocion, titulo: e.target.value})}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-1">
                Descripción
              </label>
              <textarea
                id="descripcion"
                value={newPromocion.descripcion}
                onChange={(e) => setNewPromocion({...newPromocion, descripcion: e.target.value})}
                className="w-full p-2 border rounded"
                rows={3}
              />
            </div>
            <button
              onClick={handleCreatePromocion}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Crear Promoción
            </button>
          </div>
        </div>
      )}
      
      {/* Lista de promociones */}
      <div className="max-h-64 overflow-y-auto border rounded p-2">
        {filteredPromociones.length === 0 ? (
          <p className="text-center text-gray-500 py-4">No se encontraron promociones</p>
        ) : (
          filteredPromociones.map(promocion => (
            <div 
              key={promocion.id}
              onClick={() => togglePromocion(promocion)}
              className={`flex items-center justify-between p-3 mb-2 rounded cursor-pointer ${
                planData.promociones.some(p => p.id === promocion.id)
                  ? "bg-red-100 border border-red-300"
                  : "bg-gray-50 hover:bg-gray-100 border"
              }`}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <FaGift className="text-gray-500" />
                </div>
                <div>
                  <p className="font-medium">{promocion.titulo}</p>
                  <p className="text-sm text-gray-600">{promocion.descripcion}</p>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full border flex items-center justify-center">
                {planData.promociones.some(p => p.id === promocion.id) && (
                  <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
      
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          Promociones seleccionadas: {planData.promociones.length}
        </p>
      </div>
    </div>
  );
};

export default StepTwo;