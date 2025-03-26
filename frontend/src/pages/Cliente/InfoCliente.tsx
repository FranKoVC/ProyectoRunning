import { useEffect, useState } from "react";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import EditarPerfil from '../../components/EditarPerfil';
import AdministrarMembresia from '../../components/AdministrarMembresia';
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import Select from "react-select";
import Modal from "react-modal";

// Configurar Modal para accesibilidad
Modal.setAppElement('#root');

// Tipos para los datos
interface Pago {
  id: string;
  membresia: string;
  monto: number;
  fechaPago: string;
  fechaVencimiento: string;
  comprobante: string;
  estado: "pendiente" | "validado" | "rechazado";
}

interface Visita {
  id: string;
  fecha: string;
  empresa: string;
  servicio: string;
  monto: number;
}

// Tipo para las opciones de react-select
interface Option {
  value: string;
  label: string;
}

// Interfaz para el rango de fechas
interface RangoFechas {
  fechaInicio: string;
  fechaFin: string;
}

const InfoCliente = () => {
  const [vistaSeleccionada, setVistaSeleccionada] = useState<"pagos" | "visitas" | "editarPerfil" | "administrarMembresia">("pagos");
  const [pagos, setPagos] = useState<Pago[]>([]);
  const [visitas, setVisitas] = useState<Visita[]>([]);

  // Estados para los resultados de búsqueda
  const [pagosFiltrados, setPagosFiltrados] = useState<Pago[]>([]);
  const [visitasFiltradas, setVisitasFiltradas] = useState<Visita[]>([]);
  
  // Estados para los filtros
  const [filtroMembresia, setFiltroMembresia] = useState<Option | null>(null);
  const [filtroEstadoPago, setFiltroEstadoPago] = useState<Option | null>(null);
  
  // Nuevo estado para rango de fechas de pago
  const [filtroRangoFechaPago, setFiltroRangoFechaPago] = useState<RangoFechas>({
    fechaInicio: "",
    fechaFin: ""
  });
  
  const [filtroEmpresa, setFiltroEmpresa] = useState<Option | null>(null);
  
  // Nuevo estado para rango de fechas de visita
  const [filtroRangoFechaVisita, setFiltroRangoFechaVisita] = useState<RangoFechas>({
    fechaInicio: "",
    fechaFin: ""
  });
  
  // Estado para modal
  const [, setModalIsOpen] = useState(false);
  const [, setComprobanteSeleccionado] = useState<string | null>(null);
  const [, setDetalleSeleccionado] = useState<Pago | null>(null);

  // Opciones para los selects
  const opcionesMembresías: Option[] = [
    { value: "Básico", label: "Básico" },
    { value: "Premium", label: "Premium" },
    { value: "VIP", label: "VIP" },
    { value: "Familiar", label: "Familiar" }
  ];

  const opcionesEstados: Option[] = [
    { value: "pendiente", label: "Pendiente" },
    { value: "validado", label: "Validado" },
    { value: "rechazado", label: "Rechazado" }
  ];

  // Opciones de empresas
  const [opcionesEmpresas, setOpcionesEmpresas] = useState<Option[]>([]);

  useEffect(() => {
    // Datos simulados - Pagos
    const datosPagos = [
      { 
        id: "PAG001", 
        membresia: "Premium", 
        monto: 199.99, 
        fechaPago: "2025-01-15", 
        fechaVencimiento: "2025-02-15", 
        comprobante: "/src/images/comprobante1.png", 
        estado: "validado" 
      },
      { 
        id: "PAG002", 
        membresia: "Premium", 
        monto: 199.99, 
        fechaPago: "2025-02-14", 
        fechaVencimiento: "2025-03-14", 
        comprobante: "/src/images/comprobante2.png", 
        estado: "validado" 
      },
      { 
        id: "PAG003", 
        membresia: "Básico", 
        monto: 89.99, 
        fechaPago: "2025-03-10", 
        fechaVencimiento: "2025-04-10", 
        comprobante: "/src/images/comprobante3.png", 
        estado: "pendiente" 
      }
    ] as Pago[];

    // Datos simulados - Visitas
    const datosVisitas = [
      { 
        id: "VIS001", 
        fecha: "2025-01-18", 
        empresa: "Café Energía", 
        servicio: "Café y Snacks", 
        monto: 25.50 
      },
      { 
        id: "VIS002", 
        fecha: "2025-01-25", 
        empresa: "SportFit Ropa", 
        servicio: "Camiseta Deportiva", 
        monto: 45.00 
      },
      { 
        id: "VIS003", 
        fecha: "2025-02-05", 
        empresa: "Relax Spa", 
        servicio: "Masaje Deportivo", 
        monto: 80.00 
      },
      { 
        id: "VIS004", 
        fecha: "2025-02-12", 
        empresa: "Café Energía", 
        servicio: "Smoothie Proteico", 
        monto: 18.90 
      },
      { 
        id: "VIS005", 
        fecha: "2025-03-02", 
        empresa: "Relax Spa", 
        servicio: "Masaje de Recuperación", 
        monto: 90.00 
      }
    ] as Visita[];

    setPagos(datosPagos);
    setPagosFiltrados(datosPagos);
    
    setVisitas(datosVisitas);
    setVisitasFiltradas(datosVisitas);

    // Obtener lista única de empresas
    const empresasUnicas = Array.from(new Set(datosVisitas.map(visita => visita.empresa)));
    setOpcionesEmpresas(empresasUnicas.map(empresa => ({
      value: empresa,
      label: empresa
    })));
  }, []);

  // Función para manejar cambios en el rango de fechas de pago
  const handleRangoFechaPagoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFiltroRangoFechaPago(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Función para manejar cambios en el rango de fechas de visita
  const handleRangoFechaVisitaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFiltroRangoFechaVisita(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Función para filtrar pagos
  useEffect(() => {
    let filtrados = [...pagos];
    
    // Filtrar por membresía
    if (filtroMembresia) {
      filtrados = filtrados.filter(pago => 
        pago.membresia === filtroMembresia.value
      );
    }
    
    // Filtrar por estado
    if (filtroEstadoPago) {
      filtrados = filtrados.filter(pago => 
        pago.estado === filtroEstadoPago.value
      );
    }
    
    // Filtrar por rango de fechas de pago
    if (filtroRangoFechaPago.fechaInicio && filtroRangoFechaPago.fechaFin) {
      filtrados = filtrados.filter(pago => {
        const fechaPago = new Date(pago.fechaPago);
        const fechaInicio = new Date(filtroRangoFechaPago.fechaInicio);
        const fechaFin = new Date(filtroRangoFechaPago.fechaFin);
        
        // Ajustar fechaFin para incluir todo el día
        fechaFin.setHours(23, 59, 59, 999);
        
        return fechaPago >= fechaInicio && fechaPago <= fechaFin;
      });
    }
    
    setPagosFiltrados(filtrados);
  }, [filtroMembresia, filtroEstadoPago, filtroRangoFechaPago, pagos]);

  // Función para filtrar visitas
  useEffect(() => {
    let filtradas = [...visitas];
    
    // Filtrar por empresa
    if (filtroEmpresa) {
      filtradas = filtradas.filter(visita => 
        visita.empresa === filtroEmpresa.value
      );
    }
    
    // Filtrar por rango de fechas de visita
    if (filtroRangoFechaVisita.fechaInicio && filtroRangoFechaVisita.fechaFin) {
      filtradas = filtradas.filter(visita => {
        const fechaVisita = new Date(visita.fecha);
        const fechaInicio = new Date(filtroRangoFechaVisita.fechaInicio);
        const fechaFin = new Date(filtroRangoFechaVisita.fechaFin);
        
        // Ajustar fechaFin para incluir todo el día
        fechaFin.setHours(23, 59, 59, 999);
        
        return fechaVisita >= fechaInicio && fechaVisita <= fechaFin;
      });
    }
    
    setVisitasFiltradas(filtradas);
  }, [filtroEmpresa, filtroRangoFechaVisita, visitas]);

  // Función para limpiar los filtros
  const limpiarFiltros = () => {
    if (vistaSeleccionada === "pagos") {
      setFiltroMembresia(null);
      setFiltroEstadoPago(null);
      setFiltroRangoFechaPago({
        fechaInicio: "",
        fechaFin: ""
      });
      setPagosFiltrados(pagos);
    } else {
      setFiltroEmpresa(null);
      setFiltroRangoFechaVisita({
        fechaInicio: "",
        fechaFin: ""
      });
      setVisitasFiltradas(visitas);
    }
  };

  // Función para ver comprobante
  const verComprobante = (pago: Pago) => {
    setComprobanteSeleccionado(pago.comprobante);
    setDetalleSeleccionado(pago);
    setModalIsOpen(true);
  };

  // Renderizar estado de pago con color
  const renderEstadoPago = (estado: string) => {
    let color = "";
    let text = "";
    
    switch (estado) {
      case "validado":
        color = "text-green-600";
        text = "Validado";
        break;
      case "rechazado":
        color = "text-red-600";
        text = "Rechazado";
        break;
      default:
        color = "text-yellow-600";
        text = "Pendiente";
    }
    
    return <span className={color}>{text}</span>;
  };

  // Preparar datos para el gráfico de visitas por empresa
  const visitasPorEmpresa = {
    labels: opcionesEmpresas.map(opt => opt.label),
    datasets: [
      {
        label: "Visitas realizadas",
        data: opcionesEmpresas.map(empresa => 
          visitasFiltradas.filter(v => v.empresa === empresa.value).length
        ),
        backgroundColor: "#3B82F6",
      },
    ],
  };

  // Preparar datos para el gráfico de gastos por empresa
  const gastosPorEmpresa = {
    labels: opcionesEmpresas.map(opt => opt.label),
    datasets: [
      {
        label: "Gastos realizados (S/)",
        data: opcionesEmpresas.map(empresa => 
          visitasFiltradas
            .filter(v => v.empresa === empresa.value)
            .reduce((sum, v) => sum + v.monto, 0)
        ),
        backgroundColor: "#F59E0B",
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

  // Estilos para el modal

  return (
    <>
      <Navbar />
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Mi Cuenta</h1>
          
          {/* Menú de selección de vista */}
          <div className="flex space-x-4 mb-8">
            <button 
              onClick={() => setVistaSeleccionada("pagos")} 
              className={`px-6 py-2 rounded-lg font-medium transition ${vistaSeleccionada === "pagos" ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-100"}`}
            >
              Historial de Pagos
            </button>
            <button 
              onClick={() => setVistaSeleccionada("visitas")} 
              className={`px-6 py-2 rounded-lg font-medium transition ${vistaSeleccionada === "visitas" ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-100"}`}
            >
              Historial de Visitas
            </button>
            <button 
              onClick={() => setVistaSeleccionada("editarPerfil")} 
              className={`px-6 py-2 rounded-lg font-medium transition ${vistaSeleccionada === "editarPerfil" ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-100"}`}
            >
              Editar Perfil
            </button>
            <button 
              onClick={() => setVistaSeleccionada("administrarMembresia")} 
              className={`px-6 py-2 rounded-lg font-medium transition ${vistaSeleccionada === "administrarMembresia" ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-100"}`}
            >
              Administrar Membresía
            </button>
          </div>

          {/* Contenido de la vista seleccionada */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {vistaSeleccionada === "pagos" ? (
              <>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Historial de Pagos</h2>
                
                {/* Filtros para historial de pagos */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Membresía</label>
                    <Select
                      styles={customStyles}
                      isClearable
                      placeholder="Filtrar por membresía..."
                      options={opcionesMembresías}
                      value={filtroMembresia}
                      onChange={(selectedOption) => setFiltroMembresia(selectedOption)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                    <Select
                      styles={customStyles}
                      isClearable
                      placeholder="Filtrar por estado..."
                      options={opcionesEstados}
                      value={filtroEstadoPago}
                      onChange={(selectedOption) => setFiltroEstadoPago(selectedOption)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Fecha Inicio</label>
                    <input
                      type="date"
                      name="fechaInicio"
                      value={filtroRangoFechaPago.fechaInicio}
                      onChange={handleRangoFechaPagoChange}
                      className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Fecha Fin</label>
                    <input
                      type="date"
                      name="fechaFin"
                      value={filtroRangoFechaPago.fechaFin}
                      onChange={handleRangoFechaPagoChange}
                      className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
                
                <button 
                  onClick={limpiarFiltros}
                  className="mb-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded transition"
                >
                  Limpiar filtros
                </button>
                
                {/* Tabla de pagos */}
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Membresía</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monto</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de Pago</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vencimiento</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comprobante</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {pagosFiltrados.length > 0 ? (
                        pagosFiltrados.map((pago) => (
                          <tr key={pago.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pago.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pago.membresia}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">S/ {pago.monto.toFixed(2)}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pago.fechaPago}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pago.fechaVencimiento}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{renderEstadoPago(pago.estado)}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <button 
                                onClick={() => verComprobante(pago)}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition"
                              >
                                Ver comprobante
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                            No se encontraron registros de pagos con los filtros seleccionados
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </>
            ) : vistaSeleccionada === "visitas" ? (
              <>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Historial de Visitas</h2>
                
                {/* Filtros para historial de visitas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Rango de fechas de visita</label>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <input
                          type="date"
                          name="fechaInicio"
                          value={filtroRangoFechaVisita.fechaInicio}
                          onChange={handleRangoFechaVisitaChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                        />
                      </div>
                      <div>
                        <input
                          type="date"
                          name="fechaFin"
                          value={filtroRangoFechaVisita.fechaFin}
                          onChange={handleRangoFechaVisitaChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={limpiarFiltros}
                  className="mb-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded transition"
                >
                  Limpiar filtros
                </button>
                
                {/* Tabla de visitas */}
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Empresa</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Servicio</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monto</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {visitasFiltradas.length > 0 ? (
                        visitasFiltradas.map((visita) => (
                          <tr key={visita.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{visita.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{visita.fecha}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{visita.empresa}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{visita.servicio}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">S/ {visita.monto.toFixed(2)}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                            No se encontraron registros de visitas con los filtros seleccionados
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                
                {/* Gráficos de análisis de visitas */}
                {visitasFiltradas.length > 0 && (
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                      <h3 className="text-lg font-semibold mb-4 text-gray-800">Visitas por empresa</h3>
                      <Bar data={visitasPorEmpresa} />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                      <h3 className="text-lg font-semibold mb-4 text-gray-800">Gastos por empresa</h3>
                      <Bar data={gastosPorEmpresa} />
                    </div>
                  </div>
                )}
              </>
            ) : vistaSeleccionada === "editarPerfil" ? (
              <EditarPerfil />
            ) : vistaSeleccionada === "administrarMembresia" ? (
              <AdministrarMembresia />
            ) : null}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InfoCliente;