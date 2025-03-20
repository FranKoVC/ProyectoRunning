import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permiso } from '../entities/Permiso';

@Injectable()
export class PermisoService {
    constructor(
        @InjectRepository(Permiso)
        private readonly permisoRepository: Repository<Permiso>,
    ) {}

    async create(permiso: Permiso): Promise<Permiso> {
        const newPermiso = this.permisoRepository.create(permiso);
        return await this.permisoRepository.save(newPermiso);
    }
    
    async findAll(): Promise<Permiso[]> {
        return await this.permisoRepository.find();
    }
}
