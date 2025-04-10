import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Administrador } from './entities/Administrador';
import { Cliente } from './entities/Cliente';
import { Empresa } from './entities/Empresa';
import { EmpresaBeneficio } from './entities/EmpresaBeneficio';
import { PlanBeneficio } from './entities/PlanBeneficio';
import { Rol } from './entities/Rol';
import { Usuario } from './entities/Usuario';
import { Visita } from './entities/Visita';
import { Membresia } from './entities/Membresia';
import { Pagos } from './entities/Pagos';
import { TipoPago } from './entities/TipoPago';
import { Plan } from './entities/Plan';
import { Permiso } from './entities/Permiso';
import { AdministradorModule } from './administrador/administrador.module';
import { ClienteModule } from './cliente/cliente.module';
import { EmpresaModule } from './empresa/empresa.module';
import { EmpresabeneficioModule } from './empresabeneficio/empresabeneficio.module';
import { MembresiaModule } from './membresia/membresia.module';
import { PagosModule } from './pagos/pagos.module';
import { PermisoModule } from './permiso/permiso.module';
import { PlanModule } from './plan/plan.module';
import { PlanbeneficioModule } from './planbeneficio/planbeneficio.module';
import { RolModule } from './rol/rol.module';
import { TipopagoModule } from './tipopago/tipopago.module';
import { UsuarioModule } from './usuario/usuario.module';
import { VisitaModule } from './visita/visita.module';
import { AuthModule } from './auth/auth.module';
import * as crypto from 'crypto';

// Polyfill para crypto (añade esto al inicio del archivo)
global.crypto = {
  randomUUID: () => crypto.randomUUID()
} as any;

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Habilita el uso de variables de entorno
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        url: config.get('DATABASE_URL'),
        ssl: config.get('NODE_ENV') === 'production' ? { 
          rejectUnauthorized: false 
        } : false,
        entities: [
          Administrador,
          Cliente,
          Empresa,
          EmpresaBeneficio,
          PlanBeneficio,
          Rol,
          Usuario,
          Visita,
          Membresia,
          Pagos,
          TipoPago,
          Plan,
          Permiso,
        ],
        synchronize: config.get('NODE_ENV') !== 'production', // Solo en desarrollo
        logging: true, // Habilita logs de SQL (opcional)
      }),
      inject: [ConfigService],
    }),
    AdministradorModule,
    ClienteModule,
    EmpresaModule,
    EmpresabeneficioModule,
    MembresiaModule,
    PagosModule,
    PermisoModule,
    PlanModule,
    PlanbeneficioModule,
    RolModule,
    TipopagoModule,
    UsuarioModule,
    VisitaModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}