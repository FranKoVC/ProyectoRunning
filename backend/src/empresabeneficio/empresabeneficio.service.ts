import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmpresaBeneficio } from '../entities/EmpresaBeneficio';

@Injectable()
export class EmpresaBeneficioService {
    constructor(
        @InjectRepository(EmpresaBeneficio)
        private readonly empresaBeneficioRepository: Repository<EmpresaBeneficio>,
    ) {}

    async create(empresaBeneficio: EmpresaBeneficio): Promise<EmpresaBeneficio> {
        const newEmpresaBeneficio = this.empresaBeneficioRepository.create(empresaBeneficio);
        return await this.empresaBeneficioRepository.save(newEmpresaBeneficio);
    }
    
    async findAll(): Promise<EmpresaBeneficio[]> {
        return await this.empresaBeneficioRepository.find();
    }
}
