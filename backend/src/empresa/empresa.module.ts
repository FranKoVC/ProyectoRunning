import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Empresa } from '../entities/Empresa';
import { UsuarioService } from '../usuario/usuario.service';
import { UsuarioModule } from '../usuario/usuario.module';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { Usuario } from 'src/entities/Usuario';
import { Rol } from 'src/entities/Rol';

@Module({
  imports: [
    TypeOrmModule.forFeature([Empresa, Usuario, Rol]),
    UsuarioModule // Importar módulo de usuario
  ],
  providers: [
    EmpresaService,
    UsuarioService
  ],
  controllers: [EmpresaController]
})
export class EmpresaModule {}