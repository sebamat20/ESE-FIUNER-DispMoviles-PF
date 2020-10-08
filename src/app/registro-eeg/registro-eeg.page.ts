import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BluetoothService } from '../services/bluetooth.service';

@Component({
  selector: 'app-registro-eeg',
  templateUrl: './registro-eeg.page.html',
  styleUrls: ['./registro-eeg.page.scss'],
})
export class RegistroEEGPage implements OnInit {
  
  private conectado = false;

  constructor(public alertCtrl: AlertController, private servBth: BluetoothService) { }

  public async ngOnInit() {
    this.conectado = await this.servBth.isConnected();
    if (this.conectado == false) {
      this.mostrarAlerta();
    }
  }
  
  public startEEG() {
    this.servBth.write('p');
  }
  
  public stopEEG() {
    this.servBth.write('s');
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
