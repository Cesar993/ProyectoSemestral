import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
//VARIABLES:
usuarios: any[] = [
  {
    rut: '11.111.111-1',
    nom_completo: 'Satan',
    fecha_nac: '1990-03-24',
    semestre: 1,
    password: '123123123',
    tipo_usuario: 'administrador'
  }
];
  constructor() { }


  // metodo customer para validar el rut y contrasenia:

  validarRutPasword(rut, pass){
    return this.usuarios.find(usu => usu.rut == rut && usu.password == pass)
  }


}
