import { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import Select from "react-select";
import Modal from "react-modal";

// Asegurar que react-modal se configure correctamente para accesibilidad
Modal.setAppElement('#root');

// Tipos para los datos
interface Pago {
  id: string;
  clienteId: string;
  clienteNombre: string;
  membresia: "Premium" | "Básico" | "Gold";
  monto: number;
  fechaPago: string;
  metodoPago: "Yape" | "Plin" | "Transferencia" | "Efectivo";
  comprobante: string;
  estado: "Pendiente" | "Validado" | "Rechazado";
}

// Tipo para las opciones de react-select
interface Option {
  value: string;
  label: string;
}

const HistorialPagos = () => {
  const [pagos, setPagos] = useState<Pago[]>([]);
  const [pagosFiltrados, setPagosFiltrados] = useState<Pago[]>([]);
  
  // Estado para el modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imagenSeleccionada, setImagenSeleccionada] = useState("");
  const [pagoSeleccionado, setPagoSeleccionado] = useState<Pago | null>(null);
  
  // Filtros
  const [filtroCliente, setFiltroCliente] = useState<Option | null>(null);
  const [filtroMes, setFiltroMes] = useState<Option | null>(null);
  const [filtroEstado, setFiltroEstado] = useState<Option | null>(null);
  
  // Opciones para los selects
  const [opcionesClientes, setOpcionesClientes] = useState<Option[]>([]);

  const opcionesMeses: Option[] = [
    { value: "01", label: "Enero" },
    { value: "02", label: "Febrero" },
    { value: "03", label: "Marzo" },
    { value: "04", label: "Abril" },
    { value: "05", label: "Mayo" },
    { value: "06", label: "Junio" },
    { value: "07", label: "Julio" },
    { value: "08", label: "Agosto" },
    { value: "09", label: "Septiembre" },
    { value: "10", label: "Octubre" },
    { value: "11", label: "Noviembre" },
    { value: "12", label: "Diciembre" }
  ];

  const opcionesEstado: Option[] = [
    { value: "Pendiente", label: "Pendiente" },
    { value: "Validado", label: "Validado" },
    { value: "Rechazado", label: "Rechazado" }
  ];

  useEffect(() => {
    // Datos simulados para pagos
    const datosPagos: Pago[] = [
      { 
        id: "P001", 
        clienteId: "C001", 
        clienteNombre: "Juan Pérez", 
        membresia: "Premium", 
        monto: 149.90, 
        fechaPago: "2025-01-02", 
        metodoPago: "Yape", 
        comprobante: "/src/images/ejemployape.png", 
        estado: "Validado" 
      },
      { 
        id: "P002", 
        clienteId: "C001", 
        clienteNombre: "Juan Pérez", 
        membresia: "Básico", 
        monto: 89.90, 
        fechaPago: "2025-02-23", 
        metodoPago: "Plin", 
        comprobante: "/src/images/ejemployape.png", 
        estado: "Pendiente" 
      },
      { 
        id: "P003", 
        clienteId: "C002", 
        clienteNombre: "María López", 
        membresia: "Gold", 
        monto: 249.90, 
        fechaPago: "2025-02-15", 
        metodoPago: "Transferencia", 
        comprobante: "/src/images/ejemployape.png", 
        estado: "Validado" 
      },
      { 
        id: "P004", 
        clienteId: "C003", 
        clienteNombre: "Carlos Ramos", 
        membresia: "Premium", 
        monto: 149.90, 
        fechaPago: "2025-01-14", 
        metodoPago: "Yape", 
        comprobante: "/src/images/ejemployape.png", 
        estado: "Rechazado" 
      },
      { 
        id: "P005", 
        clienteId: "C004", 
        clienteNombre: "Ana García", 
        membresia: "Básico", 
        monto: 89.90, 
        fechaPago: "2025-03-10", 
        metodoPago: "Efectivo", 
        comprobante: "/src/images/ejemployape.png", 
        estado: "Validado" 
      },
    ];

    setPagos(datosPagos);
    setPagosFiltrados(datosPagos);

    // Generar opciones para react-select (clientes únicos)
    const clientesUnicos = Array.from(new Set(datosPagos.map(pago => pago.clienteId)))
      .map(clienteId => {
        const cliente = datosPagos.find(p => p.clienteId === clienteId);
        return {
          value: clienteId,
          label: cliente ? cliente.clienteNombre : clienteId
        };
      });
    
    setOpcionesClientes(clientesUnicos);
  }, []);

  // Función para filtrar pagos
  useEffect(() => {
    let filtrados = [...pagos];
    
    // Filtrar por cliente
    if (filtroCliente) {
      filtrados = filtrados.filter(pago => 
        pago.clienteId === filtroCliente.value
      );
    }
    
    // Filtrar por mes
    if (filtroMes) {
      filtrados = filtrados.filter(pago => 
        pago.fechaPago.substring(5, 7) === filtroMes.value
      );
    }
    
    // Filtrar por estado
    if (filtroEstado) {
      filtrados = filtrados.filter(pago => 
        pago.estado === filtroEstado.value
      );
    }
    
    setPagosFiltrados(filtrados);
  }, [filtroCliente, filtroMes, filtroEstado, pagos]);

  // Función para limpiar los filtros
  const limpiarFiltros = () => {
    setFiltroCliente(null);
    setFiltroMes(null);
    setFiltroEstado(null);
    setPagosFiltrados(pagos);
  };

  // Función para generar PDF
  const generarPDF = () => {
    const doc = new jsPDF();
    
    doc.text("Historial de Pagos", 20, 10);
    autoTable(doc, {
      head: [["Cliente", "Membresía", "Monto", "Fecha", "Método de Pago", "Estado"]],
      body: pagosFiltrados.map((p) => [
        p.clienteNombre, 
        p.membresia, 
        `S/ ${p.monto.toFixed(2)}`, 
        p.fechaPago, 
        p.metodoPago,
        p.estado
      ]),
    });

    doc.save(`historial_pagos_${new Date().toISOString().split('T')[0]}.pdf`);
  };

  // Función para abrir el modal con la imagen
  const abrirModal = (pago: Pago) => {
    setImagenSeleccionada(pago.comprobante);
    setPagoSeleccionado(pago);
    setModalIsOpen(true);
  };

  // Función para cerrar el modal
  const cerrarModal = () => {
    setModalIsOpen(false);
    setImagenSeleccionada("");
    setPagoSeleccionado(null);
  };

  // Función para validar un pago
  const validarPago = () => {
    if (pagoSeleccionado) {
      // Actualizar el estado del pago a "Validado"
      setPagos(prevPagos => 
        prevPagos.map(p => 
          p.id === pagoSeleccionado.id 
            ? {...p, estado: "Validado"} 
            : p
        )
      );
      cerrarModal();
    }
  };

  // Función para rechazar un pago
  const rechazarPago = () => {
    if (pagoSeleccionado) {
      // Actualizar el estado del pago a "Rechazado"
      setPagos(prevPagos => 
        prevPagos.map(p => 
          p.id === pagoSeleccionado.id 
            ? {...p, estado: "Rechazado"} 
            : p
        )
      );
      cerrarModal();
    }
  };

  // Función para formatear la fecha
  const formatearFecha = (fecha: string): string => {
    const [año, mes, dia] = fecha.split('-');
    return `${dia}/${mes}/${año}`;
  };

  // Obtener el color de fondo según el estado del pago
  const getEstadoColor = (estado: string): string => {
    switch (estado) {
      case "Validado":
        return "bg-green-100 text-green-800";
      case "Rechazado":
        return "bg-red-100 text-red-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
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
  const customModalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '90%',
      maxHeight: '90%',
      padding: '20px',
      borderRadius: '8px'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    }
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-gray-800">Historial de Pagos</h2>
      
      {/* Botón de exportar PDF */}
      <button 
        onClick={generarPDF} 
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 mb-6 rounded-md transition-colors duration-200 flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Exportar PDF
      </button>
      
      {/* Filtros de pagos */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 bg-gray-100 p-4 rounded-md">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Cliente</label>
          <Select
            styles={customStyles}
            isClearable
            placeholder="Filtrar por cliente..."
            options={opcionesClientes}
            value={filtroCliente}
            onChange={(selectedOption) => setFiltroCliente(selectedOption)}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mes</label>
          <Select
            styles={customStyles}
            isClearable
            placeholder="Filtrar por mes..."
            options={opcionesMeses}
            value={filtroMes}
            onChange={(selectedOption) => setFiltroMes(selectedOption)}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
          <Select
            styles={customStyles}
            isClearable
            placeholder="Filtrar por estado..."
            options={opcionesEstado}
            value={filtroEstado}
            onChange={(selectedOption) => setFiltroEstado(selectedOption)}
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
      
      {/* Tabla de pagos */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse rounded-md overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left">Cliente</th>
              <th className="p-3 text-left">Membresía</th>
              <th className="p-3 text-right">Monto</th>
              <th className="p-3 text-left">Fecha de Pago</th>
              <th className="p-3 text-left">Método de Pago</th>
              <th className="p-3 text-center">Estado</th>
              <th className="p-3 text-center">Comprobante</th>
            </tr>
          </thead>
          <tbody>
            {pagosFiltrados.length > 0 ? (
              pagosFiltrados.map((pago, index) => (
                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50`}>
                  <td className="p-3">{pago.clienteNombre}</td>
                  <td className="p-3">
                    <span className={`py-1 px-2 rounded-full text-xs font-medium
                      ${pago.membresia === "Premium" ? "bg-purple-100 text-purple-800" : 
                        pago.membresia === "Gold" ? "bg-yellow-100 text-yellow-800" : 
                        "bg-blue-100 text-blue-800"}
                    `}>
                      {pago.membresia}
                    </span>
                  </td>
                  <td className="p-3 text-right font-medium">S/ {pago.monto.toFixed(2)}</td>
                  <td className="p-3">{formatearFecha(pago.fechaPago)}</td>
                  <td className="p-3">{pago.metodoPago}</td>
                  <td className="p-3 text-center">
                    <span className={`py-1 px-2 rounded-full text-xs font-medium ${getEstadoColor(pago.estado)}`}>
                      {pago.estado}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <button 
                      onClick={() => abrirModal(pago)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm transition-colors duration-200"
                    >
                      Ver comprobante
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="p-4 text-center text-gray-500">
                  No se encontraron pagos con los filtros seleccionados
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal para previsualizar comprobante */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={cerrarModal}
        style={customModalStyles}
        contentLabel="Vista previa del comprobante"
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Comprobante de Pago</h2>
            <button 
              onClick={cerrarModal}
              className="text-gray-500 hover:text-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex-grow overflow-hidden max-h-96 flex items-center justify-center bg-gray-100 rounded-md mb-4">
            <img 
              src={imagenSeleccionada} 
              alt="Comprobante de pago" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
          
          {pagoSeleccionado && pagoSeleccionado.estado === "Pendiente" && (
            <div className="flex justify-end space-x-4">
              <button 
                onClick={rechazarPago}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
              >
                Rechazar Pago
              </button>
              <button 
                onClick={validarPago}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
              >
                Validar Pago
              </button>
            </div>
          )}
          
          {pagoSeleccionado && pagoSeleccionado.estado !== "Pendiente" && (
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="font-medium">
                Este pago ya ha sido {pagoSeleccionado.estado.toLowerCase()}
              </p>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default HistorialPagos;