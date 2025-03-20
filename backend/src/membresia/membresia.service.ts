import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Membresia } from '../entities/Membresia';

@Injectable()
export class MembresiaService {
    constructor(
        @InjectRepository(Membresia)
        private readonly membresiaRepository: Repository<Membresia>,
    ) {}

    async create(membresia: Membresia): Promise<Membresia> {
        const newMembresia = this.membresiaRepository.create(membresia);
        return await this.membresiaRepository.save(newMembresia);
    }
    
    async findAll(): Promise<Membresia[]> {
        return await this.membresiaRepository.find();
    }
}
