import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Tipo de base de datos
      host: 'localhost', // Host de la base de datos
      port: 5432, // Puerto de PostgreSQL (por defecto es 5432)
      username: 'postgres', // Usuario de la base de datos
      password: 'password', // Contraseña del usuario
      database: 'ClubCoffee',// Nombre de la base de datos
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
      ], // Entidades de TypeORM (las veremos más adelante)
      synchronize: false, // Sincroniza automáticamente las entidades con la base de datos (solo para desarrollo)
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
