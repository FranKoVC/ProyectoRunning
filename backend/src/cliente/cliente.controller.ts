import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from '../entities/Cliente';

@Controller('cliente')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) {}
    
    @Get()
    async findAll(): Promise<Cliente[]> {
        return this.clienteService.findAll();
    }
    
    @Post()
    async create(@Body() cliente: Cliente): Promise<Cliente> {
        return this.clienteService.create(cliente);
    }
}
