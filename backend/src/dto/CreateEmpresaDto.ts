export class CreateEmpresaUsuarioDto {
    // Datos compartidos
    ruc: string;          // Para empresa.ruc y usuario.contrasena
    contacto: string;      // Para empresa.contacto y usuario.correo
    
    // Datos de empresa
    razonsocial: string;
    celular: string;
    ciudad: string;
    direccion: string;
    vigenciaInicio: string;
    vigenciaFin: string;
  }