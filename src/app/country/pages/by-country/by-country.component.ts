import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  country: string = '';
  isError: boolean = false

  constructor(private countryService: CountryService) {}

  search() {
    this.isError = false;
    console.log(this.country);
    this.countryService.searchCountry(this.country).subscribe((resp) => {
      console.log(resp);
    }, (err) => {
      this.isError = true;
    });
  }
}
