import { Controller, Get, Post, Body } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { Administrador } from '../entities/Administrador';

@Controller('administrador')
export class AdministradorController {
    constructor(private readonly administradorService: AdministradorService) {}
    
    @Get()
    async findAll(): Promise<Administrador[]> {
        return this.administradorService.findAll();
    }
    
    @Post()
    async create(@Body() administrador: Administrador): Promise<Administrador> {
        return this.administradorService.create(administrador);
    }
}
