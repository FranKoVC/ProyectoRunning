import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { EmpresaBeneficio } from "./EmpresaBeneficio";
import { Plan } from "./Plan";

@Index("plan_beneficio_pkey", ["idBeneficio", "idEmpresa", "idPlan"], {
  unique: true,
})
@Entity("plan_beneficio", { schema: "public" })
export class PlanBeneficio {
  @Column("integer", { primary: true, name: "id_plan" })
  idPlan: number;

  @Column("integer", { primary: true, name: "id_beneficio" })
  idBeneficio: number;

  @Column("integer", { primary: true, name: "id_empresa" })
  idEmpresa: number;

  @ManyToOne(
    () => EmpresaBeneficio,
    (empresaBeneficio) => empresaBeneficio.planBeneficios
  )
  @JoinColumn([
    { name: "id_beneficio", referencedColumnName: "idBeneficio" },
    { name: "id_empresa", referencedColumnName: "idEmpresa" },
  ])
  empresaBeneficio: EmpresaBeneficio;

  @ManyToOne(() => Plan, (plan) => plan.planBeneficios)
  @JoinColumn([{ name: "id_plan", referencedColumnName: "idPlan" }])
  idPlan2: Plan;
}
