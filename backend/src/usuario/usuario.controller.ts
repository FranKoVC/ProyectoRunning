import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../entities/Usuario';

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}
    
    @Get()
    async findAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }
    
    @Post()
    async create(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.create(usuario);
    }
}
