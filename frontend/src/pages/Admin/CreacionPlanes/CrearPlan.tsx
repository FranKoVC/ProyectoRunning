import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import PlanPreview from "./PlanPreview";

interface Empresa {
  id: string;
  nombre: string;
  logo: string;
  descuento: number;
}

interface Promocion {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
}

interface Beneficio {
  id: string;
  titulo: string;
  descripcion: string;
  icono: string;
}

export interface PlanData {
  nombre: string;
  precio: number;
  duracion: "mensual" | "anual";
  tipo: "basico" | "premium";
  empresas: Empresa[];
  promociones: Promocion[];
  beneficios: Beneficio[];
  color: string;
}

const CrearPlan: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [planData, setPlanData] = useState<PlanData>({
    nombre: "Nuevo Plan",
    precio: 0,
    duracion: "mensual",
    tipo: "basico",
    empresas: [],
    promociones: [],
    beneficios: [],
    color: "#ff0000"
  });

  const updatePlanData = (data: Partial<PlanData>) => {
    setPlanData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // Aquí iría la lógica para guardar el plan en la base de datos
    console.log("Plan a guardar:", planData);
    alert("Plan creado exitosamente");
    // Aquí se podría redirigir a la página de planes
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne planData={planData} updatePlanData={updatePlanData} />;
      case 2:
        return <StepTwo planData={planData} updatePlanData={updatePlanData} />;
      case 3:
        return <StepThree planData={planData} updatePlanData={updatePlanData} />;
      default:
        return <StepOne planData={planData} updatePlanData={updatePlanData} />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Crear Nuevo Plan</h1>
          
          {/* Indicador de Pasos */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 1 ? "bg-red-600 text-white" : "bg-gray-300"
                }`}
              >
                1
              </div>
              <div className={`w-20 h-1 ${currentStep >= 2 ? "bg-red-600" : "bg-gray-300"}`}></div>
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 2 ? "bg-red-600 text-white" : "bg-gray-300"
                }`}
              >
                2
              </div>
              <div className={`w-20 h-1 ${currentStep >= 3 ? "bg-red-600" : "bg-gray-300"}`}></div>
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 3 ? "bg-red-600 text-white" : "bg-gray-300"
                }`}
              >
                3
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Sección de Edición */}
            <div className="md:w-1/2 bg-white p-6 rounded-lg shadow">
              {renderStep()}
              
              {/* Botones de Navegación */}
              <div className="flex justify-between mt-6">
                <button 
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-4 py-2 rounded ${
                    currentStep === 1 
                      ? "bg-gray-300 cursor-not-allowed" 
                      : "bg-gray-600 text-white hover:bg-gray-700"
                  }`}
                >
                  Anterior
                </button>
                
                {currentStep < 3 ? (
                  <button 
                    onClick={nextStep}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Siguiente
                  </button>
                ) : (
                  <button 
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Guardar Plan
                  </button>
                )}
              </div>
            </div>
            
            {/* Sección de Vista Previa */}
            <div className="md:w-1/2 bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Vista Previa</h2>
              <PlanPreview planData={planData} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CrearPlan;