import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Administrador } from "./Administrador";
import { Cliente } from "./Cliente";
import { Empresa } from "./Empresa";
import { Rol } from "./Rol";

@Index("usuario_pkey", ["idUsuario"], { unique: true })
@Entity("usuario", { schema: "public" })
export class Usuario {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_usuario" })
  idUsuario: number;

  @Column("character varying", { name: "correo", length: 70 })
  correo: string;

  @Column("character varying", { name: "contraseña", length: 50 })
  contraseA: string;

  @Column("timestamp without time zone", { name: "fecha_creacion" })
  fechaCreacion: Date;

  @Column("character varying", { name: "celular", length: 20 })
  celular: string;

  @Column("character varying", { name: "foto", nullable: true, length: 255 })
  foto: string | null;

  @Column("character varying", { name: "estado", length: 15 })
  estado: string;

  @OneToMany(() => Administrador, (administrador) => administrador.idUsuario)
  administradors: Administrador[];

  @OneToMany(() => Cliente, (cliente) => cliente.idUsuario)
  clientes: Cliente[];

  @OneToMany(() => Empresa, (empresa) => empresa.idUsuario)
  empresas: Empresa[];

  @ManyToOne(() => Rol, (rol) => rol.usuarios)
  @JoinColumn([{ name: "id_rol", referencedColumnName: "idRol" }])
  idRol: Rol;
}
