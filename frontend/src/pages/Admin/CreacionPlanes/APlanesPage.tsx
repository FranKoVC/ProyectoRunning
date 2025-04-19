import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { FaPlus, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import CrearPlanModal from "./CrearPlanModal";
import VerPlanModal from "./VerPlanModal";
import EditarPlanModal from "./EditarPlanModal";
import { AnimatePresence } from "framer-motion";

export interface Beneficio {
  id: string;
  nombre: string;
  descripcion: string;
  empresaId: string;
  activo: boolean;
}

export interface Empresa {
  id: string;
  nombre: string;
  beneficios: Beneficio[];
}

export interface Promocion {
  id: string;
  titulo: string;
  descripcion: string;
}

export interface Plan {
  id: string;
  nombre: string;
  precio: number;
  duracion: "1 mes" | "2 meses" | "3 meses" | "anual";
  tipo: "basico" | "premium";
  color: string;
  empresas: Empresa[];
  promociones: Promocion[];
  terminosCondiciones: string;
  activo: boolean;
}

export interface PlanFormData {
  nombre: string; 
  precio: number;
  duracion: "1 mes" | "2 meses" | "3 meses" | "anual";
  tipo: "basico" | "premium";
  color: string;
  empresasSeleccionadas: string[];
  promociones: Promocion[];
  terminosCondiciones: string;
}

const APlanesPage: React.FC = () => {
  const [planes, setPlanes] = useState<Plan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCrearModal, setShowCrearModal] = useState(false);
  const [planToView, setPlanToView] = useState<Plan | null>(null);
  const [planToEdit, setPlanToEdit] = useState<Plan | null>(null);
  
  // Datos de ejemplo para empresas
  const [empresas] = useState<Empresa[]>([
    {
      id: "1",
      nombre: "Club TTT",
      beneficios: [
        { id: "1-1", nombre: "Descuento en bebidas", descripcion: "20% de descuento en todas las bebidas", empresaId: "1", activo: true },
        { id: "1-2", nombre: "Entrada gratis", descripcion: "1 entrada gratis los jueves", empresaId: "1", activo: true },
      ]
    },
    {
      id: "2",
      nombre: "QORE WELLNESS LAB",
      beneficios: [
        { id: "2-1", nombre: "Clase gratis", descripcion: "1 clase de yoga al mes", empresaId: "2", activo: true },
        { id: "2-2", nombre: "Descuento membresía", descripcion: "15% de descuento en membresía anual", empresaId: "2", activo: false },
      ]
    },
    {
      id: "3",
      nombre: "CAFFEINE",
      beneficios: [
        { id: "3-1", nombre: "Café gratis", descripcion: "1 café gratis por semana", empresaId: "3", activo: true },
        { id: "3-2", nombre: "Descuento en pasteles", descripcion: "10% de descuento en pasteles", empresaId: "3", activo: true },
      ]
    },
  ]);

  const [promocionesDisponibles] = useState<Promocion[]>([
    { id: "1", titulo: "Sorteo mensual", descripcion: "Participa en un sorteo mensual por tu suscripción" },
    { id: "2", titulo: "Beneficio extra", descripcion: "Obtén un beneficio exclusivo cada 3 meses" },
    { id: "3", titulo: "Descuento anual", descripcion: "10% de descuento al renovar tu plan anual" },
  ]);

  useEffect(() => {
    // Simulación de carga de datos desde API
    setTimeout(() => {
      const mockPlanes: Plan[] = [
        {
          id: "1",
          nombre: "Plan Básico Mensual",
          precio: 40,
          duracion: "1 mes",
          tipo: "basico",
          color: "#e02424",
          empresas: [empresas[0], empresas[1]],
          promociones: [promocionesDisponibles[0]],
          terminosCondiciones: "Este plan incluye acceso a beneficios básicos por un mes. No incluye promociones especiales.",
          activo: true
        },
        {
          id: "2",
          nombre: "Plan Premium Anual",
          precio: 360,
          duracion: "anual",
          tipo: "premium",
          color: "#1e40af",
          empresas: empresas,
          promociones: promocionesDisponibles,
          terminosCondiciones: "Plan premium con acceso a todos los beneficios y promociones especiales por un año completo.",
          activo: true
        },
        {
          id: "3",
          nombre: "Plan Intermedio Trimestral",
          precio: 100,
          duracion: "3 meses",
          tipo: "basico",
          color: "#10b981",
          empresas: [empresas[0], empresas[2]],
          promociones: [promocionesDisponibles[1]],
          terminosCondiciones: "Plan de 3 meses con acceso a beneficios seleccionados y una promoción especial.",
          activo: false
        },
      ];
      
      setPlanes(mockPlanes);
      setIsLoading(false);
    }, 800);
  }, []);

  const handleToggleActivation = (id: string) => {
    setPlanes(planes.map(plan => 
      plan.id === id ? { ...plan, activo: !plan.activo } : plan
    ));
  };

  const handleDeletePlan = (id: string) => {
    if (window.confirm("¿Estás seguro que deseas eliminar este plan?")) {
      setPlanes(planes.filter(plan => plan.id !== id));
    }
  };

  const handleCreatePlan = (nuevoPlan: Plan) => {
    setPlanes([...planes, nuevoPlan]);
    setShowCrearModal(false);
  };

  const handleUpdatePlan = (planActualizado: Plan) => {
    setPlanes(planes.map(p => p.id === planActualizado.id ? planActualizado : p));
    setPlanToEdit(null);
  };

  // Función para contar empresas, promociones y beneficios activos
  const getCountsForPlan = (plan: Plan) => {
    const empresasCount = plan.empresas.length;
    const promocionesCount = plan.promociones.length;
    const beneficiosCount = plan.empresas.reduce(
      (total, empresa) => total + empresa.beneficios.filter(b => b.activo).length,
      0
    );
    
    return { empresasCount, promocionesCount, beneficiosCount };
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-8 relative">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Gestión de Planes</h1>
            <button
              onClick={() => setShowCrearModal(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              <FaPlus className="mr-2" /> Crear Nuevo Plan
            </button>
          </div>

          {isLoading ? (
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <p className="text-gray-600">Cargando planes...</p>
            </div>
          ) : planes.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <p className="text-gray-600 mb-4">No hay planes disponibles</p>
              <button
                onClick={() => setShowCrearModal(true)}
                className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
              >
                <FaPlus className="mr-2" /> Crear Primer Plan
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Plan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Precio
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tipo
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Detalles
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {planes.map((plan) => {
                    const { empresasCount, promocionesCount, beneficiosCount } = getCountsForPlan(plan);
                    
                    return (
                      <tr key={plan.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div 
                              className="w-10 h-10 rounded-full mr-3"
                              style={{ backgroundColor: plan.color }}
                            />
                            <div>
                              <div className="font-medium text-gray-900">{plan.nombre}</div>
                              <div className="text-sm text-gray-500 capitalize">
                                {plan.duracion}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">S/ {plan.precio}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            plan.tipo === "premium" 
                              ? "bg-indigo-100 text-indigo-800" 
                              : "bg-gray-100 text-gray-800"
                          }`}>
                            {plan.tipo === "premium" ? "Premium" : "Básico"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div>{empresasCount} empresas</div>
                          <div>{promocionesCount} promociones</div>
                          <div>{beneficiosCount} beneficios</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => handleToggleActivation(plan.id)}
                            className={`px-2 py-1 text-xs rounded ${
                              plan.activo
                                ? "bg-green-100 text-green-800 hover:bg-green-200"
                                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                            }`}
                          >
                            {plan.activo ? "Activo" : "Inactivo"}
                          </button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button
                              onClick={() => setPlanToView(plan)}
                              className="text-gray-600 hover:text-gray-900 transition-colors"
                              title="Ver"
                            >
                              <FaEye />
                            </button>
                            <button
                              onClick={() => setPlanToEdit(plan)}
                              className="text-blue-600 hover:text-blue-900 transition-colors"
                              title="Editar"
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => handleDeletePlan(plan.id)}
                              className="text-red-600 hover:text-red-900 transition-colors"
                              title="Eliminar"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <Footer />

      {/* Modales - Ahora son overlays dentro del mismo contenedor */}
    <AnimatePresence>
      {showCrearModal && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
          <CrearPlanModal
            isOpen={showCrearModal}
            onClose={() => setShowCrearModal(false)}
            onPlanCreated={handleCreatePlan}
            empresas={empresas}
            promocionesDisponibles={promocionesDisponibles}
          />
        </div>
      )}
    </AnimatePresence>

    <AnimatePresence>
      {planToView && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
          <VerPlanModal
            plan={planToView}
            onClose={() => setPlanToView(null)}
          />
        </div>
      )}
    </AnimatePresence>

    <AnimatePresence>
      {planToEdit && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
          <EditarPlanModal
            plan={planToEdit}
            onClose={() => setPlanToEdit(null)}
            onPlanUpdated={handleUpdatePlan}
            empresas={empresas}
            promocionesDisponibles={promocionesDisponibles}
          />
        </div>
      )}
    </AnimatePresence>
    </>
  );
};

export default APlanesPage;