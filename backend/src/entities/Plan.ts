import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Membresia } from "./Membresia";
import { PlanBeneficio } from "./PlanBeneficio";

@Index("plan_pkey", ["idPlan"], { unique: true })
@Entity("plan", { schema: "public" })
export class Plan {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_plan" })
  idPlan: number;

  @Column("character varying", { name: "nombre", length: 50 })
  nombre: string;

  @Column("character varying", { name: "descripcion", length: 50 })
  descripcion: string;

  @Column("money", { name: "precio" })
  precio: string;

  @Column("integer", { name: "duracion_dias" })
  duracionDias: number;

  @Column("character varying", { name: "estado", length: 15 })
  estado: string;

  @OneToMany(() => Membresia, (membresia) => membresia.idPlan)
  membresias: Membresia[];

  @OneToMany(() => PlanBeneficio, (planBeneficio) => planBeneficio.idPlan2)
  planBeneficios: PlanBeneficio[];
}
