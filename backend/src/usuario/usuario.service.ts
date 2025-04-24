import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, QueryRunner } from 'typeorm';
import { Usuario } from '../entities/Usuario';
import { Rol } from '../entities/Rol';
import { CreateUserDto } from '../dto/CreateUserDto';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,

        @InjectRepository(Rol)
        private readonly rolRepository: Repository<Rol>
    ) {}

    async createUser(
        createUserDto: CreateUserDto,
        queryRunner?: QueryRunner
    ): Promise<Usuario> {
        // Valores por defecto
        const { 
            estado = 'activo',
            foto = 'default.jpg',
            ...rest 
        } = createUserDto;

        // Validar campos obligatorios
        if (!rest.correo || !rest.contrasena || !rest.idRol || !rest.celular) {
            throw new BadRequestException('Campos requeridos: correo, contrasena, idRol, celular');
        }

        // Verificar usuario existente
        const existingUser = await this.usuarioRepository.findOne({ 
            where: { correo: rest.correo } 
        });
        if (existingUser) {
            throw new BadRequestException('El correo ya está registrado');
        }

        // Validar rol
        const rol = await this.rolRepository.findOne({ 
            where: { idRol: rest.idRol } 
        });
        if (!rol) {
            throw new BadRequestException('Rol no válido');
        }

        // Crear entidad
        const newUsuario = this.usuarioRepository.create({
            ...rest,
            estado,
            foto,
            fechaCreacion: new Date(),
            idRol: rol
        });

        // Guardar con o sin transacción
        if (queryRunner) {
            return await queryRunner.manager.save(Usuario, newUsuario);
        }
        return await this.usuarioRepository.save(newUsuario);
    }
    
    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find({ relations: ['idRol'] });
    }

    async findByEmail(email: string): Promise<Usuario | null> {
        return await this.usuarioRepository.findOne({ 
            where: { correo: email },
            relations: ['idRol'] 
        });
    }
}