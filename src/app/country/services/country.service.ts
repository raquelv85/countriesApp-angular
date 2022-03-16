import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams(){
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flags,population,cca2');
  }

  constructor( private http: HttpClient) { }

  searchCountry( country: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${country}`
    return this.http.get<Country[]>( url, { params: this.httpParams} )
  }

  searchCapital( country: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${country}`
    return this.http.get<Country[]>( url, { params: this.httpParams} )
  }

  getCountry( id: string): Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country[]>( url )
  }

  searchRegion( region: string):Observable<Country[]>{
    const url = `https://restcountries.com/v2/regionalbloc/${region}`
    return this.http.get<Country[]>( url, { params: this.httpParams} )
  }
}
