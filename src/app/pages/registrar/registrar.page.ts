import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/services.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

/*   //Creacion de grupo del formulario del profesor:
  docente = new FormGroup({
    rut : new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,2}.[0-9]{3}.[0-9]{3}-[0-9kK]{1}')]),
    nom_docente: new FormControl('', [Validators.required, Validators.minLength(3)]),
    fec_nac: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(18)]),
    email: new FormControl('',[Validators.required, Validators.pattern('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')]),
    tipo_usuario: new FormControl('docente')
  });
   */
  alumno = new FormGroup({
    rut : new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,2}.[0-9]{3}.[0-9]{3}-[0-9kK]{1}')]),
    nom_completo: new FormControl('', [Validators.required, Validators.minLength(3)]),
    fecha_nac: new FormControl('', Validators.required),
    semestre: new FormControl('', [Validators.required, Validators.min(1), Validators.max(8)]),
    email: new FormControl('',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(18)]),
    tipo_usuario: new FormControl('alumno')
  });
  verificar_password: string;




  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }
 //método del formulario
 registrar(){
  if (this.alumno.controls.password.value != this.verificar_password) {
    alert('CONTRASEÑAS NO COINCIDEN!');
    return;
  }
  this.usuarioService.agregarUsuario(this.alumno.value);
  alert('ALUMNO REGISTRADO!');
  this.router.navigate(['/login']);
  //this.alumno.reset();
  //this.verificar_password = '';
}
}
