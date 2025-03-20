import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoPago } from '../entities/TipoPago';
import { TipopagoService } from './tipopago.service';
import { TipopagoController } from './tipopago.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TipoPago])],
  providers: [TipopagoService],
  controllers: [TipopagoController]
})
export class TipopagoModule {}
