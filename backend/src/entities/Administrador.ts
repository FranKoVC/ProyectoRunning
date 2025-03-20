import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Usuario } from "./Usuario";

@Index("administrador_pkey", ["idAdministrador"], { unique: true })
@Entity("administrador", { schema: "public" })
export class Administrador {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_administrador" })
  idAdministrador: number;

  @Column("character varying", { name: "nombre", nullable: true, length: 50 })
  nombre: string | null;

  @Column("character varying", { name: "apellido", nullable: true, length: 50 })
  apellido: string | null;

  @ManyToOne(() => Usuario, (usuario) => usuario.administradors)
  @JoinColumn([{ name: "id_usuario", referencedColumnName: "idUsuario" }])
  idUsuario: Usuario;
}
