// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-view-all-patients',
//   templateUrl: './view-all-patients.page.html',
//   styleUrls: ['./view-all-patients.page.scss'],
// })
// export class ViewAllPatientsPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { IonicModule } from '@ionic/angular';
// import { FormsModule } from '@angular/forms';
// import { ViewAllPatientsPage } from './view-all-patients.page';
// import { ViewAllPatientsPageModule } from './view-all-patients-routing.module';
// import { HttpClientModule } from '@angular/common/http';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     IonicModule,
//     HomePageRoutingModule,
//     HttpClientModule,
//     NgxDatatableModule
//   ],
//   declarations: [
//     ViewAllPatientsPage
//   ],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA]
// })
// export class ViewAllPatientsPageModule {}


import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';
export interface Data {
  movies: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './view-all-patients.page.html',
  styleUrls: ['./view-all-patients.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewAllPatientsPage {
 

    //   constructor() { }
    
    //   ngOnInit() {
    //   }
  public data: Data;
  public columns: any;
  public rows: any;
  constructor(
    private http: HttpClient
  ) {
    this.columns = [
      { name: 'Firstname' },
      { name: 'Lastname' },
      { name: 'Dob' },
      { name: 'Department' }
    ];
    this.http.get<Data>('../../assets/movies.json')
      .subscribe((res) => {
        console.log(res)
        this.rows = res.movies;
      });
  }
}
