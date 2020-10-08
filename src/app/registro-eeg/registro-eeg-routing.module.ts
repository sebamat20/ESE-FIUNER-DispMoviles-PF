import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroEEGPage } from './registro-eeg.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroEEGPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroEEGPageRoutingModule {}
