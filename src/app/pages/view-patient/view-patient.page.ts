import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';
export interface Data {
  movies: string;
}
@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.page.html',
  styleUrls: ['./view-patient.page.scss'],
})
export class ViewPatientPage implements OnInit {
  public data: Data;
  public fn: any;

  constructor(private http: HttpClient) { 
    this.fn = [
      { name: 'Firstname' }
    ];
    this.http.get<Data>('../../assets/movies.json')
      .subscribe((res) => {
        console.log(res)
        this.fn = res.movies;
      });
  }

  ngOnInit() {
    // fetch('./../assets/movies.json').then(res -> res.json()).then(json -> {
    //   console.log('results::', json);
    //   this.results = json;
    // }
    //);
  }

}
