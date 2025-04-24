import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../entities/Usuario';
import { Rol } from '../entities/Rol';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Usuario, Rol])],
    providers: [UsuarioService],
    controllers: [UsuarioController],
    exports: [UsuarioService, TypeOrmModule],
})
export class UsuarioModule {}