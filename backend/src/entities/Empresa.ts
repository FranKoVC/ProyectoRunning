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
import { EmpresaBeneficio } from "./EmpresaBeneficio";

@Index("empresa_pkey", ["idEmpresa"], { unique: true })
@Entity("empresa", { schema: "public" })
export class Empresa {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_empresa" })
  idEmpresa: number;

  @Column("character", { name: "ruc", length: 9 })
  ruc: string;

  @Column("character varying", { name: "razonsocial", length: 50 })
  razonsocial: string;

  @Column("character varying", { name: "contacto", length: 50 })
  contacto: string;

  @Column("character varying", { name: "ciudad", length: 50 })
  ciudad: string;

  @Column("character varying", { name: "direccion", length: 50 })
  direccion: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.empresas)
  @JoinColumn([{ name: "id_usuario", referencedColumnName: "idUsuario" }])
  idUsuario: Usuario;

  @OneToMany(
    () => EmpresaBeneficio,
    (empresaBeneficio) => empresaBeneficio.idEmpresa2
  )
  empresaBeneficios: EmpresaBeneficio[];
}
