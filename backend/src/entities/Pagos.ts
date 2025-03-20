import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cliente } from "./Cliente";
import { Membresia } from "./Membresia";
import { TipoPago } from "./TipoPago";

@Index("pagos_pkey", ["idPago"], { unique: true })
@Entity("pagos", { schema: "public" })
export class Pagos {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_pago" })
  idPago: number;

  @Column("money", { name: "monto" })
  monto: string;

  @Column("character varying", { name: "estado", length: 15 })
  estado: string;

  @Column("timestamp without time zone", { name: "fechapago" })
  fechapago: Date;

  @Column("character varying", { name: "nrooperacion", length: 15 })
  nrooperacion: string;

  @Column("character varying", { name: "fcomprobante", length: 255 })
  fcomprobante: string;

  @ManyToOne(() => Cliente, (cliente) => cliente.pagos)
  @JoinColumn([{ name: "id_cliente", referencedColumnName: "idCliente" }])
  idCliente: Cliente;

  @ManyToOne(() => Membresia, (membresia) => membresia.pagos)
  @JoinColumn([{ name: "id_membresía", referencedColumnName: "idMembresA" }])
  idMembresA: Membresia;

  @ManyToOne(() => TipoPago, (tipoPago) => tipoPago.pagos)
  @JoinColumn([{ name: "id_tipo", referencedColumnName: "idTipo" }])
  idTipo: TipoPago;
}
