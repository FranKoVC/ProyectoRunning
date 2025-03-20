import {
  Column,
  Entity,
  Index,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Permiso } from "./Permiso";
import { Usuario } from "./Usuario";

@Index("rol_pkey", ["idRol"], { unique: true })
@Entity("rol", { schema: "public" })
export class Rol {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_rol" })
  idRol: number;

  @Column("character varying", { name: "nombre", length: 50 })
  nombre: string;

  @ManyToMany(() => Permiso, (permiso) => permiso.rols)
  permisos: Permiso[];

  @OneToMany(() => Usuario, (usuario) => usuario.idRol)
  usuarios: Usuario[];
}
