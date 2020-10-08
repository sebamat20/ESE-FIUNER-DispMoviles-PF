import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroEEGPageRoutingModule } from './registro-eeg-routing.module';

import { RegistroEEGPage } from './registro-eeg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroEEGPageRoutingModule
  ],
  declarations: [RegistroEEGPage]
})
export class RegistroEEGPageModule {}
