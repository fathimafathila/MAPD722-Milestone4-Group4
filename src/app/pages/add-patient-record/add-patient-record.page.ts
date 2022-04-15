import { Component, OnInit } from '@angular/core';
import { Patientrecords, PatientrecordsService } from 'src/app/services/patientrecords.service';

@Component({
  selector: 'app-add-patient-record',
  templateUrl: './add-patient-record.page.html',
  styleUrls: ['./add-patient-record.page.scss'],
})
export class AddPatientRecordPage implements OnInit {

  patientrecords: Patientrecords[];


  constructor(private PatientrecordsService: PatientrecordsService) { }

  ngOnInit() {
    this.PatientrecordsService.getPatientrecords().subscribe(res => {
      this.patientrecords = res;
    });
  }

  remove(item) {
    this.PatientrecordsService.removePatientrecord(item.id);
  }


}
