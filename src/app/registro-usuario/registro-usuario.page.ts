import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage {


  private profesional: string;
  private paciente: string;
  private estudio = "r";

  constructor( public toastCtrl: ToastController) { }

  public async guardar() {
    const toast = await this.toastCtrl.create({
      message: "Datos guardados",
      duration: 1000
    });
    toast.present();
  }

}
