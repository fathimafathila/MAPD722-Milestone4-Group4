import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Patientrecords {
  id?: string;
  firstname: string;
  lastname: string;
  date: string;
  nursename: string;
  type: string;
  bloodpressure: number;
  respiratoryrate: number;
  bloodoxygenlevel: number;
  heartbeatrate: number;

}



@Injectable({
  providedIn: 'root'
})
export class PatientrecordsService {
  

  private patientCollection: AngularFirestoreCollection<Patientrecords>;
 
  private patientrecords: Observable<Patientrecords[]>;
 
  constructor(db: AngularFirestore) {
    this.patientCollection = db.collection<Patientrecords>('patientrecords');
 
    this.patientrecords = this.patientCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getPatientrecords() {
    return this.patientrecords;
  }
 
  getPatientrecord(id) {
    return this.patientCollection.doc<Patientrecords>(id).valueChanges();
  }
 
  updatePatientrecord(patientrecords: Patientrecords, id: string) {
    return this.patientCollection.doc(id).update(patientrecords);
  }
 
  addPatientrecord(patientrecords: Patientrecords) {
    return this.patientCollection.add(patientrecords);
  }
 
  removePatientrecord(id) {
    return this.patientCollection.doc(id).delete();
  }

}
