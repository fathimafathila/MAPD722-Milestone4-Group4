import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'paper-plane' },
    { title: 'Add Patient', url: '/add-patient', icon: 'paper-plane' },
    { title: 'View Patient', url: '/view-patient', icon: 'paper-plane' },
    { title: 'View All Patients', url: '/view-all-patients', icon: 'paper-plane' },
    { title: 'Add Patient Record', url: '/add-patient-record', icon: 'paper-plane' },
    { title: 'View Patient Record', url: '/view-patient-record', icon: 'paper-plane' },
  ];

  constructor() {}
}
