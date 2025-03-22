import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/Usuario';
import { Rol } from '../entities/Rol';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,

        @InjectRepository(Rol)
        private readonly rolRepository: Repository<Rol>
    ) {}

    async createUser(correo: string, contrasena: string, idRol: number, celular: string, estado: string, foto: string): Promise<Usuario> {
        // Validaciones básicas
        if (!correo) throw new BadRequestException('El correo es requerido.');
        if (!contrasena) throw new BadRequestException('La contraseña es requerida.');
        if (!idRol) throw new BadRequestException('El rol es requerido.');

        // Verificar si el usuario ya existe
        const existingUser = await this.usuarioRepository.findOne({ where: { correo } });
        if (existingUser) throw new BadRequestException('El correo ya está registrado.');

        // Verificar si el rol existe
        const rol = await this.rolRepository.findOne({ where: { idRol } });
        if (!rol) throw new BadRequestException('El rol especificado no existe.');

        // Crear usuario
        const newUsuario = this.usuarioRepository.create({
            correo,
            contrasena,
            celular,
            foto,
            fechaCreacion: new Date(),
            estado,
            idRol: rol
        });

        return await this.usuarioRepository.save(newUsuario);
    }
    
    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find({ relations: ['idRol'] });
    }

    async findByEmail(email: string): Promise<Usuario | null> {
        return await this.usuarioRepository.findOne({ where: { correo: email },
        relations: ['idRol'] });
    }
}
