import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visita } from '../entities/Visita';
import { VisitaService } from './visita.service';
import { VisitaController } from './visita.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Visita])],
  providers: [VisitaService],
  controllers: [VisitaController]
})
export class VisitaModule {}
