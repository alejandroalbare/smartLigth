import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LigthService {

  baseUrl: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  turn(status: boolean) {
    return this.http.get(`${this.baseUrl}/${status}`);
  }

}
