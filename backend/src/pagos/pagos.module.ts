import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pagos } from '../entities/Pagos';
import { PagosService } from './pagos.service';
import { PagosController } from './pagos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Pagos])],
  providers: [PagosService],
  controllers: [PagosController]
})
export class PagosModule {}
