import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPatientPageRoutingModule } from './view-patient-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ViewPatientPage } from './view-patient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPatientPageRoutingModule,
    HttpClientModule

  ],
  declarations: [ViewPatientPage]
})
export class ViewPatientPageModule {}
