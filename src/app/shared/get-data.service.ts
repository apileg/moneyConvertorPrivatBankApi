import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CurrencyResponse} from "./interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  public getCurrency(): Observable<any>{
    return this.http.get<CurrencyResponse>('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
  }
}
