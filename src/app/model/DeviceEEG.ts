import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

export class DeviceEEG {
  
  constructor(private bth: BluetoothSerial) {}

  isConnected() {
    return this.bth.isConnected();
  }
  startEEG () {
    this.bth.write('p');
  }

  stopEEG() {
    this.bth.write('s');
  }
}