import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPatientRecordPage } from './view-patient-record.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPatientRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPatientRecordPageRoutingModule {}
