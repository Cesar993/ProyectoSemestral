import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
//VARIABLES:
usuarios: any[] = [
  {
    rut: '11.111.111-1',
    nom_completo: 'admin',
    fecha_nac: '1990-03-24',
    semestre: 1,
    password: '123123123',
    tipo_usuario: 'administrador'
  },
  {
    rut: '2.222.222-2',
    nom_completo: 'alumno',
    fecha_nac: '1990-03-24',
    semestre: 1,
    password: '222222',
    tipo_usuario: 'alumno'

  }
];
  constructor() { }


  // metodo customer para validar el rut y contrasenia:

  validarRutPasword(rut, pass){
    return this.usuarios.find(usu => usu.nom_completo == rut && usu.password == pass)
  }
  // CRUD

  // Agregar usuario

  agregarUsuario(usuario){
    this.usuarios.push(usuario);
  }
  // Eliminar usuario

  eliminarUsuario(rut){
    this.usuarios.forEach((usu, i) => {
      if (usu.rut == rut) {
        this.usuarios.splice(i,1);
      }
    });
  }

  //Modificar usuario

  modificarUsuario(usuario){
    var i = this.usuarios.findIndex(u => usuario.rut == usuario.rut);
    this.usuarios[i] = usuario;
  }

  // obtener usuario

  obtenerUsuario(rut){
    return this.usuarios.find(u => u.rut == rut);
  }


  //Obtener usuarios

  ObtenerUsuarios(){
    return this.usuarios;
  }
}
