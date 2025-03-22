import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/usuario.service'; // Asegúrate de tener un servicio de usuarios
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsuarioService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    console.log('Validando usuario con email:', email);
  
    const user = await this.usersService.findByEmail(email);
    console.log('Usuario encontrado:', user);
  
    if (user) {
      // Generar un hash de la contraseña proporcionada para depuración
      const salt = await bcrypt.genSalt(10);
      const hashedPasswordProvided = await bcrypt.hash(password, salt);
      console.log('Contraseña proporcionada (hash):', hashedPasswordProvided);
  
      const isPasswordValid = await bcrypt.compare(password, user.contrasena);
  
      if (isPasswordValid) {
        const { contrasena, ...result } = user;
        console.log('Usuario validado correctamente:', result);
        return result;
      }
    }
  
    console.log('Credenciales incorrectas');
    throw new UnauthorizedException('Credenciales incorrectas');
  }

  async generateToken(user: any) {
    const payload = { email: user.correo, sub: user.idUsuario, role: user.idRol };
    return {
      access_token: this.jwtService.sign(payload),
      role: user.idRol
    };
  }
}
