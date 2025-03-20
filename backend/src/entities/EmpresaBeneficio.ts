import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Empresa } from "./Empresa";
import { PlanBeneficio } from "./PlanBeneficio";
import { Visita } from "./Visita";

@Index("empresa_beneficio_pkey", ["idBeneficio", "idEmpresa"], { unique: true })
@Entity("empresa_beneficio", { schema: "public" })
export class EmpresaBeneficio {
  @Column("integer", { primary: true, name: "id_beneficio" })
  idBeneficio: number;

  @Column("character varying", { name: "información", length: 100 })
  informaciN: string;

  @Column("integer", { primary: true, name: "id_empresa" })
  idEmpresa: number;

  @Column("character varying", { name: "terminos", length: 100 })
  terminos: string;

  @Column("numeric", { name: "descuento", precision: 5, scale: 2 })
  descuento: string;

  @ManyToOne(() => Empresa, (empresa) => empresa.empresaBeneficios)
  @JoinColumn([{ name: "id_empresa", referencedColumnName: "idEmpresa" }])
  idEmpresa2: Empresa;

  @OneToMany(
    () => PlanBeneficio,
    (planBeneficio) => planBeneficio.empresaBeneficio
  )
  planBeneficios: PlanBeneficio[];

  @OneToMany(() => Visita, (visita) => visita.empresaBeneficio)
  visitas: Visita[];
}
