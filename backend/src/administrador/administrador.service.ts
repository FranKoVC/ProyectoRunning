import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Administrador } from '../entities/Administrador';

@Injectable()
export class AdministradorService {
    constructor(
        @InjectRepository(Administrador)
        private readonly administradorRepository: Repository<Administrador>,
    ) {}

    async create(administrador: Administrador): Promise<Administrador> {
        const newAdministrador = this.administradorRepository.create(administrador);
        return await this.administradorRepository.save(newAdministrador);
    }
    
    async findAll(): Promise<Administrador[]> {
        return await this.administradorRepository.find();
    }
    
}
