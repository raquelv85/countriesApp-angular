import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  capital: string = '';
  isError: boolean = false;
  capitals: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(capital: string) {
    this.isError = false;
    this.capital = capital;
    this.countryService.searchCapital(this.capital).subscribe(
      (resp) => {
        this.capitals = resp;
      },
      (err) => {
        this.isError = true;
        this.capitals = [];
      }
    );
  }

  suggest(capital: string) {
    this.isError = false;
  }
}
