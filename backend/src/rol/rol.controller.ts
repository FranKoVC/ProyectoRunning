import { Controller, Get, Post, Body } from '@nestjs/common';
import { RolService } from './rol.service';
import { Rol } from '../entities/Rol';

@Controller('rol')
export class RolController {
    constructor(private readonly rolService: RolService) {}
    
    @Get()
    async findAll(): Promise<Rol[]> {
        return this.rolService.findAll();
    }
    
    @Post()
    async create(@Body() rol: Rol): Promise<Rol> {
        return this.rolService.create(rol);
    }
}
