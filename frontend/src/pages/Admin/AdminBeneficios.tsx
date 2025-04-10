import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TablaBeneficios from "../../components/TablaBeneficios";
import FormularioBeneficio from "../../components/FormularioBeneficio";

// Interfaces
export interface Empresa {
  id: string;
  nombre: string;
  categoria: string;
}

export interface Beneficio {
  id: string;
  titulo: string;
  porcentajeDescuento: number;
  descripcion: string;
  terminosCondiciones: string;
  imagenUrl: string;
  empresaId: string;
  nombreEmpresa: string;
  categoriaEmpresa: string;
}

// Datos de ejemplo
const empresasEjemplo: Empresa[] = [
  { id: "1", nombre: "Loco Burguer", categoria: "Hamburguesería" },
  { id: "2", nombre: "Pizza Haven", categoria: "Pizzería" },
  { id: "3", nombre: "Café Delicia", categoria: "Cafetería" }
];

const beneficiosEjemplo: Beneficio[] = [
  { 
    id: "1", 
    titulo: "25% descuento", 
    porcentajeDescuento: 25,
    descripcion: "25% de descuento en hamburguesas regulares",
    terminosCondiciones: "Válido de lunes a viernes. No acumulable con otras promociones.",
    imagenUrl: "/images/burger-discount.jpg",
    empresaId: "1",
    nombreEmpresa: "Loco Burguer", 
    categoriaEmpresa: "Hamburguesería"
  },
  { 
    id: "2", 
    titulo: "2x1 en bebidas", 
    porcentajeDescuento: 50,
    descripcion: "2x1 en bebidas todos los jueves",
    terminosCondiciones: "Válido solo los jueves. Aplica a bebidas del mismo valor.",
    imagenUrl: "/images/drinks-promo.jpg",
    empresaId: "1",
    nombreEmpresa: "Loco Burguer", 
    categoriaEmpresa: "Hamburguesería"
  },
  { 
    id: "3", 
    titulo: "Pizza familiar a mitad de precio", 
    porcentajeDescuento: 50,
    descripcion: "50% de descuento en pizzas familiares",
    terminosCondiciones: "Válido los martes. No incluye adicionales ni bebidas.",
    imagenUrl: "/images/pizza-discount.jpg",
    empresaId: "2",
    nombreEmpresa: "Pizza Haven", 
    categoriaEmpresa: "Pizzería"
  }
];

const AdminBeneficios: React.FC = () => {
  // const navigate = useNavigate();
  const [beneficios, setBeneficios] = useState<Beneficio[]>(beneficiosEjemplo);
  const [empresas] = useState<Empresa[]>(empresasEjemplo);
  const [modo, setModo] = useState<'lista' | 'crear' | 'editar'>('lista');
  const [beneficioSeleccionado, setBeneficioSeleccionado] = useState<Beneficio | null>(null);

  // Función para agregar un nuevo beneficio
  const agregarBeneficio = (nuevoBeneficio: Beneficio) => {
    // En un caso real, aquí se haría una llamada a la API
    nuevoBeneficio.id = (beneficios.length + 1).toString();
    
    // Obtener datos de la empresa seleccionada
    const empresaSeleccionada = empresas.find(e => e.id === nuevoBeneficio.empresaId);
    if (empresaSeleccionada) {
      nuevoBeneficio.nombreEmpresa = empresaSeleccionada.nombre;
      nuevoBeneficio.categoriaEmpresa = empresaSeleccionada.categoria;
    }
    
    setBeneficios([...beneficios, nuevoBeneficio]);
    setModo('lista');
  };

  // Función para actualizar un beneficio
  const actualizarBeneficio = (beneficioActualizado: Beneficio) => {
    // En un caso real, aquí se haría una llamada a la API
    const nuevaLista = beneficios.map(b => 
      b.id === beneficioActualizado.id ? beneficioActualizado : b
    );
    setBeneficios(nuevaLista);
    setModo('lista');
  };

  // Función para eliminar un beneficio
  const eliminarBeneficio = (id: string) => {
    // En un caso real, aquí se haría una llamada a la API
    if (window.confirm("¿Está seguro que desea eliminar este beneficio?")) {
      const nuevaLista = beneficios.filter(b => b.id !== id);
      setBeneficios(nuevaLista);
    }
  };

  // Función para seleccionar un beneficio para editar
  const editarBeneficio = (id: string) => {
    const beneficio = beneficios.find(b => b.id === id);
    if (beneficio) {
      setBeneficioSeleccionado(beneficio);
      setModo('editar');
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-800">Administración de Beneficios</h1>
          {modo === 'lista' && (
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300"
              onClick={() => setModo('crear')}
            >
              Crear Nuevo Beneficio
            </button>
          )}
        </div>
        
        {modo === 'lista' && (
          <TablaBeneficios 
            beneficios={beneficios} 
            onEditar={editarBeneficio} 
            onEliminar={eliminarBeneficio}
          />
        )}
        
        {(modo === 'crear' || modo === 'editar') && (
          <FormularioBeneficio 
            empresas={empresas}
            beneficio={beneficioSeleccionado}
            onSubmit={modo === 'crear' ? agregarBeneficio : actualizarBeneficio}
            onCancel={() => {
              setModo('lista');
              setBeneficioSeleccionado(null);
            }}
            modo={modo}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default AdminBeneficios;

