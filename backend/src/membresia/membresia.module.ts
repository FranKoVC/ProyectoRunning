import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Membresia } from '../entities/Membresia';
import { MembresiaService } from './membresia.service';
import { MembresiaController } from './membresia.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Membresia])],
  providers: [MembresiaService],
  controllers: [MembresiaController]
})
export class MembresiaModule {}
