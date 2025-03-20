import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pagos } from '../entities/Pagos';

@Injectable()
export class PagosService {
    constructor(
        @InjectRepository(Pagos)
        private readonly pagosRepository: Repository<Pagos>,
    ) {}

    async create(pagos: Pagos): Promise<Pagos> {
        const newPagos = this.pagosRepository.create(pagos);
        return await this.pagosRepository.save(newPagos);
    }
    
    async findAll(): Promise<Pagos[]> {
        return await this.pagosRepository.find();
    }
}
