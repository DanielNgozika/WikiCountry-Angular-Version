import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
// import { catchError } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Store } from "@ngxs/store";
//action
import { GetCountry } from "../actions/country.actions"

@Injectable({
  providedIn: 'root'
})

export class CountryServiceService {

  constructor(private http: HttpClient, private store: Store) { }

  baseUrl = `https://restcountries.eu/rest/v2/name`

  getCountry(country: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${country}`)
  }
}
