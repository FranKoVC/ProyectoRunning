import { Controller, Get, Post, Body } from '@nestjs/common';
import { MembresiaService } from './membresia.service';
import { Membresia } from '../entities/Membresia';

@Controller('membresia')
export class MembresiaController {
    constructor(private readonly membresiaService: MembresiaService) {}
    
    @Get()
    async findAll(): Promise<Membresia[]> {
        return this.membresiaService.findAll();
    }
    
    @Post()
    async create(@Body() membresia: Membresia): Promise<Membresia> {
        return this.membresiaService.create(membresia);
    }
}
