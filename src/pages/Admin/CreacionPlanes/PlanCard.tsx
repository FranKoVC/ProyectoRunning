import React from "react";
import { FaCheckCircle } from "react-icons/fa";

interface PlanCardProps {
  title: string;
  price: number;
  duration: string;
  benefits: string[];
  color?: string;
  isPremium?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  duration,
  benefits,
  color = "#e02424",
  isPremium = false,
}) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden border">
      {/* Cabecera del plan */}
      <div 
        className="p-6 text-white text-center"
        style={{ backgroundColor: color }}
      >
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="text-3xl font-bold mb-2">S/ {price}{duration}</div>
        {isPremium && (
          <div className="inline-block px-4 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium uppercase">
            Premium
          </div>
        )}
      </div>
      
      {/* Contenido del plan */}
      <div className="p-6">
        <h4 className="text-lg font-bold mb-4 text-center">Beneficios</h4>
        <ul className="space-y-3 mb-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        
        <button 
          className="w-full py-3 text-white font-bold rounded-lg mt-4"
          style={{ backgroundColor: color }}
        >
          Obtener este plan
        </button>
      </div>
    </div>
  );
};

export default PlanCard;