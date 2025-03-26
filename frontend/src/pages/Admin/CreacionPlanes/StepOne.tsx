import React, { useState, useEffect } from "react";
import { PlanData } from "./CrearPlan";
import { FaSearch, FaBuilding } from "react-icons/fa";

interface Empresa {
  id: string;
  nombre: string;
  logo: string;
  descuento: number;
}

interface StepOneProps {
  planData: PlanData;
  updatePlanData: (data: Partial<PlanData>) => void;
}

const StepOne: React.FC<StepOneProps> = ({ planData, updatePlanData }) => {
  const [empresasDisponibles, setEmpresasDisponibles] = useState<Empresa[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmpresas, setFilteredEmpresas] = useState<Empresa[]>([]);

  // Simulamos obtener las empresas de una API
  useEffect(() => {
    // En un caso real, esto sería un fetch a tu API
    const mockEmpresas: Empresa[] = [
      { id: "1", nombre: "Café Runners", logo: "cafe.png", descuento: 15 },
      { id: "2", nombre: "Gym Power", logo: "gym.png", descuento: 20 },
      { id: "3", nombre: "Sports Wear", logo: "ropa.png", descuento: 10 },
      { id: "4", nombre: "Burger Run", logo: "burger.png", descuento: 25 },
      { id: "5", nombre: "Juguería Frutal", logo: "jugos.png", descuento: 15 },
      { id: "6", nombre: "Marathon Store", logo: "marathon.png", descuento: 20 },
    ];
    
    setEmpresasDisponibles(mockEmpresas);
    setFilteredEmpresas(mockEmpresas);
  }, []);

  useEffect(() => {
    const results = empresasDisponibles.filter(empresa =>
      empresa.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEmpresas(results);
  }, [searchTerm, empresasDisponibles]);

  const toggleEmpresa = (empresa: Empresa) => {
    const isSelected = planData.empresas.some(e => e.id === empresa.id);
    
    if (isSelected) {
      updatePlanData({
        empresas: planData.empresas.filter(e => e.id !== empresa.id)
      });
    } else {
      updatePlanData({
        empresas: [...planData.empresas, empresa]
      });
    }
  };

  const handleBasicInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    updatePlanData({ [name]: value });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Paso 1: Información básica y empresas asociadas</h2>
      
      {/* Información básica del plan */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Información básica</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre del Plan
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={planData.nombre}
              onChange={handleBasicInfoChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="precio" className="block text-sm font-medium text-gray-700 mb-1">
              Precio
            </label>
            <input
              type="number"
              id="precio"
              name="precio"
              value={planData.precio}
              onChange={handleBasicInfoChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="duracion" className="block text-sm font-medium text-gray-700 mb-1">
              Duración
            </label>
            <select
              id="duracion"
              name="duracion"
              value={planData.duracion}
              onChange={handleBasicInfoChange}
              className="w-full p-2 border rounded"
            >
              <option value="mensual">Mensual</option>
              <option value="anual">Anual</option>
            </select>
          </div>
          <div>
            <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de Plan
            </label>
            <select
              id="tipo"
              name="tipo"
              value={planData.tipo}
              onChange={handleBasicInfoChange}
              className="w-full p-2 border rounded"
            >
              <option value="basico">Básico</option>
              <option value="premium">Premium</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Selector de empresas */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Seleccionar Empresas</h3>
        
        {/* Buscador */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Buscar empresas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 pl-10 border rounded"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        
        {/* Lista de empresas */}
        <div className="max-h-64 overflow-y-auto border rounded p-2">
          {filteredEmpresas.length === 0 ? (
            <p className="text-center text-gray-500 py-4">No se encontraron empresas</p>
          ) : (
            filteredEmpresas.map(empresa => (
              <div 
                key={empresa.id}
                onClick={() => toggleEmpresa(empresa)}
                className={`flex items-center justify-between p-3 mb-2 rounded cursor-pointer ${
                  planData.empresas.some(e => e.id === empresa.id)
                    ? "bg-gray-200 border bg-gray-500"
                    : "bg-gray-50 hover:bg-gray-100 border"
                }`}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <FaBuilding className="text-gray-500" />
                  </div>
                  <div>
                    <p className="font-medium">{empresa.nombre}</p>
                    <p className="text-sm text-gray-600">Descuento: {empresa.descuento}%</p>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full border flex items-center justify-center">
                  {planData.empresas.some(e => e.id === empresa.id) && (
                    <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            Empresas seleccionadas: {planData.empresas.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepOne;