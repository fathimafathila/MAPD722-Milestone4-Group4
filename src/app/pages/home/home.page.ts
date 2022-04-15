import { Component, OnInit } from '@angular/core';
//import { Patient, PatientService } from '../services/patient.service';

import { PatientService, Patient } from 'src/app/services/patient.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  patients: Patient[];


  constructor(private PatientService: PatientService) { }

  ngOnInit() {
    this.PatientService.getPatients().subscribe(res => {
      this.patients = res;
    });
  }

  remove(item) {
    this.PatientService.removePatient(item.id);
  }

}
