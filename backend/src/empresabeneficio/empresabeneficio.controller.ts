import { Controller, Get, Post, Body } from '@nestjs/common';
import { EmpresaBeneficioService } from './empresabeneficio.service';
import { EmpresaBeneficio } from '../entities/EmpresaBeneficio';

@Controller('empresabeneficio')
export class EmpresaBeneficioController {
    constructor(private readonly empresaBeneficioService: EmpresaBeneficioService) {}
    
    @Get()
    async findAll(): Promise<EmpresaBeneficio[]> {
        return this.empresaBeneficioService.findAll();
    }
    
    @Post()
    async create(@Body() empresaBeneficio: EmpresaBeneficio): Promise<EmpresaBeneficio> {
        return this.empresaBeneficioService.create(empresaBeneficio);
    }
}
