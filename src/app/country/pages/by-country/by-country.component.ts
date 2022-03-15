import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  country: string = 'Honduras';

  constructor(private countryService: CountryService) {}

  search() {
    console.log(this.country);
    this.countryService.searchCountry(this.country).subscribe((resp) => {
      console.log(resp);
    });
  }
}
