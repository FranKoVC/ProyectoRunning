import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresaBeneficio } from '../entities/EmpresaBeneficio';
import { EmpresaBeneficioService } from './empresabeneficio.service';
import { EmpresaBeneficioController } from './empresabeneficio.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EmpresaBeneficio])],
  providers: [EmpresaBeneficioService],
  controllers: [EmpresaBeneficioController]
})
export class EmpresabeneficioModule {}
