import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/Usuario';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
    ) {}

    async create(usuario: Usuario): Promise<Usuario> {
        const newUsuario = this.usuarioRepository.create(usuario);
        return await this.usuarioRepository.save(newUsuario);
    }
    
    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find();
    }
}
