import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from "../../services/country-service.service"

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  result: any = null;
  
  constructor(private countryService: CountryServiceService ) { }
  
  country: any = localStorage.getItem("country keyword")

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry() {
    this.countryService.getCountry(localStorage.getItem("country keyword")).subscribe(country => { this.result = country[0] });
    localStorage.setItem("loading", "false");
    this.country = localStorage.getItem("country keyword");
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
