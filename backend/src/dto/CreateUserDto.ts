export class CreateUserDto {
    correo: string;
    contrasena: string;
    idRol: number;
    celular: string;
    estado?: string;  // Hacer opcional con valor por defecto
    foto?: string;    // Hacer opcional
}