import { Controller, Get, Post, Body } from '@nestjs/common';
import { TipopagoService } from './tipopago.service';
import { TipoPago } from '../entities/TipoPago';

@Controller('tipopago')
export class TipopagoController {
    constructor(private readonly tipopagoService: TipopagoService) {}
    
    @Get()
    async findAll(): Promise<TipoPago[]> {
        return this.tipopagoService.findAll();
    }
    
    @Post()
    async create(@Body() tipopago: TipoPago): Promise<TipoPago> {
        return this.tipopagoService.create(tipopago);
    }
}
