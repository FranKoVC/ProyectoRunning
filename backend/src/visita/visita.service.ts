import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Visita } from '../entities/Visita';

@Injectable()
export class VisitaService {
    constructor(
        @InjectRepository(Visita)
        private readonly visitaRepository: Repository<Visita>,
    ) {}

    async create(visita: Visita): Promise<Visita> {
        const newVisita = this.visitaRepository.create(visita);
        return await this.visitaRepository.save(newVisita);
    }
    
    async findAll(): Promise<Visita[]> {
        return await this.visitaRepository.find();
    }
}
