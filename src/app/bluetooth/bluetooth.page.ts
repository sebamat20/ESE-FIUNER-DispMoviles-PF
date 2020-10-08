import { Component, OnInit } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { AlertController, ToastController } from '@ionic/angular';
import { DeviceEEG } from '../model/DeviceEEG';
import { BluetoothService } from '../services/bluetooth.service';

@Component({
  selector: 'app-bluetooth',
  templateUrl: './bluetooth.page.html',
  styleUrls: ['./bluetooth.page.scss'],
})
export class BluetoothPage implements OnInit {

  constructor(public alertCtrl: AlertController, public toastCtrl: ToastController, private servBth: BluetoothService) { }

  public listaDisp = [];

  public async ngOnInit() {
    try {
      await this.servBth.isEnabled();
      this.presentToast("Bluetooth habilitado");
      this.listaDispositivos();
    } catch (e) {
      this.showError(e);
    }
  }

  public async listaDispositivos() {
    this.listaDisp = await this.servBth.list();
  }

  public conectar(address) {
    this.servBth.connect(address).subscribe(resp => {
      this.presentToast("Conexion exitosa");
    }, error => {
        alert(error);
    });
  }

  public desconectar() {
    this.servBth.disconnect();
  }

  async presentToast(msj) {
    const toast = await this.toastCtrl.create({
      message: msj,
      duration: 1000
    });
    toast.present();
  }

  async showError(msj) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: msj,
      buttons: ['OK']
    });
    await alert.present();
  }
}