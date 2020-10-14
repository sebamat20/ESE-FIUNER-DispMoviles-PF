import { Injectable } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@Injectable({
  providedIn: 'root'
})
export class BluetoothService {


  constructor(private bth: BluetoothSerial) { }
  
  public async isConnected() {
    return this.bth.isConnected();
  }

  public connect(macAddress) {
    return this.bth.connect(macAddress);
  }

  public list() {
    return this.bth.list();
  }

  public isEnabled() {
    return this.bth.isEnabled();
  }

  public disconnect() {
    return this.bth.disconnect();
  }
  
  public write(msj) {
    return this.bth.write(msj);
  }
  
}