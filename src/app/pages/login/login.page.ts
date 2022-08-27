import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
// VARIABLES:
user: string;
password: string;

  constructor(private usuarioService: UsuarioService, private router: Router, private toastController: ToastController) { }

  ngOnInit() {
  }

  // metodo para ingresar a home:
  login(){
    var usuarioLogin = this.usuarioService.validarRutPasword(this.user, this.password);
  // VALIDAR EL INGRESO DEL ADMIN
  if (usuarioLogin != undefined) {
    this.router.navigate(['/home'])   
  } else{
    this.tostadaError();
  }
  }
//toast
async tostadaError() {
  const toast = await this.toastController.create({
    message: 'Usuario o contraseña incorrectos!!!',
    duration: 3000
  });
  toast.present();
}
}
