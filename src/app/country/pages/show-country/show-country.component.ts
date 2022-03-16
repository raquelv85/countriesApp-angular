import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [],
})
export class ShowCountryComponent implements OnInit {
  country: Country [] = []

  constructor(
    private activateRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.countryService.getCountry(id))
    )
    .subscribe(country => {
      console.log(country);
     this.country = country;
    })

    // this.activateRoute.params.subscribe(({ id }) => {
    //   this.countryService.getCountry(id).subscribe((country) => {
    //     console.log(country);
    //   });
    // });
  }
}
