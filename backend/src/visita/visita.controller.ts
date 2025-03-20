import { Controller, Get, Post, Body } from '@nestjs/common';
import { VisitaService } from './visita.service';
import { Visita } from '../entities/Visita';

@Controller('visita')
export class VisitaController {
    constructor(private readonly visitaService: VisitaService) {}
    
    @Get()
    async findAll(): Promise<Visita[]> {
        return this.visitaService.findAll();
    }
    
    @Post()
    async create(@Body() visita: Visita): Promise<Visita> {
        return this.visitaService.create(visita);
    }
}
