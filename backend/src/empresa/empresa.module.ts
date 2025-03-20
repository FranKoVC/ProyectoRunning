import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa } from '../entities/Empresa';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Empresa])],
  providers: [EmpresaService],
  controllers: [EmpresaController]
})
export class EmpresaModule {}
