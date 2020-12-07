import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
// import { catchError } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CountryServiceService {

  constructor(private http: HttpClient) { }

  baseUrl = `https://restcountries.eu/rest/v2/name`

  getCountry(country: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${country}`)
  }
}
