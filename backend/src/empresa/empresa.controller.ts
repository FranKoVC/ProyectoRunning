import { 
    Controller, 
    Post, 
    UploadedFile, 
    UseInterceptors, 
    Body, 
    BadRequestException 
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { DataSource } from 'typeorm';
  import { EmpresaService } from './empresa.service';
  import { UsuarioService } from '../usuario/usuario.service';
  import { CreateEmpresaUsuarioDto } from '../dto/CreateEmpresaDto';
  
  @Controller('empresas')
  export class EmpresaController {
    constructor(
      private readonly empresaService: EmpresaService,
      private readonly usuarioService: UsuarioService,
      private readonly dataSource: DataSource
    ) {}
  
    @Post('/registro')
    @UseInterceptors(FileInterceptor('foto'))
    async registroCompleto(
      @UploadedFile() foto: Express.Multer.File,
      @Body() createDto: CreateEmpresaUsuarioDto
    ) {
      const queryRunner = this.dataSource.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();
  
      try {
        // 1. Crear Usuario
        const usuario = await this.usuarioService.createUser({
          correo: createDto.contacto,
          contrasena: createDto.ruc,
          idRol: 1, // Rol fijo para empresas
          celular: createDto.celular,
          foto: foto?.path || 'default.jpg'
        }, queryRunner);
  
        // 2. Crear Empresa
        const empresaData = {
          ruc: createDto.ruc,
          razonsocial: createDto.razonsocial,
          contacto: createDto.contacto,
          ciudad: createDto.ciudad,
          direccion: createDto.direccion,
          vigenciaInicio: new Date(createDto.vigenciaInicio),
          vigenciaFin: new Date(createDto.vigenciaFin),
          idUsuario: usuario
        };
  
        const empresa = await this.empresaService.create(empresaData, queryRunner);
        
        await queryRunner.commitTransaction();
        return { usuario, empresa };
        
      } catch (error) {
        await queryRunner.rollbackTransaction();
        throw new BadRequestException(error.message);
      } finally {
        await queryRunner.release();
      }
    }
  }