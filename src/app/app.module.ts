import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { EachResultComponent } from './components/each-result/each-result.component';
import { HomeComponent } from './components/home/home.component';

import {CountryState} from "./State/country.state"

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SearchResultComponent,
    EachResultComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forRoot([CountryState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
