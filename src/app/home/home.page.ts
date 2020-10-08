import { Component, OnInit } from '@angular/core';
import { BluetoothService } from '../services/bluetooth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private conectado;

  constructor(private servBth: BluetoothService) { }
  
  public async ngOnInit() {
    this.conectado = await this.servBth.isConnected();
    alert(this.conectado);
  }
}
