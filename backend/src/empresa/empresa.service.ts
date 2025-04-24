import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, QueryRunner } from 'typeorm';
import { Empresa } from '../entities/Empresa';

@Injectable()
export class EmpresaService {
  constructor(
    @InjectRepository(Empresa)
    private readonly empresaRepository: Repository<Empresa>,
  ) {}

  async create(
    empresaData: Partial<Empresa>,
    queryRunner?: QueryRunner
  ): Promise<Empresa> {
    const newEmpresa = this.empresaRepository.create(empresaData);
    
    if (queryRunner) {
      return await queryRunner.manager.save(Empresa, newEmpresa);
    }
    return await this.empresaRepository.save(newEmpresa);
  }

  async findAll(): Promise<Empresa[]> {
    return await this.empresaRepository.find({ relations: ['idUsuario'] });
  }
}