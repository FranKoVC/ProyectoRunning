import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Usuario } from "./Usuario";
import { Membresia } from "./Membresia";
import { Pagos } from "./Pagos";
import { Visita } from "./Visita";

@Index("cliente_pkey", ["idCliente"], { unique: true })
@Entity("cliente", { schema: "public" })
export class Cliente {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_cliente" })
  idCliente: number;

  @Column("character varying", { name: "apellidos", length: 50 })
  apellidos: string;

  @Column("timestamp without time zone", { name: "fechanacimiento" })
  fechanacimiento: Date;

  @Column("character", { name: "dni", length: 8 })
  dni: string;

  @Column("character varying", { name: "nombre", length: 50 })
  nombre: string;

  @Column("character varying", {
    name: "direccion",
    nullable: true,
    length: 50,
  })
  direccion: string | null;

  @ManyToOne(() => Usuario, (usuario) => usuario.clientes)
  @JoinColumn([{ name: "id_usuario", referencedColumnName: "idUsuario" }])
  idUsuario: Usuario;

  @OneToMany(() => Membresia, (membresia) => membresia.idCliente)
  membresias: Membresia[];

  @OneToMany(() => Pagos, (pagos) => pagos.idCliente)
  pagos: Pagos[];

  @OneToMany(() => Visita, (visita) => visita.idCliente2)
  visitas: Visita[];
}
