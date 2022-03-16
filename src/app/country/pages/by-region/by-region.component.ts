import { Component } from '@angular/core';
import { Country, RegionCodes } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 8px;
        margin-bottom: 8px;
      }
    `,
  ],
})
export class ByRegionComponent {
  regions: RegionCodes[] = [
    {code: 'EU', title: 'European Union'},
    {code: 'EFTA', title: 'European Free Trade Association'},
    {code: 'CARICOM', title: 'Caribbean Community'},
    {code: 'PA', title: 'Pacific Alliance'},
    {code: 'AU', title: 'African Union'},
    {code: 'USAN', title: 'Union of South American Nations'},
    {code: 'EEU', title: 'Eurasian Economic Union'},
    {code: 'AL', title: 'Arab League'},
    {code: 'ASEAN', title: 'Association of Southeast Asian Nations'},
    {code: 'CAIS', title: 'Central American Integration System'},
    {code: 'CEFTA', title: 'Central European Free Trade Agreement'},
    {code: 'NAFTA', title: 'North American Free Trade Agreement'},
    {code: 'SAARC', title: 'South Asian Association for Regional Cooperation'},
  ];
  isActive: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  getCssClass(region: string): string {
    return region === this.isActive
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activeRegion(region: string) {
    if(region === this.isActive) return;
    this.isActive = region;

    this.countryService.searchRegion(region).subscribe(
      (resp) => {
        resp[0].cca2 = resp[0].alpha2Code
        this.countries = resp;
      },
      (err) => {
       
      }
    );
  }
}
