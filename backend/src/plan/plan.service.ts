import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plan } from '../entities/Plan';

@Injectable()
export class PlanService {
    constructor(
        @InjectRepository(Plan)
        private readonly planRepository: Repository<Plan>,
    ) {}

    async create(plan: Plan): Promise<Plan> {
        const newPlan = this.planRepository.create(plan);
        return await this.planRepository.save(newPlan);
    }
    
    async findAll(): Promise<Plan[]> {
        return await this.planRepository.find();
    }
}
