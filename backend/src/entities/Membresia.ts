import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cliente } from "./Cliente";
import { Plan } from "./Plan";
import { Pagos } from "./Pagos";

@Index("membresia_pkey", ["idMembresA"], { unique: true })
@Entity("membresia", { schema: "public" })
export class Membresia {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_membresía" })
  idMembresA: number;

  @Column("money", { name: "preciomembresia" })
  preciomembresia: string;

  @Column("character varying", { name: "codigo", length: 20 })
  codigo: string;

  @Column("timestamp without time zone", { name: "fechainicio" })
  fechainicio: Date;

  @Column("timestamp without time zone", { name: "fechafin" })
  fechafin: Date;

  @Column("character varying", { name: "estado", length: 15 })
  estado: string;

  @ManyToOne(() => Cliente, (cliente) => cliente.membresias)
  @JoinColumn([{ name: "id_cliente", referencedColumnName: "idCliente" }])
  idCliente: Cliente;

  @ManyToOne(() => Plan, (plan) => plan.membresias)
  @JoinColumn([{ name: "id_plan", referencedColumnName: "idPlan" }])
  idPlan: Plan;

  @OneToMany(() => Pagos, (pagos) => pagos.idMembresA)
  pagos: Pagos[];
}
