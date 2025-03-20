import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanBeneficio } from '../entities/PlanBeneficio';
import { PlanBeneficioService } from './planbeneficio.service';
import { PlanBeneficioController } from './planbeneficio.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PlanBeneficio])],
  providers: [PlanBeneficioService],
  controllers: [PlanBeneficioController]
})
export class PlanbeneficioModule {}
