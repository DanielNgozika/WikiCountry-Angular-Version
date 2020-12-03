import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchResultComponent } from "./components/search-result/search-result.component"

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "search_result", component: SearchResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
