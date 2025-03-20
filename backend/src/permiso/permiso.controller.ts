import { Controller, Get, Post, Body } from '@nestjs/common';
import { PermisoService } from './permiso.service';
import { Permiso } from '../entities/Permiso';

@Controller('permiso')
export class PermisoController {
    constructor(private readonly permisoService: PermisoService) {}
    
    @Get()
    async findAll(): Promise<Permiso[]> {
        return this.permisoService.findAll();
    }
    
    @Post()
    async create(@Body() permiso: Permiso): Promise<Permiso> {
        return this.permisoService.create(permiso);
    }
}
