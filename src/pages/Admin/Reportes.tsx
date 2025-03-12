import { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import Select from "react-select";

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HistorialPagos from './HistorialPagos'; // Añadir esta línea

// Tipos para los datos
interface Cliente {
  id: string;
  nombre: string;
  membresia: "Premium" | "Básico" | "Gold";
  vigencia: string;
  estado: "Activo" | "Inactivo";
  visitasMes: number;
  gastoTotal: number;
}

interface Beneficio {
  id: string;
  nombre: string;
  empresa: string;
  descuentoPremium: number;
  descuentoBasico: number;
  descuentoGold: number;
  usos: number;
}

// Tipo para las opciones de react-select
interface Option {
  value: string;
  label: string;
}

const Reportes = () => {
  const [reporteSeleccionado, setReporteSeleccionado] = useState<"clientes" | "beneficios" | "historialPagos">("clientes");
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [beneficios, setBeneficios] = useState<Beneficio[]>([]);

  // Estados para los resultados de búsqueda
  const [clientesFiltrados, setClientesFiltrados] = useState<Cliente[]>([]);
  const [beneficiosFiltrados, setBeneficiosFiltrados] = useState<Beneficio[]>([]);
  
  // Filtros para clientes
  const [filtroNombreCliente, setFiltroNombreCliente] = useState<Option | null>(null);
  const [filtroEstadoCliente, setFiltroEstadoCliente] = useState<Option | null>(null);
  const [filtroMembresiaCliente, setFiltroMembresiaCliente] = useState<Option | null>(null);

  // Filtros para beneficios
  const [filtroEmpresa, setFiltroEmpresa] = useState<Option | null>(null);
  const [filtroMembresiaBeneficio, setFiltroMembresiaBeneficio] = useState<Option | null>(null);

  // Opciones para los selects
  const [opcionesClientes, setOpcionesClientes] = useState<Option[]>([]);
  const [opcionesEmpresas, setOpcionesEmpresas] = useState<Option[]>([]);

  const opcionesEstadoCliente: Option[] = [
    { value: "Activo", label: "Activo" },
    { value: "Inactivo", label: "Inactivo" }
  ];

  const opcionesMembresia: Option[] = [
    { value: "Premium", label: "Premium" },
    { value: "Básico", label: "Básico" },
    { value: "Gold", label: "Gold" }
  ];

  useEffect(() => {
    // Datos simulados para clientes
    const datosClientes: Cliente[] = [
      { 
        id: "C001", 
        nombre: "Juan Pérez", 
        membresia: "Premium", 
        vigencia: "2025-03-18", 
        estado: "Activo", 
        visitasMes: 10, 
        gastoTotal: 1250.50 
      },
      { 
        id: "C002", 
        nombre: "María López", 
        membresia: "Básico", 
        vigencia: "2025-03-15", 
        estado: "Activo", 
        visitasMes: 5, 
        gastoTotal: 450.75 
      },
      { 
        id: "C003", 
        nombre: "Carlos Ramos", 
        membresia: "Gold", 
        vigencia: "2025-03-14", 
        estado: "Activo", 
        visitasMes: 15, 
        gastoTotal: 2800.30 
      },
      { 
        id: "C004", 
        nombre: "Ana García", 
        membresia: "Premium", 
        vigencia: "2025-04-20", 
        estado: "Activo", 
        visitasMes: 8, 
        gastoTotal: 980.25 
      },
      { 
        id: "C005", 
        nombre: "Roberto Díaz", 
        membresia: "Básico", 
        vigencia: "2025-03-10", 
        estado: "Inactivo", 
        visitasMes: 2, 
        gastoTotal: 120.00 
      },
    ];

    // Datos simulados para beneficios
    const datosBeneficios: Beneficio[] = [
      { 
        id: "B001", 
        nombre: "Descuento en ropa deportiva", 
        empresa: "SportFit", 
        descuentoPremium: 25, 
        descuentoBasico: 15, 
        descuentoGold: 35, 
        usos: 45 
      },
      { 
        id: "B002", 
        nombre: "2x1 en entradas al cine", 
        empresa: "CinePlex", 
        descuentoPremium: 100, 
        descuentoBasico: 0, 
        descuentoGold: 100, 
        usos: 78 
      },
      { 
        id: "B003", 
        nombre: "Bebida gratis con compra", 
        empresa: "BurgerPlace", 
        descuentoPremium: 15, 
        descuentoBasico: 10, 
        descuentoGold: 20, 
        usos: 120 
      },
      { 
        id: "B004", 
        nombre: "Sesión de spa", 
        empresa: "RelaxTime", 
        descuentoPremium: 30, 
        descuentoBasico: 15, 
        descuentoGold: 40, 
        usos: 35 
      },
      { 
        id: "B005", 
        nombre: "Descuento en hotel", 
        empresa: "StayComfort", 
        descuentoPremium: 20, 
        descuentoBasico: 10, 
        descuentoGold: 30, 
        usos: 25 
      },
    ];

    setClientes(datosClientes);
    setClientesFiltrados(datosClientes);
    
    setBeneficios(datosBeneficios);
    setBeneficiosFiltrados(datosBeneficios);

    // Generar opciones para react-select
    const opcionesNombresClientes = datosClientes.map(cliente => ({
      value: cliente.nombre,
      label: cliente.nombre
    }));
    setOpcionesClientes(opcionesNombresClientes);

    // Obtener lista única de empresas
    const empresasUnicas = Array.from(new Set(datosBeneficios.map(ben => ben.empresa)));
    setOpcionesEmpresas(empresasUnicas.map(empresa => ({
      value: empresa,
      label: empresa
    })));
  }, []);

  // Función para filtrar clientes
  useEffect(() => {
    let filtrados = [...clientes];
    
    // Filtrar por nombre
    if (filtroNombreCliente) {
      filtrados = filtrados.filter(cliente => 
        cliente.nombre === filtroNombreCliente.value
      );
    }
    
    // Filtrar por estado
    if (filtroEstadoCliente) {
      filtrados = filtrados.filter(cliente => 
        cliente.estado === filtroEstadoCliente.value
      );
    }
    
    // Filtrar por membresía
    if (filtroMembresiaCliente) {
      filtrados = filtrados.filter(cliente => 
        cliente.membresia === filtroMembresiaCliente.value
      );
    }
    
    setClientesFiltrados(filtrados);
  }, [filtroNombreCliente, filtroEstadoCliente, filtroMembresiaCliente, clientes]);

  // Función para filtrar beneficios
  useEffect(() => {
    let filtrados = [...beneficios];
    
    // Filtrar por empresa
    if (filtroEmpresa) {
      filtrados = filtrados.filter(beneficio => 
        beneficio.empresa === filtroEmpresa.value
      );
    }
    
    // Filtrar por membresía (muestra los que tienen algún descuento para esa membresía)
    if (filtroMembresiaBeneficio) {
      filtrados = filtrados.filter(beneficio => {
        if (filtroMembresiaBeneficio.value === "Premium") return beneficio.descuentoPremium > 0;
        if (filtroMembresiaBeneficio.value === "Básico") return beneficio.descuentoBasico > 0;
        if (filtroMembresiaBeneficio.value === "Gold") return beneficio.descuentoGold > 0;
        return true;
      });
    }
    
    setBeneficiosFiltrados(filtrados);
  }, [filtroEmpresa, filtroMembresiaBeneficio, beneficios]);

  // Función para limpiar los filtros
  const limpiarFiltros = () => {
    if (reporteSeleccionado === "clientes") {
      setFiltroNombreCliente(null);
      setFiltroEstadoCliente(null);
      setFiltroMembresiaCliente(null);
      setClientesFiltrados(clientes);
    } else {
      setFiltroEmpresa(null);
      setFiltroMembresiaBeneficio(null);
      setBeneficiosFiltrados(beneficios);
    }
  };

  const generarPDF = () => {
    const doc = new jsPDF();
    
    if (reporteSeleccionado === "clientes") {
      doc.text("Reporte de Clientes", 20, 10);
      autoTable(doc, {
        head: [["Nombre", "Membresía", "Vigencia", "Estado", "Visitas del mes", "Gasto Total"]],
        body: clientesFiltrados.map((c) => [
          c.nombre, 
          c.membresia, 
          c.vigencia, 
          c.estado, 
          c.visitasMes, 
          `S/ ${c.gastoTotal.toFixed(2)}`
        ]),
      });
    } else {
      doc.text("Reporte de Beneficios", 20, 10);
      autoTable(doc, {
        head: [["Beneficio", "Empresa", "Desc. Premium", "Desc. Básico", "Desc. Gold", "Usos"]],
        body: beneficiosFiltrados.map((b) => [
          b.nombre, 
          b.empresa, 
          `${b.descuentoPremium}%`, 
          `${b.descuentoBasico}%`, 
          `${b.descuentoGold}%`, 
          b.usos
        ]),
      });
    }

    doc.save(`reporte_${reporteSeleccionado}_${new Date().toISOString().split('T')[0]}.pdf`);
  };

  // Función para verificar si la fecha de vigencia está próxima a vencer (menos de 5 días)
  const estaProximoAVencer = (fecha: string): boolean => {
    const fechaVigencia = new Date(fecha);
    const hoy = new Date();
    const diasDiferencia = Math.ceil((fechaVigencia.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));
    return diasDiferencia <= 5 && diasDiferencia >= 0;
  };

  // Función para verificar si ya venció
  const estaVencido = (fecha: string): boolean => {
    const fechaVigencia = new Date(fecha);
    const hoy = new Date();
    return fechaVigencia < hoy;
  };

  // Datos para los gráficos
  const clientesActivosData = {
    labels: clientesFiltrados.slice(0, 5).map((c) => c.nombre),
    datasets: [
      {
        label: "Visitas del mes",
        data: clientesFiltrados.slice(0, 5).map((c) => c.visitasMes),
        backgroundColor: "#4CAF50",
      },
    ],
  };

  const beneficiosUsadosData = {
    labels: beneficiosFiltrados.slice(0, 5).map((b) => b.nombre),
    datasets: [
      {
        label: "Usos",
        data: beneficiosFiltrados.slice(0, 5).map((b) => b.usos),
        backgroundColor: "#FF9800",
      },
    ],
  };

  // Estilos para react-select
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      borderRadius: '0.375rem',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#4299e1'
      }
    }),
    option: (provided: any, state: { isSelected: boolean }) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#4299e1' : 'white',
      color: state.isSelected ? 'white' : 'black',
      '&:hover': {
        backgroundColor: state.isSelected ? '#4299e1' : '#f7fafc'
      }
    }),
  };

  return (
    <>
    <Navbar />
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Reportes</h1>
          
          {/* Menú de selección de reporte */}
          <div className="flex flex-wrap space-x-4 mb-6">
            <button 
              onClick={() => setReporteSeleccionado("clientes")} 
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                reporteSeleccionado === "clientes" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Clientes
            </button>
            <button 
              onClick={() => setReporteSeleccionado("beneficios")} 
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                reporteSeleccionado === "beneficios" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Beneficios
            </button>
            <button 
              onClick={() => setReporteSeleccionado("historialPagos")} 
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                reporteSeleccionado === "historialPagos" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Historial de Pagos
            </button>
          </div>

          

          {/* El botón para generar PDF ahora solo aparece en las vistas de clientes y beneficios */}
          {reporteSeleccionado !== "historialPagos" && (
            <button 
              onClick={generarPDF} 
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 mb-6 rounded-md transition-colors duration-200 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Exportar PDF
            </button>
          )}
  
          {reporteSeleccionado === "clientes" ? (
            <>
              <h2 className="text-xl font-bold mb-4 text-gray-800">Clientes</h2>
              
              {/* Filtros de clientes */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 bg-gray-100 p-4 rounded-md">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <Select
                    styles={customStyles}
                    isClearable
                    placeholder="Filtrar por nombre..."
                    options={opcionesClientes}
                    value={filtroNombreCliente}
                    onChange={(selectedOption) => setFiltroNombreCliente(selectedOption)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                  <Select
                    styles={customStyles}
                    isClearable
                    placeholder="Filtrar por estado..."
                    options={opcionesEstadoCliente}
                    value={filtroEstadoCliente}
                    onChange={(selectedOption) => setFiltroEstadoCliente(selectedOption)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Membresía</label>
                  <Select
                    styles={customStyles}
                    isClearable
                    placeholder="Filtrar por membresía..."
                    options={opcionesMembresia}
                    value={filtroMembresiaCliente}
                    onChange={(selectedOption) => setFiltroMembresiaCliente(selectedOption)}
                  />
                </div>
                
                <div className="flex items-end">
                  <button 
                    onClick={limpiarFiltros}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md transition-colors duration-200 w-full"
                  >
                    Limpiar filtros
                  </button>
                </div>
              </div>
              
              {/* Tabla de clientes */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse rounded-md overflow-hidden">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="p-3 text-left">Cliente</th>
                      <th className="p-3 text-left">Membresía</th>
                      <th className="p-3 text-left">Vigencia</th>
                      <th className="p-3 text-left">Estado</th>
                      <th className="p-3 text-right">Visitas del mes</th>
                      <th className="p-3 text-right">Gasto total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clientesFiltrados.length > 0 ? (
                      clientesFiltrados.map((cliente, index) => (
                        <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50`}>
                          <td className="p-3">{cliente.nombre}</td>
                          <td className="p-3">
                            <span className={`py-1 px-2 rounded-full text-xs font-medium
                              ${cliente.membresia === "Premium" ? "bg-purple-100 text-purple-800" : 
                                cliente.membresia === "Gold" ? "bg-yellow-100 text-yellow-800" : 
                                "bg-blue-100 text-blue-800"}
                            `}>
                              {cliente.membresia}
                            </span>
                          </td>
                          <td className={`p-3 ${
                            estaVencido(cliente.vigencia) 
                              ? "text-red-600 font-bold" 
                              : estaProximoAVencer(cliente.vigencia) 
                                ? "text-orange-500 font-bold" 
                                : "text-green-600"
                          }`}>
                            {cliente.vigencia}
                            {estaVencido(cliente.vigencia) && 
                              <span className="ml-2 text-xs bg-red-100 text-red-800 py-0.5 px-2 rounded-full">Vencido</span>
                            }
                            {estaProximoAVencer(cliente.vigencia) && 
                              <span className="ml-2 text-xs bg-orange-100 text-orange-800 py-0.5 px-2 rounded-full">Próximo a vencer</span>
                            }
                          </td>
                          <td className="p-3">
                            <span className={`py-1 px-2 rounded-full text-xs font-medium
                              ${cliente.estado === "Activo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                            `}>
                              {cliente.estado}
                            </span>
                          </td>
                          <td className="p-3 text-right">{cliente.visitasMes}</td>
                          <td className="p-3 text-right font-medium">S/ {cliente.gastoTotal.toFixed(2)}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="p-4 text-center text-gray-500">
                          No se encontraron clientes con los filtros seleccionados
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Gráfico de Clientes Más Activos */}
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <h2 className="text-lg font-bold mb-4 text-gray-800">Clientes Más Activos</h2>
                <div className="h-64">
                  {clientesFiltrados.length > 0 ? (
                    <Bar 
                      data={clientesActivosData} 
                      options={{
                        maintainAspectRatio: false,
                        scales: {
                          y: {
                            beginAtZero: true
                          }
                        }
                      }}
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center text-gray-500">
                      No hay datos para mostrar
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : reporteSeleccionado === "beneficios" ?(
            <>
              <h2 className="text-xl font-bold mb-4 text-gray-800">Beneficios</h2>
              
              {/* Filtros de beneficios */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 bg-gray-100 p-4 rounded-md">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                  <Select
                    styles={customStyles}
                    isClearable
                    placeholder="Filtrar por empresa..."
                    options={opcionesEmpresas}
                    value={filtroEmpresa}
                    onChange={(selectedOption) => setFiltroEmpresa(selectedOption)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Membresía</label>
                  <Select
                    styles={customStyles}
                    isClearable
                    placeholder="Filtrar por membresía..."
                    options={opcionesMembresia}
                    value={filtroMembresiaBeneficio}
                    onChange={(selectedOption) => setFiltroMembresiaBeneficio(selectedOption)}
                  />
                </div>
                
                <div className="flex items-end">
                  <button 
                    onClick={limpiarFiltros}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md transition-colors duration-200 w-full"
                  >
                    Limpiar filtros
                  </button>
                </div>
              </div>
              
              {/* Tabla de beneficios */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse rounded-md overflow-hidden">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="p-3 text-left">Beneficio</th>
                      <th className="p-3 text-left">Empresa</th>
                      <th className="p-3 text-center">Desc. Premium</th>
                      <th className="p-3 text-center">Desc. Básico</th>
                      <th className="p-3 text-center">Desc. Gold</th>
                      <th className="p-3 text-right">Usos totales</th>
                    </tr>
                  </thead>
                  <tbody>
                    {beneficiosFiltrados.length > 0 ? (
                      beneficiosFiltrados.map((beneficio, index) => (
                        <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50`}>
                          <td className="p-3 font-medium">{beneficio.nombre}</td>
                          <td className="p-3">
                            <span className="py-1 px-2 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {beneficio.empresa}
                            </span>
                          </td>
                          <td className="p-3 text-center">
                            <span className={`py-1 px-2 rounded-full text-xs font-medium ${
                              beneficio.descuentoPremium > 0 ? "bg-purple-100 text-purple-800" : "bg-gray-100 text-gray-500"
                            }`}>
                              {beneficio.descuentoPremium}%
                            </span>
                          </td>
                          <td className="p-3 text-center">
                            <span className={`py-1 px-2 rounded-full text-xs font-medium ${
                              beneficio.descuentoBasico > 0 ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-500"
                            }`}>
                              {beneficio.descuentoBasico}%
                            </span>
                          </td>
                          <td className="p-3 text-center">
                            <span className={`py-1 px-2 rounded-full text-xs font-medium ${
                              beneficio.descuentoGold > 0 ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-500"
                            }`}>
                              {beneficio.descuentoGold}%
                            </span>
                          </td>
                          <td className="p-3 text-right font-medium">{beneficio.usos}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="p-4 text-center text-gray-500">
                          No se encontraron beneficios con los filtros seleccionados
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Gráfico de Beneficios Más Usados */}
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <h2 className="text-lg font-bold mb-4 text-gray-800">Beneficios Más Usados</h2>
                <div className="h-64">
                  {beneficiosFiltrados.length > 0 ? (
                    <Bar 
                      data={beneficiosUsadosData} 
                      options={{
                        maintainAspectRatio: false,
                        scales: {
                          y: {
                            beginAtZero: true
                          }
                        }
                      }}
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center text-gray-500">
                      No hay datos para mostrar
                    </div>
                  )}
                </div>
              </div>
            </>
          ): (
            // Nuevo caso para Historial de Pagos
            <HistorialPagos />
          )}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Reportes;