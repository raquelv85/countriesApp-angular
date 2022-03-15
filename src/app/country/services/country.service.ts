import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient) { }

  searchCountry( country: string): Observable<any>{
    const url = `${this.apiUrl}/name/${country}`
    return this.http.get( url )
  }

}
