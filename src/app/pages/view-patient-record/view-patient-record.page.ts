import { Component, OnInit } from '@angular/core';
import { Patientrecords, PatientrecordsService } from 'src/app/services/patientrecords.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-view-patient-record',
  templateUrl: './view-patient-record.page.html',
  styleUrls: ['./view-patient-record.page.scss'],
})
export class ViewPatientRecordPage implements OnInit {

  patientrecords: Patientrecords = {
    firstname: 'Fathima',
    lastname: 'Fathila',
    date: '1994-12-19',
    type: 'Covid',
    nursename: 'Dr sheet',
    bloodpressure: 100,
    respiratoryrate: 101,
    bloodoxygenlevel: 101,
    heartbeatrate: 120

  
  };
 
  patientId = null;

  constructor(private route: ActivatedRoute, private nav: NavController, private patientrecordsService: PatientrecordsService, private loadingController: LoadingController) { }
 
  ngOnInit() {
    this.patientId = this.route.snapshot.params['id'];
    if (this.patientId)  {
      this.loadPatientrecord();
    }
  }
  async loadPatientrecord() {
    const loading = await this.loadingController.create({
      message: 'Loading Patientrecords..'
    });
    await loading.present();
 
    this.patientrecordsService.getPatientrecord(this.patientId).subscribe(res => {
      loading.dismiss();
      this.patientrecords = res;
    });
  }
  async savePatientrecords() {
 
    const loading = await this.loadingController.create({
      message: 'Saving Todo..'
    });
    await loading.present();
 
    if (this.patientId) {
      this.patientrecordsService.updatePatientrecord(this.patientrecords, this.patientId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('add-patient-record');
      });
    } else {
      this.patientrecordsService.addPatientrecord(this.patientrecords).then(() => {
        loading.dismiss();
        this.nav.navigateBack('add-patient-record');
      });
    }
  }
}
  