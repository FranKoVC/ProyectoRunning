import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Reportes = () => {
  const [reporteSeleccionado, setReporteSeleccionado] = useState<"clientes" | "promociones">("clientes");
  const [usuarios, setUsuarios] = useState<{ 
    nombre: string; 
    membresia: string; 
    vigencia: string; 
    estado: string; 
    visitas: number;
  }[]>([]);

  const [promociones, setPromociones] = useState<{ 
    nombre: string; 
    cantidad: number;
  }[]>([]);

  useEffect(() => {
    // Datos simulados
    setUsuarios([
      { nombre: "Juan Pérez", membresia: "Premium", vigencia: "2025-03-10", estado: "Normal", visitas: 10 },
      { nombre: "María López", membresia: "Básico", vigencia: "2024-03-06", estado: "Comunicado", visitas: 5 },
      { nombre: "Carlos Ramos", membresia: "Premium", vigencia: "2024-03-02", estado: "Comunicado", visitas: 15 },
    ]);

    setPromociones([
      { nombre: "Descuento 2x1", cantidad: 25 },
      { nombre: "Combo Familiar", cantidad: 18 },
      { nombre: "Cupón 50% Off", cantidad: 30 },
    ]);
  }, []);

  const generarPDF = () => {
    const doc = new jsPDF();
    
    if (reporteSeleccionado === "clientes") {
      doc.text("Reporte de Usuarios", 20, 10);
      autoTable(doc, {
        head: [["Nombre", "Membresía", "Vigencia", "Estado", "Visitas"]],
        body: usuarios.map((u) => [u.nombre, u.membresia, u.vigencia, u.estado, u.visitas]),
      });
    } else {
      doc.text("Promociones Más Compradas", 20, 10);
      autoTable(doc, {
        head: [["Promoción", "Cantidad"]],
        body: promociones.map((p) => [p.nombre, p.cantidad]),
      });
    }

    doc.save(`reporte_${reporteSeleccionado}.pdf`);
  };

  const clientesActivos = {
    labels: usuarios.map((u) => u.nombre),
    datasets: [
      {
        label: "Visitas",
        data: usuarios.map((u) => u.visitas),
        backgroundColor: "#4CAF50",
      },
    ],
  };

  const promocionesMasCompradas = {
    labels: promociones.map((p) => p.nombre),
    datasets: [
      {
        label: "Cantidad",
        data: promociones.map((p) => p.cantidad),
        backgroundColor: "#FF9800",
      },
    ],
  };

  return (
    <>
    <Navbar />
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Reportes</h1>
      
      {/* Menú de selección de reporte */}
      <div className="flex space-x-4 mb-6">
        <button 
          onClick={() => setReporteSeleccionado("clientes")} 
          className={`px-4 py-2 rounded ${reporteSeleccionado === "clientes" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
        >
          Clientes
        </button>
        <button 
          onClick={() => setReporteSeleccionado("promociones")} 
          className={`px-4 py-2 rounded ${reporteSeleccionado === "promociones" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
        >
          Promociones
        </button>
      </div>

      <button onClick={generarPDF} className="bg-green-500 text-white px-4 py-2 mb-4 rounded">
        Exportar PDF
      </button>

      {reporteSeleccionado === "clientes" ? (
        <>
          <h2 className="text-xl font-bold mt-6">Usuarios</h2>
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Nombre</th>
                <th className="p-2">Membresía</th>
                <th className="p-2">Vigencia</th>
                <th className="p-2">Estado</th>
                <th className="p-2">Visitas</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2">{usuario.nombre}</td>
                  <td className="p-2">{usuario.membresia}</td>
                  <td className={`p-2 ${new Date(usuario.vigencia) < new Date(new Date().setDate(new Date().getDate() + 7)) ? "text-red-500" : ""}`}>
                    {usuario.vigencia}
                  </td>
                  <td className="p-2">{usuario.estado}</td>
                  <td className="p-2">{usuario.visitas}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Gráfico de Clientes Más Activos */}
          <div className="mt-6">
            <h2 className="text-xl font-bold">Clientes Más Activos</h2>
            <Bar data={clientesActivos} />
          </div>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold mt-6">Promociones Más Compradas</h2>
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Promoción</th>
                <th className="p-2">Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {promociones.map((promo, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2">{promo.nombre}</td>
                  <td className="p-2">{promo.cantidad}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Gráfico de Promociones Más Compradas */}
          <div className="mt-6">
            <h2 className="text-xl font-bold">Análisis de Promociones</h2>
            <Bar data={promocionesMasCompradas} />
          </div>
        </>
      )}
    </div>
    <Footer />
    </>
  );
};

export default Reportes;
