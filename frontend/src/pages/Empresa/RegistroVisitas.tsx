import { useState } from "react";
import { CheckCircle, AlertTriangle, Info, ShoppingBag } from "lucide-react";

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const RegistroVisita = () => {
  const [codigoCliente, setCodigoCliente] = useState("");
  interface Cliente {
    nombre: string;
    descuento: string;
    estado: string;
    ultimaVisita?: string;
    puntos?: number;
  }

  const [cliente, setCliente] = useState<Cliente | null>(null);
  const [montoCompra, setMontoCompra] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedBenefit, setSelectedBenefit] = useState<{ id: number; nombre: string; descripcion: string; } | null>(null);
  const [loading, setLoading] = useState(false);
  const [compraExitosa, setCompraExitosa] = useState(false);

  // Beneficios de ejemplo
  const beneficios = [
    { id: 1, nombre: "Descuento 15% en ropa", descripcion: "Válido en todas las prendas de temporada" },
    { id: 2, nombre: "2x1 en accesorios", descripcion: "Lleva dos accesorios y paga solo uno" },
    { id: 3, nombre: "Regalo sorpresa", descripcion: "Por compras mayores a $50" }
  ];

  const validarCliente = () => {
    setLoading(true);
    // Simulando una llamada a API
    setTimeout(() => {
      if (codigoCliente === "123456") {
        setCliente({ 
          nombre: "Juan Pérez", 
          descuento: "15%", 
          estado: "Activo",
          ultimaVisita: "15/03/2025",
          puntos: 450
        });
      } else if (codigoCliente === "654321") {
        setCliente({ 
          nombre: "María López", 
          descuento: "10%", 
          estado: "Activo",
          ultimaVisita: "10/03/2025",
          puntos: 320
        });
      } else {
        setCliente({ 
          nombre: "Cliente no identificado", 
          descuento: "", 
          estado: "Inactivo" 
        });
      }
      setLoading(false);
    }, 800);
  };

  const seleccionarBeneficio = (beneficio: { id: number; nombre: string; descripcion: string; }) => {
    setSelectedBenefit(beneficio);
  };

  const registrarCompra = () => {
    if (!cliente || cliente.estado !== "Activo" || !selectedBenefit || !montoCompra) return;
    
    setLoading(true);
    // Simulando procesamiento
    setTimeout(() => {
      setCompraExitosa(true);
      setLoading(false);
      
      // Restablecer después de mostrar mensaje de éxito
      setTimeout(() => {
        setCodigoCliente("");
        setMontoCompra("");
        setCliente(null);
        setSelectedBenefit(null);
        setCompraExitosa(false);
      }, 3000);
    }, 1000);
  };

  const resetForm = () => {
    setCodigoCliente("");
    setMontoCompra("");
    setCliente(null);
    setSelectedBenefit(null);
    setCompraExitosa(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Registro de Visita</h2>
          
          {!compraExitosa ? (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">Código del cliente:</label>
                <input
                  type="text"
                  value={codigoCliente}
                  onChange={(e) => setCodigoCliente(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="Ingrese el código"
                />
                <button
                  onClick={validarCliente}
                  disabled={loading}
                  className={`mt-2 w-full ${loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white py-2 rounded-lg transition`}
                >
                  {loading ? "Validando..." : "Validar Cliente"}
                </button>
              </div>

              {cliente && cliente.estado === "Activo" && (
                <div className="mb-4">
                  <div className="p-4 bg-green-100 text-green-700 rounded-lg flex flex-col items-start gap-2 mb-3">
                    <h3 className="font-bold text-lg">{cliente.nombre}</h3>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      <p>Estado: {cliente.estado}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      <p>Descuento base: {cliente.descuento}</p>
                    </div>
                    {cliente.ultimaVisita && (
                      <div className="flex items-center gap-2">
                        <Info className="w-5 h-5" />
                        <p>Última visita: {cliente.ultimaVisita}</p>
                      </div>
                    )}
                    {cliente.puntos && (
                      <div className="flex items-center gap-2">
                        <Info className="w-5 h-5" />
                        <p>Puntos acumulados: {cliente.puntos}</p>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2">Beneficios disponibles:</h3>
                  <div className="space-y-2 mb-3">
                    {beneficios.map(beneficio => (
                      <div 
                        key={beneficio.id}
                        onClick={() => seleccionarBeneficio(beneficio)}
                        className={`p-3 border rounded-lg cursor-pointer transition ${
                          selectedBenefit && selectedBenefit.id === beneficio.id 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <h4 className="font-medium">{beneficio.nombre}</h4>
                        <p className="text-sm text-gray-600">{beneficio.descripcion}</p>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setShowModal(true)}
                    className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition mb-3"
                  >
                    Ver Términos y Condiciones
                  </button>
                  
                  {selectedBenefit && (
                    <div className="mt-4">
                      <label className="block text-gray-700 font-medium mb-1">Monto consumido:</label>
                      <input
                        type="number"
                        value={montoCompra}
                        onChange={(e) => setMontoCompra(e.target.value)}
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                        placeholder="Ingrese el monto"
                      />
                      <button
                        onClick={registrarCompra}
                        disabled={loading || !montoCompra}
                        className={`mt-2 w-full ${
                          loading || !montoCompra ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'
                        } text-white py-2 rounded-lg transition`}
                      >
                        {loading ? "Procesando..." : "Confirmar Compra"}
                      </button>
                    </div>
                  )}
                </div>
              )}

              {cliente && cliente.estado === "Inactivo" && (
                <div className="p-4 bg-red-100 text-red-700 rounded-lg mt-2">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5" />
                    <p className="font-medium">Cliente Inactivo</p>
                  </div>
                  <p className="text-sm">Este cliente no tiene beneficios activos en este momento. Por favor, contacte con atención al cliente para más información.</p>
                  <button
                    onClick={resetForm}
                    className="mt-3 w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
                  >
                    Volver a intentar
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="p-6 bg-green-100 text-green-700 rounded-lg flex flex-col items-center gap-4">
              <ShoppingBag className="w-16 h-16" />
              <h3 className="text-xl font-bold text-center">¡Compra Exitosa!</h3>
              <p className="text-center">
                Se ha registrado la compra de {cliente?.nombre} por ${montoCompra} utilizando el beneficio "{selectedBenefit?.nombre}".
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Modal de Términos y Condiciones */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Términos y Condiciones</h3>
              <div className="overflow-y-auto max-h-96 mb-4 text-gray-700">
                <h4 className="font-bold mb-2">Uso de Beneficios</h4>
                <p className="mb-3">Los beneficios mostrados están sujetos a disponibilidad y solo pueden ser utilizados por clientes con estado Activo.</p>
                
                <h4 className="font-bold mb-2">Validez</h4>
                <p className="mb-3">Cada beneficio tiene un período de validez específico. Una vez vencido el período, el beneficio no podrá ser utilizado.</p>
                
                <h4 className="font-bold mb-2">Restricciones</h4>
                <p className="mb-3">Los beneficios no son acumulables entre sí. Solo se puede utilizar un beneficio por compra.</p>
                
                <h4 className="font-bold mb-2">Devoluciones</h4>
                <p className="mb-3">Las compras realizadas utilizando beneficios especiales están sujetas a políticas de devolución específicas. Consulte con el personal antes de realizar la compra.</p>
                
                <h4 className="font-bold mb-2">Modificaciones</h4>
                <p>La empresa se reserva el derecho de modificar, suspender o eliminar cualquier beneficio sin previo aviso.</p>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
};

export default RegistroVisita;