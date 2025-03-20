import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Rol } from "./Rol";

@Index("permiso_pkey", ["idPermiso"], { unique: true })
@Entity("permiso", { schema: "public" })
export class Permiso {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_permiso" })
  idPermiso: number;

  @Column("character varying", { name: "nombre", length: 50 })
  nombre: string;

  @Column("character varying", { name: "descripcion", length: 100 })
  descripcion: string;

  @Column("character varying", { name: "estado", length: 15 })
  estado: string;

  @ManyToMany(() => Rol, (rol) => rol.permisos)
  @JoinTable({
    name: "rol_permiso",
    joinColumns: [{ name: "id_permiso", referencedColumnName: "idPermiso" }],
    inverseJoinColumns: [{ name: "id_rol", referencedColumnName: "idRol" }],
    schema: "public",
  })
  rols: Rol[];
}
