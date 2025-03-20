import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permiso } from '../entities/Permiso';
import { PermisoService } from './permiso.service';
import { PermisoController } from './permiso.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Permiso])],
  providers: [PermisoService],
  controllers: [PermisoController]
})
export class PermisoModule {}
