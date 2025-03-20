import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlanBeneficio } from '../entities/PlanBeneficio';

@Injectable()
export class PlanBeneficioService {
    constructor(
        @InjectRepository(PlanBeneficio)
        private readonly planBeneficioRepository: Repository<PlanBeneficio>,
    ) {}

    async create(planBeneficio: PlanBeneficio): Promise<PlanBeneficio> {
        const newPlanBeneficio = this.planBeneficioRepository.create(planBeneficio);
        return await this.planBeneficioRepository.save(newPlanBeneficio);
    }
    
    async findAll(): Promise<PlanBeneficio[]> {
        return await this.planBeneficioRepository.find();
    }
}
