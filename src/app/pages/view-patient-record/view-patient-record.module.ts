import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPatientRecordPageRoutingModule } from './view-patient-record-routing.module';

import { ViewPatientRecordPage } from './view-patient-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPatientRecordPageRoutingModule
  ],
  declarations: [ViewPatientRecordPage]
})
export class ViewPatientRecordPageModule {}
