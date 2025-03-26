import React from "react";

const Menu: React.FC = () => {
  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Menú</h1>
      <div className="space-y-4">
        <button
          onClick={() => navigateTo("/home")}
          className="w-64 px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Cliente
        </button>
        <button
          onClick={() => navigateTo("/empresa/registrovisita")}
          className="w-64 px-6 py-3 text-lg font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Empresa
        </button>
        <button
          onClick={() => navigateTo("/admin/areportes")}
          className="w-64 px-6 py-3 text-lg font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Administrador
        </button>
      </div>
    </div>
  );
};

export default Menu;
