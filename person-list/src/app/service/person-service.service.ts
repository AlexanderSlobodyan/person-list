import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {
  private _ISCLOSED = new BehaviorSubject<any>(null);
  public IsClose$ = this._ISCLOSED.asObservable();
  private _PERSONS = new BehaviorSubject<any>(null);
  public persons$ = this._PERSONS.asObservable();
  public persons: any[];
  public result = {};
  public arrayres = [];
  private data = '/assets/data/person.json';

  constructor(private http: HttpClient) { }

  getPerson() {
    return this.http.get(this.data)
      .subscribe(
        i => {
          this.persons = Object.keys(i).map(key => ({ id: [key], value: i[key] }));
          this.changePersonsArray(this.arrayres);
        });

  }

  onClick() {
  }

  changePersonsArray(data: any) {
    this._PERSONS.next(data);
    console.log(data);
    this.persons[4].value.rows.forEach((row) => {
      const RES_OBJECT = {};
      row.forEach((element, i) => {
        RES_OBJECT[this.persons[4].value.metaData[i].name] = element;
      });
      this.arrayres.push(RES_OBJECT);
      console.log(this.arrayres);
    });

  }
  modalClosed(data: any) {
    this._ISCLOSED.next(data);
  }
}
