import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from '../entities/Rol';

@Injectable()
export class RolService {
    constructor(
        @InjectRepository(Rol)
        private readonly rolRepository: Repository<Rol>,
    ) {}

    async create(rol: Rol): Promise<Rol> {
        const newRol = this.rolRepository.create(rol);
        return await this.rolRepository.save(newRol);
    }
    
    async findAll(): Promise<Rol[]> {
        return await this.rolRepository.find();
    }
}
