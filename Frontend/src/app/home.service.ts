import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private _specialEventsUrl = "http://localhost:3000/api/special";

  constructor(private http: HttpClient) { }
  
  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl)
  }
}
