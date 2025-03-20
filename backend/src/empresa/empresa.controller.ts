import { Controller, Get, Post, Body } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { Empresa } from '../entities/Empresa';

@Controller('empresa')
export class EmpresaController {
    constructor(private readonly empresaService: EmpresaService) {}
    
    @Get()
    async findAll(): Promise<Empresa[]> {
        return this.empresaService.findAll();
    }
    
    @Post()
    async create(@Body() empresa: Empresa): Promise<Empresa> {
        return this.empresaService.create(empresa);
    }
}
