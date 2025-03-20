import { Controller, Get, Post, Body } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { Pagos } from '../entities/Pagos';

@Controller('pagos')
export class PagosController {
    constructor(private readonly pagosService: PagosService) {}
    
    @Get()
    async findAll(): Promise<Pagos[]> {
        return this.pagosService.findAll();
    }
    
    @Post()
    async create(@Body() pagos: Pagos): Promise<Pagos> {
        return this.pagosService.create(pagos);
    }
}
