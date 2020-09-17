import { Injectable } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Report } from '../shared/report.model';
import { Router } from '@angular/router';
import { CityMode } from './city-mode.enum';

const POLLING_URL = "http://api.openweathermap.org/data/2.5/weather?units=metric&lang=en&q=";
const TOKEN = "&APPID=5373a74b28442f4c6f5c69563b13dbb8";
// http://api.openweathermap.org/data/2.5/weather?units=metric&lang=en&q=santiago&APPID=5373a74b28442f4c6f5c69563b13dbb8

@Injectable({ providedIn: 'root' })   
export class PollingService {
  
  constructor(private http: HttpClient, public router: Router) { }

  getReport(city: string): Observable<Report> {
    return this.http.get<Report>(POLLING_URL + city + TOKEN)
    .pipe(
        catchError(err => {
            alert(JSON.stringify(err));
        return of(null);
        })
    );
  }

  getAllReport(): Observable<Report[]> {
    let cities = Object.values(CityMode)
    let observables: any = [];
      cities.map(city => {
        if (city !== CityMode.Select ) {
          let resp = this.http.get(POLLING_URL + city + TOKEN);
          observables.push(resp);
        }
      })
      return forkJoin(observables);
  }
}
