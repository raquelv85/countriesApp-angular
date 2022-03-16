import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `li {
      cursor: pointer;
    }`
  ],
})
export class ByCountryComponent {
  country: string = '';
  isError: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggested: boolean = false;

  constructor(private countryService: CountryService) {}

  search( country: string) {
    this.isError = false;
    this.country = country;
    this.showSuggested = false
    this.countryService.searchCountry(this.country).subscribe((resp) => {
      this.countries = resp
    }, (err) => {
      this.isError = true;
      this.countries = []
    });
  }

  suggest(country: string){
    this.isError = false;
    this.country = country
    this.showSuggested = true
    this.countryService.searchCountry(country)
    .subscribe(countries => {
      this.suggestedCountries = countries,
      () => this.suggestedCountries = []
    })
  }

}
