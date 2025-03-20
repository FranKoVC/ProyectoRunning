import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from '../entities/Empresa';

@Injectable()
export class EmpresaService {
    constructor(
        @InjectRepository(Empresa)
        private readonly empresaRepository: Repository<Empresa>,
    ) {}

    async create(empresa: Empresa): Promise<Empresa> {
        const newEmpresa = this.empresaRepository.create(empresa);
        return await this.empresaRepository.save(newEmpresa);
    }
    
    async findAll(): Promise<Empresa[]> {
        return await this.empresaRepository.find();
    }
}
