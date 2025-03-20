import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { EmpresaBeneficio } from "./EmpresaBeneficio";
import { Cliente } from "./Cliente";

@Index("visita_pkey", ["idCliente", "idEmpresa", "idVisita"], { unique: true })
@Entity("visita", { schema: "public" })
export class Visita {
  @Column("integer", { primary: true, name: "id_visita" })
  idVisita: number;

  @Column("timestamp without time zone", { name: "fechavisita" })
  fechavisita: Date;

  @Column("integer", { primary: true, name: "id_cliente" })
  idCliente: number;

  @Column("integer", { primary: true, name: "id_empresa" })
  idEmpresa: number;

  @Column("money", { name: "monto" })
  monto: string;

  @ManyToOne(
    () => EmpresaBeneficio,
    (empresaBeneficio) => empresaBeneficio.visitas
  )
  @JoinColumn([
    { name: "id_beneficio", referencedColumnName: "idBeneficio" },
    { name: "id_empresa", referencedColumnName: "idEmpresa" },
  ])
  empresaBeneficio: EmpresaBeneficio;

  @ManyToOne(() => Cliente, (cliente) => cliente.visitas)
  @JoinColumn([{ name: "id_cliente", referencedColumnName: "idCliente" }])
  idCliente2: Cliente;
}
