import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  BeforeInsert,
} from "typeorm";
import * as bcrypt from 'bcrypt';
import { Administrador } from "./Administrador";
import { Cliente } from "./Cliente";
import { Empresa } from "./Empresa";
import { Rol } from "./Rol";

@Index("usuario_pkey", ["idUsuario"], { unique: true })
@Entity("usuario", { schema: "public" })
export class Usuario {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_usuario" })
  idUsuario: number;

  @Column("character varying", { name: "correo", length: 70, unique: true })
  correo: string;

  @Column("character varying", { name: "contrasena", length: 255 })
  contrasena: string;

  @Column("timestamp without time zone", { name: "fecha_creacion", default: () => "CURRENT_TIMESTAMP" })
  fechaCreacion: Date;

  @Column("character varying", { name: "celular", length: 20 })
  celular: string;

  @Column("character varying", { name: "foto", nullable: true, length: 255 })
  foto: string | null;

  @Column("character varying", { name: "estado", length: 15, default: "'activo'" })
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

  // 🔹 Método que se ejecuta antes de insertar un usuario
  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt(10);
    this.contrasena = await bcrypt.hash(this.contrasena, salt);
  }
}
