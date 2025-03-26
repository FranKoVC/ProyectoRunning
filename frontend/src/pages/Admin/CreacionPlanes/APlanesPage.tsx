import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { FaPlus, FaEdit, FaTrash, FaEye } from "react-icons/fa";

interface Plan {
  id: string;
  nombre: string;
  precio: number;
  duracion: "mensual" | "anual";
  tipo: "basico" | "premium";
  color: string;
  empresasCount: number;
  promocionesCount: number;
  beneficiosCount: number;
  activo: boolean;
}

const APlanesPage: React.FC = () => {
  const [planes, setPlanes] = useState<Plan[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga de datos desde API
    setTimeout(() => {
      const mockPlanes: Plan[] = [
        {
          id: "1",
          nombre: "Plan Mensual Básico",
          precio: 40,
          duracion: "mensual",
          tipo: "basico",
          color: "#e02424",
          empresasCount: 5,
          promocionesCount: 3,
          beneficiosCount: 8,
          activo: true
        },
        {
          id: "2",
          nombre: "Plan Anual Básico",
          precio: 360,
          duracion: "anual",
          tipo: "basico",
          color: "#e02424",
          empresasCount: 5,
          promocionesCount: 3,
          beneficiosCount: 8,
          activo: true
        },
        {
          id: "3",
          nombre: "Plan Premium",
          precio: 80,
          duracion: "mensual",
          tipo: "premium",
          color: "#1e40af",
          empresasCount: 12,
          promocionesCount: 8,
          beneficiosCount: 15,
          activo: true
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

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Gestión de Planes</h1>
            <Link 
              to="/admin/planes/nuevo"
              className="flex items-center px-4 py-2 bg-gray-500 text-white rounded hover:bg-red-700"
            >
              <FaPlus className="mr-2" /> Crear Nuevo Plan
            </Link>
          </div>

          {isLoading ? (
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <p className="text-gray-600">Cargando planes...</p>
            </div>
          ) : planes.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <p className="text-gray-600 mb-4">No hay planes disponibles</p>
                <Link 
                to="/admin/planes/nuevo"
                className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                >
                <FaPlus className="mr-2" /> Crear Primer Plan
                </Link>
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
                  {planes.map((plan) => (
                    <tr key={plan.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div 
                            className="w-10 h-10 rounded-full mr-3"
                            style={{ backgroundColor: plan.color }}
                          />
                          <div>
                            <div className="font-medium text-gray-900">{plan.nombre}</div>
                            <div className="text-sm text-gray-500">{plan.duracion === "mensual" ? "Mensual" : "Anual"}</div>
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
                        <div>{plan.empresasCount} empresas</div>
                        <div>{plan.promocionesCount} promociones</div>
                        <div>{plan.beneficiosCount} beneficios</div>
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
                          <Link 
                            to={`/planes/1`}
                            className="text-gray-600 hover:text-gray-900"
                            title="Ver"
                          >
                            <FaEye />
                          </Link>
                          <Link 
                            to={`/admin/planes/editar/${plan.id}`}
                            className="text-blue-600 hover:text-blue-900"
                            title="Editar"
                          >
                            <FaEdit />
                          </Link>
                          <button
                            onClick={() => handleDeletePlan(plan.id)}
                            className="text-red-600 hover:text-red-900"
                            title="Eliminar"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default APlanesPage;