import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from '../entities/Cliente';

@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(Cliente)
        private readonly clienteRepository: Repository<Cliente>,
    ) {}

    async create(cliente: Cliente): Promise<Cliente> {
        const newCliente = this.clienteRepository.create(cliente);
        return await this.clienteRepository.save(newCliente);
    }
    
    async findAll(): Promise<Cliente[]> {
        return await this.clienteRepository.find();
    }
}
