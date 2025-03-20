import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrador } from '../entities/Administrador';
import { AdministradorService } from './administrador.service';
import { AdministradorController } from './administrador.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Administrador])],
  providers: [AdministradorService],
  controllers: [AdministradorController]
})
export class AdministradorModule {}
