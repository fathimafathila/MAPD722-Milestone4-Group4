import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Patient {
  id?: string;
  firstname: string;
  lastname: string;
  dob: string;
  department: string;
  doctor: string;
  contactnumber: number;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patientCollection: AngularFirestoreCollection<Patient>;
 
  private patients: Observable<Patient[]>;
 
  constructor(db: AngularFirestore) {
    this.patientCollection = db.collection<Patient>('patients');
 
    this.patients = this.patientCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getPatients() {
    return this.patients;
  }
 
  getPatient(id) {
    return this.patientCollection.doc<Patient>(id).valueChanges();
  }
 
  updatePatient(patient: Patient, id: string) {
    return this.patientCollection.doc(id).update(patient);
  }
 
  addPatient(patient: Patient) {
    return this.patientCollection.add(patient);
  }
 
  removePatient(id) {
    return this.patientCollection.doc(id).delete();
  }


}
