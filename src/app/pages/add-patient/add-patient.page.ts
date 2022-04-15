import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
// import { BikePage } from '../bike/bike';
// import { Data } from '../../providers/data/data';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PatientService, Patient } from 'src/app/services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

import { Plugins, Capacitor }  from '@capacitor/core';
import { SQLiteConnection } from '@capacitor-community/sqlite'; 
const { CapacitorSQLite } = Plugins;
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.page.html',
  styleUrls: ['./add-patient.page.scss'],
})
export class AddPatientPage implements OnInit {
  movies = {}

  patient: Patient = {
    firstname: 'Fathima',
    lastname: 'Fathila',
    dob: '1994-12-19',
    department: 'Covid',
    doctor: 'Dr sheet',
    contactnumber: 8765678787,
    address: '123 thornyvineway',
  
  };
 
  patientId = null;

  constructor(private route: ActivatedRoute, private nav: NavController, private patientService: PatientService, private loadingController: LoadingController) { }
 
  ngOnInit() {
    this.patientId = this.route.snapshot.params['id'];
    if (this.patientId)  {
      this.loadPatient();
    }
  }
  async loadPatient() {
    const loading = await this.loadingController.create({
      message: 'Loading Patient..'
    });
    await loading.present();
 
    this.patientService.getPatient(this.patientId).subscribe(res => {
      loading.dismiss();
      this.patient = res;
    });
  }
  async saveTodo() {
 
    const loading = await this.loadingController.create({
      message: 'Saving Todo..'
    });
    await loading.present();
 
    if (this.patientId) {
      this.patientService.updatePatient(this.patient, this.patientId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    } else {
      this.patientService.addPatient(this.patient).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    }
  }
  //   const add-patient : React.FC = () => {

  //    useEffect (  () => {

  //     const initdb = async () => {
  //       const mSQLite = new SQLiteConnection(CapacitorSQLite);
  //       const db: any = await mSQLite.createConnection(
  //         "testdb",
  //         false,
  //         "no-encryption",
  //         1
  //       );
  //       alert(JSON.stringify(db, null, 3));
  //     }
  //     initdb().then(() => {
  //       console.log(":initialixed ");
  //     });
  
  //   }, [] )
   
  // }

  


}
