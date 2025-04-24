import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../entities/Usuario';
import { CreateUserDto } from '../dto/CreateUserDto';

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}
    
    @Get()
    async findAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }
    
    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<Usuario> {
        return this.usuarioService.createUser(createUserDto);
    }
}