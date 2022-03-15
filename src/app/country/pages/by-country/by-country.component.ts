import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent  {

  country: string = "Honduras"

  constructor() { }

  search(){
    console.log(this.country);
    
  }


}
