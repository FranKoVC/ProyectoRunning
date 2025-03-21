import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../entities/Usuario';

// DTO para validar la entrada de datos
class CreateUserDto {
    correo: string;
    contrasena: string;
    idRol: number;
}

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}
    
    @Get()
    async findAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }
    
    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<Usuario> {
        const { correo, contrasena, idRol } = createUserDto;

        if (!correo || !contrasena || !idRol) {
            throw new BadRequestException('Todos los campos son obligatorios.');
        }

        return this.usuarioService.createUser(correo, contrasena, idRol);
    }
}
