// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// import { IonicModule } from '@ionic/angular';

// import { ViewAllPatientsPageRoutingModule } from './view-all-patients-routing.module';

// import { ViewAllPatientsPage } from './view-all-patients.page';

// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     IonicModule,
//     ViewAllPatientsPageRoutingModule
//   ],
//   declarations: [ViewAllPatientsPage]
// })
// export class ViewAllPatientsPageModule {}

// 


import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ViewAllPatientsPage } from './view-all-patients.page';
import { ViewAllPatientsPageRoutingModule } from './view-all-patients-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllPatientsPageRoutingModule,
    HttpClientModule,
    NgxDatatableModule
  ],
  declarations: [
    ViewAllPatientsPage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewAllPatientsPageModule {}

