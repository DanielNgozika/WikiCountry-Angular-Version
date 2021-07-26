import { Component, OnInit } from '@angular/core';
import { Select, Store } from "@ngxs/store";
import { Observable } from 'rxjs'
import { CountryState } from "../../State/country.state";
import { CountryServiceService } from "../../services/country-service.service"

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  // country: Observable<string>;

  country$: Observable<string>
  // @Select(CountryState.) country$: Observable<any>;

  result: any = null;
  
  constructor(private countryService: CountryServiceService, private store: Store ) { 
    this.country$ = this.store.select(state => state.country)
  }
  
  // country: any = localStorage.getItem("country keyword")

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry() {
    this.countryService.getCountry(localStorage.getItem("country keyword")).subscribe(country => { this.result = country[0] });
    localStorage.setItem("loading", "false");
    // this.country$ = localStorage.getItem("country keyword");
  }

  isLoading() {
    const loading = localStorage.loading;
    console.log(loading === "true" ? true : false)
    return loading === "true" ? true : false;
  }

  search = ():void => {
    this.getCountry();
  }

}
