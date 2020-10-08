import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BluetoothService } from '../services/bluetooth.service';

@Component({
  selector: 'app-calibracion',
  templateUrl: './calibracion.page.html',
  styleUrls: ['./calibracion.page.scss'],
})
export class CalibracionPage implements OnInit {

  private conectado = false;

  constructor(public alertCtrl: AlertController, private servBth: BluetoothService) { }

  public async ngOnInit() {
    this.conectado = await this.servBth.isConnected();
    if (!this.conectado == false) {
      this.mostrarAlerta();
    }
  }
  
  public startCALIB() {
    this.servBth.write('i');
  }
  
  public stopCALIB() {
    this.servBth.write('t');
  }

  async mostrarAlerta() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'No se ha conectado a ningun dispositivo',
      buttons: ['OK']
    });
    await alert.present();
  }

}
