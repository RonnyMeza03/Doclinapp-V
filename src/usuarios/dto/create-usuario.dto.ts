import { Aplicacion } from "src/aplicacion/entities/aplicacion.entity"

export class CreateUsuarioDto {
    nombreUsuario: string
    nombre: string
    apellido: string
    contrasena: string
    correo: string
    telefono: number
    rol: string
    fechaNacimiento: Date
    aplicacionID: Aplicacion
}
