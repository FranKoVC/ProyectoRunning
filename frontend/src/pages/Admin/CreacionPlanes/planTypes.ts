export interface Beneficio {
    id: string;
    nombre: string;
    descripcion: string;
    empresaId: string;
    activo: boolean;
  }
  
  export interface Empresa {
    id: string;
    nombre: string;
    beneficios: Beneficio[];
  }
  
  export interface Promocion {
    id: string;
    titulo: string;
    descripcion: string;
  }
  
  export interface Plan {
    id: string;
    nombre: string;
    precio: number;
    duracion: "1 mes" | "2 meses" | "3 meses" | "anual";
    tipo: "basico" | "premium";
    color: string;
    empresas: Empresa[];
    promociones: Promocion[];
    terminosCondiciones: string;
    activo: boolean;
  }
  
  export interface PlanFormData {
    nombre: string;
    precio: number;
    duracion: "1 mes" | "2 meses" | "3 meses" | "anual";
    tipo: "basico" | "premium";
    color: string;
    empresasSeleccionadas: string[];
    promociones: Promocion[];
    terminosCondiciones: string;
  }