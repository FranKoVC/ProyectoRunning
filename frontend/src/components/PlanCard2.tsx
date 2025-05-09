import React from "react";

interface PlanCardProps {
  title: string;
  price: number;
  duration: string;
  benefits: string[];
}

const PlanCard: React.FC<PlanCardProps> = ({ title, price, duration, benefits }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-full max-w-sm transition-transform transform hover:scale-105">
      <h3 className="text-lg font-bold text-red-700">{title}</h3>
      <p className="text-3xl font-extrabold text-gray-900 mt-2">
        S/ {price} <span className="text-sm font-medium text-gray-500">{duration}</span>
      </p>

      <ul className="mt-4 space-y-2 text-gray-700 text-sm">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-green-500">✔</span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default PlanCard;

