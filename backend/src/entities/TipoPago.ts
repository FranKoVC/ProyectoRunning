import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pagos } from "./Pagos";

@Index("tipo_pago_pkey", ["idTipo"], { unique: true })
@Entity("tipo_pago", { schema: "public" })
export class TipoPago {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_tipo" })
  idTipo: number;

  @Column("character varying", { name: "description" })
  description: string;

  @OneToMany(() => Pagos, (pagos) => pagos.idTipo)
  pagos: Pagos[];
}
