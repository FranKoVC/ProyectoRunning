import { Controller, Get, Post, Body } from '@nestjs/common';
import { PlanService } from './plan.service';
import { Plan } from '../entities/Plan';

@Controller('plan')
export class PlanController {
    constructor(private readonly planService: PlanService) {}
    
    @Get()
    async findAll(): Promise<Plan[]> {
        return this.planService.findAll();
    }
    
    @Post()
    async create(@Body() plan: Plan): Promise<Plan> {
        return this.planService.create(plan);
    }
}
