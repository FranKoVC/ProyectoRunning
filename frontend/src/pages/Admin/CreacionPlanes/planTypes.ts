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

export type DuracionPlan = "1 mes" | "2 meses" | "3 meses" | "anual";
export type TipoPlan = "basico" | "premium";

export interface Plan {
  id: string;
  nombre: string;
  precio: number;
  duracion: DuracionPlan;
  tipo: TipoPlan;
  color: string;
  empresas: Empresa[];
  promociones: Promocion[];
  terminosCondiciones: string;
  activo: boolean;
}

export interface PlanFormData {
  nombre: string;
  precio: number;
  duracion: DuracionPlan;
  tipo: TipoPlan;
  color: string;
  empresasSeleccionadas: string[];
  beneficiosSeleccionados: string[];
  promociones: Promocion[];
  terminosCondiciones: string;
}