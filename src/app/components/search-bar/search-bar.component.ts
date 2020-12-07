import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  country: any = localStorage.getItem("country keyword");

  @Input() submit: any = () => "";

  search() {
		localStorage.setItem("loading", "true");
		localStorage.setItem("country keyword", `${this.country}`);
    this.submit();
  }

}
