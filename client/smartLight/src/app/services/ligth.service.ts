import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LigthService {

  baseUrl: string = "http://192.168.1.107:3001";

  constructor(private http: HttpClient) { }

  turn(status: boolean) {
    if(status){
      return this.http.get(`${this.baseUrl}/turnOn`);
    }else{
      return this.http.get(`${this.baseUrl}/turnOff`);
    }
  }

  getStatus(){
    return this.http.get(`${this.baseUrl}/getStatus`);
  }

}
