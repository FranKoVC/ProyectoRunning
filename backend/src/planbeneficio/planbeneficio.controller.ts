import { Controller, Get, Post, Body } from '@nestjs/common';
import { PlanBeneficioService } from './planbeneficio.service';
import { PlanBeneficio } from '../entities/PlanBeneficio';

@Controller('planbeneficio')
export class PlanBeneficioController {
    constructor(private readonly planBeneficioService: PlanBeneficioService) {}
    
    @Get()
    async findAll(): Promise<PlanBeneficio[]> {
        return this.planBeneficioService.findAll();
    }
    
    @Post()
    async create(@Body() planBeneficio: PlanBeneficio): Promise<PlanBeneficio> {
        return this.planBeneficioService.create(planBeneficio);
    }
}
